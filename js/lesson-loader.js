/* ============================================================
   LESSON LOADER — powers lesson.html for any ?day=N
   ============================================================ */

(function(){

  const params = new URLSearchParams(window.location.search);
  const day = Number(params.get("day"));
  const lesson = getLessonByDay(day);

  function showDenied(heading, message){
    document.getElementById("loading-state").classList.add("hidden");
    document.getElementById("denied-heading").textContent = heading;
    document.getElementById("denied-message").textContent = message;
    document.getElementById("denied-state").classList.remove("hidden");
  }

  if (!lesson) {
    showDenied("Lesson not found", "That day doesn't exist in this 30-day course. Head back to your dashboard and pick a valid day.");
    return;
  }

  requireAuth().then(user => {
    db.collection("users").doc(user.uid).get().then(doc => {
      const data = doc.exists ? doc.data() : { paid:false, completedDays:[] };

      if (!data.paid) {
        window.location.href = "index.html?next=" + encodeURIComponent(`lesson.html?day=${day}`);
        return;
      }

      if (!isDayUnlocked(day)) {
        showDenied(
          `Day ${day} unlocks on ${formatDateLong(lesson.date)}`,
          "Lessons unlock one at a time, on their calendar date, so the course builds properly — like a real 30-day programme, not a binge. Come back on the unlock date, or catch up on any earlier day that's already open."
        );
        return;
      }

      renderLesson(lesson, (data.completedDays || []).includes(day));
      document.getElementById("loading-state").classList.add("hidden");
      document.getElementById("lesson-content").classList.remove("hidden");
    });
  });

  function renderLesson(lesson, alreadyDone){
    document.getElementById("page-title").textContent = `Day ${lesson.day}: ${lesson.title} — The Growth Ledger`;
    document.getElementById("lh-eyebrow").textContent = `Day ${String(lesson.day).padStart(2,"0")} of 30 · ${lesson.theme} · ${formatDateLong(lesson.date)}`;
    document.getElementById("lh-title").textContent = lesson.title;
    document.getElementById("lh-hook").textContent = lesson.hook;
    document.getElementById("lh-progress").style.width = (lesson.day / 30 * 100) + "%";
    document.getElementById("l-intro").textContent = lesson.intro;
    document.getElementById("l-action").textContent = lesson.action;

    // Sections
    const sectionsEl = document.getElementById("l-sections");
    sectionsEl.innerHTML = "";
    lesson.sections.forEach(sec => {
      const div = document.createElement("div");
      div.className = "lesson-section";
      div.innerHTML = `<h3>${escapeHtml(sec.h)}</h3><p>${escapeHtml(sec.body)}</p>`;
      sectionsEl.appendChild(div);
    });

    // Interactive
    renderInteractive(lesson);

    // PDF
    document.getElementById("l-pdf-link").href = `pdfs/${lesson.pdf.file}`;
    document.getElementById("l-pdf-title").textContent = lesson.pdf.label;

    // Videos
    const videosEl = document.getElementById("l-videos");
    videosEl.innerHTML = "";
    lesson.videos.forEach(v => {
      const a = document.createElement("a");
      a.className = "resource-row";
      a.href = v.url;
      a.target = "_blank";
      a.rel = "noopener";
      a.innerHTML = `<div class="resource-icon">▶</div>
        <div><div class="resource-title">${escapeHtml(v.title)}</div><div class="resource-sub">${escapeHtml(v.channel)}</div></div>`;
      videosEl.appendChild(a);
    });

    // Mark complete button
    const btn = document.getElementById("btn-complete");
    if (alreadyDone) {
      btn.textContent = "Day Complete ✔";
      btn.disabled = true;
      document.getElementById("complete-msg").classList.remove("hidden");
    }
    btn.addEventListener("click", function(){
      btn.disabled = true;
      btn.textContent = "Saving…";
      markDayComplete(lesson.day).then(() => {
        btn.textContent = "Day Complete ✔";
        document.getElementById("complete-msg").classList.remove("hidden");
      }).catch(() => {
        btn.disabled = false;
        btn.textContent = "Mark Day Complete ✔";
      });
    });

    // Next lesson nav
    const nextLesson = getLessonByDay(lesson.day + 1);
    if (nextLesson) {
      const nextLink = document.getElementById("nav-next");
      if (isDayUnlocked(nextLesson.day)) {
        nextLink.href = `lesson.html?day=${nextLesson.day}`;
        nextLink.textContent = `Next: Day ${nextLesson.day} →`;
        nextLink.classList.remove("hidden");
      }
    }
  }

  function renderInteractive(lesson){
    const el = document.getElementById("l-interactive");
    const it = lesson.interactive;

    if (it.type === "quiz") {
      el.innerHTML = `<div class="quiz-box">
        <div class="quiz-q">${escapeHtml(it.question)}</div>
        <div id="quiz-opts"></div>
        <div class="quiz-feedback" id="quiz-feedback"></div>
      </div>`;
      const optsEl = document.getElementById("quiz-opts");
      it.options.forEach((opt, i) => {
        const b = document.createElement("button");
        b.className = "quiz-opt";
        b.type = "button";
        b.textContent = opt.text;
        b.addEventListener("click", () => {
          document.querySelectorAll(".quiz-opt").forEach(o => o.disabled = true);
          b.classList.add(opt.correct ? "correct" : "incorrect");
          if (!opt.correct) {
            const correctBtn = [...optsEl.children].find((_, idx) => it.options[idx].correct);
            if (correctBtn) correctBtn.classList.add("correct");
          }
          const fb = document.getElementById("quiz-feedback");
          fb.textContent = (opt.correct ? "✔ Correct. " : "Not quite. ") + it.explain;
          fb.style.display = "block";
        });
        optsEl.appendChild(b);
      });
    }

    else if (it.type === "checklist") {
      el.innerHTML = `<div class="quiz-box" id="checklist-box"></div>`;
      const box = document.getElementById("checklist-box");
      it.items.forEach((item, i) => {
        const id = `chk-${lesson.day}-${i}`;
        const row = document.createElement("div");
        row.className = "checklist-item";
        row.innerHTML = `<input type="checkbox" id="${id}"><label for="${id}">${escapeHtml(item)}</label>`;
        box.appendChild(row);
      });
    }

    else if (it.type === "reflection") {
      el.innerHTML = `<div class="quiz-box">
        <p style="font-weight:600; margin-bottom:12px;">${escapeHtml(it.prompt)}</p>
        <textarea class="reflection" placeholder="Write here — this stays private to you on this device."></textarea>
      </div>`;
    }
  }

  function formatDateLong(iso){
    const d = new Date(iso + "T00:00:00Z");
    return d.toLocaleDateString("en-GB", { weekday:"long", day:"numeric", month:"long", year:"numeric", timeZone:"UTC" });
  }

  function escapeHtml(str){
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

})();
