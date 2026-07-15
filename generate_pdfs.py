"""
generate_pdfs.py
----------------
Generates all 30 branded workbook PDFs for The Growth Ledger course,
reading from lessons-export.json (itself dumped from js/lessons-data.js
so the PDFs never drift out of sync with the website content).

Usage:
    node -e "const {LESSONS} = require('./js/lessons-data.js'); \
      require('fs').writeFileSync('lessons-export.json', JSON.stringify(LESSONS));"
    python3 generate_pdfs.py

Re-run both commands any time you edit js/lessons-data.js.
"""

import json
import os
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    HRFlowable, ListFlowable, ListItem, PageBreak
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_CENTER
from reportlab.pdfgen import canvas as pdfcanvas

# ---- Brand palette (matches css/style.css) ----
INK_GREEN   = colors.HexColor("#0F3D2E")
CEDI_GOLD   = colors.HexColor("#C89B3C")
PAPER       = colors.HexColor("#F6F1E4")
CHARCOAL    = colors.HexColor("#211D18")
SAGE        = colors.HexColor("#DCE3D3")
WHITE       = colors.white

HERE = os.path.dirname(os.path.abspath(__file__))
OUT_DIR = os.path.join(HERE, "pdfs")
os.makedirs(OUT_DIR, exist_ok=True)

with open(os.path.join(HERE, "lessons-export.json"), "r", encoding="utf-8") as f:
    LESSONS = json.load(f)

styles = getSampleStyleSheet()

style_title = ParagraphStyle("WBTitle", parent=styles["Title"], fontName="Helvetica-Bold",
                              fontSize=22, textColor=INK_GREEN, spaceAfter=4, leading=26)
style_eyebrow = ParagraphStyle("Eyebrow", parent=styles["Normal"], fontName="Helvetica-Bold",
                                fontSize=9, textColor=CEDI_GOLD, spaceAfter=14, leading=12)
style_hook = ParagraphStyle("Hook", parent=styles["Normal"], fontName="Helvetica-Oblique",
                             fontSize=11, textColor=CHARCOAL, spaceAfter=16, leading=15)
style_h2 = ParagraphStyle("H2", parent=styles["Heading2"], fontName="Helvetica-Bold",
                           fontSize=13, textColor=INK_GREEN, spaceBefore=14, spaceAfter=6)
style_body = ParagraphStyle("Body", parent=styles["Normal"], fontName="Helvetica",
                             fontSize=10, textColor=CHARCOAL, leading=15, spaceAfter=8)
style_small = ParagraphStyle("Small", parent=styles["Normal"], fontName="Helvetica",
                              fontSize=8.5, textColor=colors.HexColor("#5b564c"), leading=12)
style_label = ParagraphStyle("Label", parent=styles["Normal"], fontName="Helvetica-Bold",
                              fontSize=9, textColor=WHITE)


def blank_lines(n=3, width_mm=170):
    """A set of ruled lines for the reader to write on."""
    rows = [["" ] for _ in range(n)]
    t = Table(rows, colWidths=[width_mm * mm])
    t.setStyle(TableStyle([
        ("LINEBELOW", (0, 0), (-1, -1), 0.6, colors.HexColor("#B9B2A0")),
        ("TOPPADDING", (0, 0), (-1, -1), 10),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 10),
    ]))
    return t


def checkbox_flowable():
    """A small hand-drawable checkbox square, since unicode box glyphs
    aren't reliably present in base-14 PDF fonts."""
    from reportlab.platypus.flowables import Flowable

    class _Box(Flowable):
        def __init__(self, size=9):
            super().__init__()
            self.size = size
            self.width = size + 2
            self.height = size + 2
        def draw(self):
            self.canv.setStrokeColor(INK_GREEN)
            self.canv.setLineWidth(1.1)
            self.canv.rect(1, 1, self.size, self.size, fill=0, stroke=1)
    return _Box()


def checklist_table(items):
    rows = [[checkbox_flowable(), Paragraph(item, style_body)] for item in items]
    t = Table(rows, colWidths=[10 * mm, 155 * mm])
    t.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("TOPPADDING", (0, 0), (-1, -1), 3),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
    ]))
    return t


def radio_flowable():
    from reportlab.platypus.flowables import Flowable

    class _Circle(Flowable):
        def __init__(self, size=9):
            super().__init__()
            self.size = size
            self.width = size + 2
            self.height = size + 2
        def draw(self):
            self.canv.setStrokeColor(INK_GREEN)
            self.canv.setLineWidth(1.1)
            r = self.size / 2
            self.canv.circle(r + 1, r + 1, r, fill=0, stroke=1)
    return _Circle()


def quiz_block(interactive):
    els = [Paragraph(f"<b>Reflect:</b> {interactive['question']}", style_body)]
    opt_rows = [[radio_flowable(), Paragraph(opt["text"], style_body)] for opt in interactive["options"]]
    t = Table(opt_rows, colWidths=[8 * mm, 157 * mm])
    t.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("TOPPADDING", (0, 0), (-1, -1), 3),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 7),
    ]))
    els.append(t)
    els.append(Spacer(1, 6))
    els.append(Paragraph(f"<i>Why it matters:</i> {interactive['explain']}", style_small))
    return els


def make_header_footer(lesson):
    def _draw(c: pdfcanvas.Canvas, doc):
        c.saveState()
        # Top band
        c.setFillColor(INK_GREEN)
        c.rect(0, A4[1] - 18 * mm, A4[0], 18 * mm, fill=1, stroke=0)
        c.setFillColor(CEDI_GOLD)
        c.setFont("Helvetica-Bold", 9)
        c.drawString(20 * mm, A4[1] - 11 * mm, "THE GROWTH LEDGER")
        c.setFillColor(colors.white)
        c.setFont("Helvetica", 9)
        c.drawRightString(A4[0] - 20 * mm, A4[1] - 11 * mm,
                           f"Day {lesson['day']:02d} of 30 · {lesson['date']}")
        # Footer
        c.setFillColor(colors.HexColor("#8a8371"))
        c.setFont("Helvetica", 7.5)
        c.drawString(20 * mm, 12 * mm, "thegrowthledger — 30-Day Business & Revenue Mastery Course")
        c.drawRightString(A4[0] - 20 * mm, 12 * mm, f"Page {doc.page}")
        c.restoreState()
    return _draw


def build_pdf(lesson):
    path = os.path.join(OUT_DIR, lesson["pdf"]["file"])
    doc = SimpleDocTemplate(
        path, pagesize=A4,
        topMargin=26 * mm, bottomMargin=20 * mm, leftMargin=20 * mm, rightMargin=20 * mm,
        title=f"Day {lesson['day']}: {lesson['title']} — The Growth Ledger",
        author="The Growth Ledger",
    )
    story = []

    story.append(Paragraph(f"DAY {lesson['day']:02d} &nbsp;·&nbsp; WEEK {lesson['week']} &nbsp;·&nbsp; {lesson['theme'].upper()}", style_eyebrow))
    story.append(Paragraph(lesson["title"], style_title))
    story.append(Paragraph(lesson["hook"], style_hook))
    story.append(HRFlowable(width="100%", thickness=1, color=SAGE, spaceAfter=12))

    story.append(Paragraph(lesson["intro"], style_body))

    for sec in lesson["sections"]:
        story.append(Paragraph(sec["h"], style_h2))
        story.append(Paragraph(sec["body"], style_body))

    story.append(Spacer(1, 6))
    story.append(Paragraph("PUT IT INTO PRACTICE", style_eyebrow))

    it = lesson["interactive"]
    if it["type"] == "checklist":
        story.append(checklist_table(it["items"]))
    elif it["type"] == "quiz":
        story.extend(quiz_block(it))
    elif it["type"] == "reflection":
        story.append(Paragraph(it["prompt"], style_body))
        story.append(Spacer(1, 4))
        story.append(blank_lines(5))

    story.append(Spacer(1, 10))
    action_table = Table(
        [[Paragraph(f"<b>Today's action step</b><br/>{lesson['action']}", style_body)]],
        colWidths=[170 * mm]
    )
    action_table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), colors.HexColor("#F3E7C9")),
        ("LINEBEFORE", (0, 0), (0, 0), 3, CEDI_GOLD),
        ("TOPPADDING", (0, 0), (-1, -1), 12),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 12),
        ("LEFTPADDING", (0, 0), (-1, -1), 14),
        ("RIGHTPADDING", (0, 0), (-1, -1), 14),
    ]))
    story.append(action_table)

    story.append(Spacer(1, 16))
    story.append(Paragraph("GO DEEPER — CURATED VIDEOS", style_eyebrow))
    video_rows = [[Paragraph(f"&gt;&gt; <b>{v['title']}</b><br/><font size=8 color='#5b564c'>{v['channel']}</font><br/>{v['url']}", style_body)]
                  for v in lesson["videos"]]
    vt = Table(video_rows, colWidths=[170 * mm])
    vt.setStyle(TableStyle([
        ("BOX", (0, 0), (-1, -1), 0.6, SAGE),
        ("INNERGRID", (0, 0), (-1, -1), 0.6, SAGE),
        ("TOPPADDING", (0, 0), (-1, -1), 8),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
        ("LEFTPADDING", (0, 0), (-1, -1), 10),
    ]))
    story.append(vt)

    story.append(Spacer(1, 18))
    story.append(Paragraph("YOUR NOTES", style_eyebrow))
    story.append(blank_lines(6))

    doc.build(story, onFirstPage=make_header_footer(lesson), onLaterPages=make_header_footer(lesson))
    return path


if __name__ == "__main__":
    for lesson in LESSONS:
        p = build_pdf(lesson)
        print(f"Built: {os.path.relpath(p, HERE)}")
    print(f"\nDone — {len(LESSONS)} workbook PDFs generated in /pdfs")
