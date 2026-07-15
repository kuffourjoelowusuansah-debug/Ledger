/* ============================================================
   THE GROWTH LEDGER — 30-Day Business & Revenue Mastery Course
   Full lesson content data. Consumed by lesson.html and dashboard.html.
   Course runs 1–30 August 2026. Each day's content unlocks on its date.
   ============================================================ */

const COURSE_START = "2026-08-01"; // Day 1 unlock date (Ghana time, GMT/UTC)
const COURSE_PRICE_GHS = 40;

const LESSONS = [

// ============ WEEK 1 — FOUNDATIONS: MINDSET & IDEA ============

{
  day:1, week:1, date:"2026-08-01", theme:"Foundations",
  title:"The Entrepreneur Mindset",
  hook:"Why some hustles survive the first hard month — and most don't.",
  intro:"Welcome to Day 1. Before you register a name, design a logo, or build a single product, you need the one asset every successful business is actually built on: a mindset that can survive being wrong, broke, and unsure — repeatedly — without quitting. This lesson isn't motivation for its own sake. It's the operating system the rest of this course installs itself on top of.",
  sections:[
    {h:"Entrepreneurship is a skill, not a personality", body:"Many people believe entrepreneurs are simply 'built different' — bold, fearless, naturally magnetic. In reality, the traits that predict business survival (tolerance for uncertainty, discipline around small daily actions, and the ability to separate your identity from any single outcome) are trainable. You are not auditioning to be a 'born entrepreneur.' You're building a set of habits, one decision at a time, for the next 30 days and beyond."},
    {h:"The four mental shifts this course will ask of you", body:"First, from perfection to iteration — you will ship an imperfect version of things and improve them with real feedback rather than polishing alone in your head. Second, from spending to testing — every cedi you risk should be answering a question, not just funding a hope. Third, from ideas to systems — a business is not one clever idea, it's a repeatable process for creating and capturing value. Fourth, from isolation to community — the entrepreneurs who last are the ones talking to customers, mentors, and peers constantly, not the ones working alone in silence."},
    {h:"Ghana's opportunity window", body:"You are building at a genuinely good time to be a young entrepreneur here. Mobile money penetration means almost anyone can pay you within seconds. A smartphone and data bundle are now a full business toolkit — for marketing, for customer service, for payment collection. The formal barriers that once made starting a business slow and expensive (registration, banking, payments) have gotten dramatically simpler in the last five years. Your job over the next 30 days is to learn how to use that toolkit deliberately instead of randomly."}
  ],
  interactive:{ type:"reflection", prompt:"Write one sentence describing why you specifically — not 'entrepreneurs' in general — want to build a business. Be honest. You'll revisit this answer on Day 30." },
  action:"Open a notebook or a fresh notes app page and title it 'Growth Ledger.' You'll use it daily for the next 30 days — this course lives partly on your screen, partly in your own handwriting.",
  pdf:{ file:"day-01-entrepreneur-mindset.pdf", label:"Day 1 Workbook: Mindset Reset + Daily Ledger Template" },
  videos:[
    { title:"The Power of an Entrepreneurial Mindset", channel:"TEDxLangleyED — Bill Roche", url:"https://www.youtube.com/watch?v=Ihs4VFZWwn4" },
    { title:"How to Cultivate an Entrepreneurial Mindset", channel:"TEDxKerrisdaleLive — Linda Chiou", url:"https://www.youtube.com/watch?v=niOV_jSVCKs" }
  ]
},

{
  day:2, week:1, date:"2026-08-02", theme:"Foundations",
  title:"Finding Your Business Idea",
  hook:"Stop hunting for a 'genius idea.' Start hunting for a real, annoying problem.",
  intro:"The biggest myth in entrepreneurship is that you need a completely original idea. You don't. You need a real problem, a specific group of people who feel that problem often and painfully enough to pay for a fix, and a way to reach them. Today you'll generate a shortlist of possible business ideas using a repeatable method rather than waiting for inspiration to strike.",
  sections:[
    {h:"Three honest sources of good ideas", body:"Personal frustration — a problem you yourself have hit repeatedly (this is often the strongest source, because you already understand it deeply). Observed frustration — a problem you've watched friends, family, or your community complain about again and again. And renovation — an existing solution that already works but is slow, expensive, rude, or inconvenient, that you believe you can do noticeably better. Notice that 'invent something nobody has ever thought of' isn't on this list. Most durable businesses are a better version of something, not a first version of anything."},
    {h:"The problem-first filter", body:"For each idea candidate, write down: who exactly has this problem, how often they experience it, and what they currently do about it today (including 'nothing, they just suffer through it'). If you can't answer these three questions specifically, it's not a business idea yet — it's a hunch. 'Everyone needs better laundry service' is a hunch. 'University students in Kumasi hostels who don't own washing machines currently spend GHS 15–25 a week and 2+ hours walking to a laundromat' is a problem you can build around."},
    {h:"Play to your unfair advantages", body:"You are not starting from zero. You already have skills (design, code, sales, a trade), relationships (a market, a community, a campus), and access (to suppliers, to information, to a physical location) that most people don't. List these honestly — they're not bragging, they're strategic inputs. The best first business idea usually sits at the intersection of a real problem and something you're already unusually well positioned to deliver."}
  ],
  interactive:{ type:"checklist", items:[
    "Write down 5 problems you personally experience regularly",
    "Write down 5 problems you've heard others complain about",
    "Write down 3 existing businesses/services you think you could do noticeably better",
    "Circle your top 3 candidates from all of the above",
    "For each of your top 3, write who has the problem and how they currently deal with it"
  ]},
  action:"Do not pick your final idea today. Just generate the list — tomorrow you'll learn how to test it before you spend a single cedi.",
  pdf:{ file:"day-02-finding-your-idea.pdf", label:"Day 2 Workbook: Idea Generation Worksheet (13 prompts)" },
  videos:[
    { title:"How To Find a Business Idea That Works!", channel:"YouTube", url:"https://www.youtube.com/watch?v=wDGjJwSqX8s" }
  ]
},

{
  day:3, week:1, date:"2026-08-03", theme:"Foundations",
  title:"Validating Your Idea Before You Spend a Cedi",
  hook:"The fastest way to lose money is to build first and ask 'will anyone buy this?' second.",
  intro:"Validation means gathering real-world evidence that people will actually pay for your idea, before you invest serious time or money into building it. It's the single most skipped step by first-time entrepreneurs — and the single biggest reason businesses fail in the first six months. Today's lesson gives you four ways to validate that cost little or nothing.",
  sections:[
    {h:"Talk to 10 real people before you build anything", body:"Find 10 people who match your target customer and have a real conversation — not a pitch. Ask what they currently do about the problem, what frustrates them about it, and what they've already spent money trying to solve it (spending money on alternatives is a much stronger signal than saying 'yes I'd buy that'). Resist the urge to describe your solution early; let them describe the problem in their own words first."},
    {h:"Sell before you build (the pre-order test)", body:"The strongest validation signal isn't a survey answer — it's a deposit. Even a simple WhatsApp Business catalogue, a single-page site, or a physical sign-up sheet where people commit a small deposit or their number for 'first access' tells you far more than 50 people saying an idea 'sounds nice.' If nobody is willing to commit anything — attention, a deposit, their contact — the idea needs rethinking before you spend on it."},
    {h:"Study who's already charging for something similar", body:"Competitors are not bad news — a healthy amount of existing competition is often proof that people already pay for this category of solution. Look at what similar businesses charge, what customers complain about in their reviews or comments, and where the gaps are. An idea with zero competitors anywhere is sometimes a hidden gem, but more often it means the market has already tried and the demand isn't really there."}
  ],
  interactive:{ type:"quiz", question:"Which of these is the STRONGEST validation signal for a new business idea?", options:[
    {text:"20 friends say 'I would definitely buy that'", correct:false},
    {text:"A stranger pays a small deposit to reserve the product before it exists", correct:true},
    {text:"A survey where 80% tick 'interested'", correct:false},
    {text:"Your family thinks it's a great idea", correct:false}
  ], explain:"Money and real commitment (a deposit, a signed order, a saved contact for launch day) are far more honest signals than opinions — people are generous with praise and cautious with cash. Praise is cheap; commitment is expensive." },
  action:"This week, contact 5 real potential customers (WhatsApp, in person, DM) and have the problem-first conversation described above. Write down their exact words — not your summary of them.",
  pdf:{ file:"day-03-validating-your-idea.pdf", label:"Day 3 Workbook: 10 Customer Interview Questions + Deposit-Test Templates" },
  videos:[
    { title:"How to Validate a Product Idea Before You Waste Money on It", channel:"YouTube", url:"https://www.youtube.com/watch?v=L4cSxJOcy6Q" }
  ]
},

{
  day:4, week:1, date:"2026-08-04", theme:"Foundations",
  title:"Understanding Your Market & Customer in Ghana",
  hook:"You can't market to 'everybody' — and trying to is why most first campaigns fail quietly.",
  intro:"A target market is not a limitation — it's a superpower. The tighter and clearer your picture of exactly who you're serving, the easier every future decision becomes: what to build, how to price it, where to advertise, and what words to use. Today you'll build a real customer profile, grounded in the specifics of the Ghanaian market you're actually operating in.",
  sections:[
    {h:"Build one specific customer, not a demographic slice", body:"Instead of 'young Ghanaians aged 18–35,' build a person: 'Ama, 22, final-year student at a Kumasi polytechnic, shares a hostel room, receives about GHS 400/month from home and side gigs, is active on WhatsApp status and TikTok, price-sensitive but will pay a premium for convenience and time saved.' The more real this person feels, the easier it becomes to write marketing copy, pick a price, and choose where to advertise, because you're writing to one person instead of guessing at a crowd."},
    {h:"Where Ghanaian customers actually are", body:"Depending on your customer, they may be reachable through campus and hostel WhatsApp groups, Facebook Marketplace and groups (still very strong for local commerce), Instagram and TikTok for younger urban audiences, or simply foot traffic at markets, lorry stations, and church/mosque networks for older or less digitally-active customers. Don't assume 'online' automatically means the right channel — match the channel to where your specific customer profile actually spends attention."},
    {h:"Price sensitivity and payment behaviour matter as much as demographics", body:"Two customers with identical age and location can behave completely differently around money. Some Ghanaian customers prefer to pay in small, frequent amounts (susu-style thinking) rather than one lump sum; others will pay more for guaranteed reliability and same-day delivery. Understanding how your specific customer thinks about money — not just how much they have — will shape your pricing and payment options later in this course."}
  ],
  interactive:{ type:"reflection", prompt:"Write a 4–5 sentence profile of your one ideal customer: name, age, situation, where they spend their attention online or offline, and what they currently do about the problem you identified on Day 2." },
  action:"Screenshot or save 3 real examples (posts, WhatsApp status, group conversations) where someone matching your customer profile expresses the exact problem you're solving.",
  pdf:{ file:"day-04-understanding-your-market.pdf", label:"Day 4 Workbook: Customer Profile Canvas" },
  videos:[
    { title:"Understanding Your Customer: Market Research for Small Businesses", channel:"YouTube — Josefina Loza", url:"https://www.youtube.com/watch?v=9YPLIxBV1Sw" }
  ]
},

{
  day:5, week:1, date:"2026-08-05", theme:"Foundations",
  title:"Competitor Research & Positioning",
  hook:"Your competitors already paid to learn what doesn't work. Read their homework for free.",
  intro:"Competitor research isn't about copying — it's about learning where the market's gaps and unmet frustrations already are, before you spend money finding them yourself the hard way. Today you'll map out who else is solving your customer's problem, and decide exactly how you'll be different.",
  sections:[
    {h:"Direct vs. indirect competitors", body:"A direct competitor solves the exact same problem the same way (another laundry pickup service). An indirect competitor solves the same underlying problem differently (the customer simply washing it themselves, or asking a friend). Map both — indirect competitors are often the bigger threat because switching to you requires more behaviour change than switching from one direct competitor to another."},
    {h:"What to actually look for", body:"For each competitor, note their price, what customers complain about in reviews/comments/DMs, how fast they respond, and what feels outdated or clunky about their experience. You're hunting for the gap: is everyone slow? Is everyone rude? Is everyone too expensive for the exact customer segment you profiled yesterday? That gap is your opening."},
    {h:"Write your positioning line", body:"A positioning line is one sentence: 'For [specific customer], [your business] is the [category] that [key difference], unlike [main alternative].' For example: 'For Kumasi hostel students, Beam is the laundry pickup service that guarantees same-day return, unlike the local laundromat which takes two days.' This single sentence should guide your pricing, your marketing, and your first hires — everything should reinforce it."}
  ],
  interactive:{ type:"checklist", items:[
    "List 3 direct competitors and 2 indirect alternatives",
    "Note each competitor's approximate price",
    "Find and write down 3 real customer complaints about a competitor (reviews, comments, or ask someone directly)",
    "Identify the single clearest gap in what's currently offered",
    "Draft your one-sentence positioning line"
  ]},
  action:"Message or visit one competitor as a mystery customer today. Note exactly how it felt from first contact to final delivery — that experience is your benchmark to beat.",
  pdf:{ file:"day-05-competitor-research.pdf", label:"Day 5 Workbook: Competitor Comparison Grid + Positioning Formula" },
  videos:[
    { title:"Understanding Your Customer: Market Research for Small Businesses (competitive analysis segment)", channel:"YouTube — Josefina Loza", url:"https://www.youtube.com/watch?v=9YPLIxBV1Sw" }
  ]
},

{
  day:6, week:1, date:"2026-08-06", theme:"Foundations",
  title:"Choosing Your Business Model",
  hook:"The same idea can make money five different ways. Today you pick one.",
  intro:"A business model is simply how you turn your idea into a repeatable way of creating value and getting paid for it. The same core idea — say, teaching people a skill — could be a one-off paid workshop, a subscription community, a done-for-you service, or a digital product sold once and downloaded forever. Today, using the Business Model Canvas, you'll map your idea into a complete picture before writing a single line of marketing copy.",
  sections:[
    {h:"The nine building blocks", body:"A business model canvas breaks your idea into: customer segments (who you serve), value proposition (what problem you solve and how), channels (how you reach them), customer relationships (how you interact with them over time), revenue streams (how money comes in), key resources (what you need to operate), key activities (what you must do well), key partners (who helps you), and cost structure (what it costs to run). Filling this in — even roughly — reveals gaps you haven't thought through yet, before they become expensive mistakes."},
    {h:"Common models available to a first-time Ghanaian entrepreneur", body:"Product sales (physical or digital, one-time purchase), service/freelance (paid per job or per hour), subscription (recurring smaller payments for ongoing access — like this very course), and marketplace/matching (connecting two sides and taking a fee, like Earthly Homes connecting tenants and landlords). Each has different cash-flow patterns: product sales can be lumpy, subscriptions are steadier but slower to build, services are immediate but capped by your own time unless you eventually hire."},
    {h:"Match the model to your idea and your constraints", body:"If you have very little starting capital, service-based or digital-product models are usually the fastest to test because they don't require inventory. If your idea requires physical stock or equipment, plan your cash flow carefully — you'll need to survive the gap between paying suppliers and collecting from customers. There's no universally 'best' model; there's only the one that fits your idea, your capital, and your time."}
  ],
  interactive:{ type:"reflection", prompt:"Fill in, in one or two sentences each: your customer segment, your value proposition, your main revenue stream, and your single biggest anticipated cost." },
  action:"Draw your own Business Model Canvas on paper — nine boxes, one sentence each. Pin it somewhere visible; you'll refine it again on Day 7 and Day 14.",
  pdf:{ file:"day-06-business-model.pdf", label:"Day 6 Workbook: Printable Business Model Canvas" },
  videos:[
    { title:"Business Model Canvas Explained", channel:"Strategyzer", url:"https://www.youtube.com/watch?v=QoAOzMTLP5s" }
  ]
},

{
  day:7, week:1, date:"2026-08-07", theme:"Review",
  title:"Week 1 Review & Business Concept Canvas",
  hook:"One week in. Time to turn six scattered lessons into one clear one-pager.",
  intro:"Today has no new theory — it's a consolidation day. You'll pull together everything from Days 1–6 (mindset, idea, validation, customer, competitors, business model) into a single Business Concept Canvas: the one document you'll refer back to for the rest of this course whenever you feel unsure of direction.",
  sections:[
    {h:"Why consolidation days matter", body:"Learning scattered across six days without a synthesis step evaporates fast. Founders who write things down and revisit them consistently outperform founders who 'just remember it all' — not because they're smarter, but because a written concept survives bad days, self-doubt, and the temptation to pivot on a whim. This is also the point where many people realise their Day 2 idea needs adjusting based on what Days 3–5 revealed — and that's a good outcome, not a failure."},
    {h:"What goes on the Business Concept Canvas", body:"Your problem statement, your customer profile, your top 3 competitors and your positioning line, your chosen business model, and — critically — the single biggest unresolved question you still need to answer before Week 2. Naming that open question honestly, instead of pretending you have it all figured out, is what separates founders who course-correct early from founders who find out the hard way six months in."},
    {h:"A gut check before Week 2", body:"Week 2 is about building the operational backbone: registration, pricing, branding, an online presence, and money handling. Before you move forward and start spending real time on those, ask yourself honestly: did your Week 1 research actually support this idea, or did you find yourself hoping it would while the evidence pointed elsewhere? It's far cheaper to adjust course now than after Day 14."}
  ],
  interactive:{ type:"checklist", items:[
    "Re-read your Day 1 reflection — does it still feel true?",
    "Finalise your customer profile from Day 4 in one paragraph",
    "Finalise your positioning line from Day 5",
    "Finalise your business model choice from Day 6",
    "Write down the single biggest open question you still need to resolve"
  ]},
  action:"Complete your one-page Business Concept Canvas using this week's PDF template, and keep it somewhere you'll see daily for the rest of the course.",
  pdf:{ file:"day-07-week1-review.pdf", label:"Week 1 Recap: Business Concept Canvas (fillable one-pager)" },
  videos:[
    { title:"Business Model Canvas Explained (revisit before finalising your canvas)", channel:"Strategyzer", url:"https://www.youtube.com/watch?v=QoAOzMTLP5s" }
  ]
},

// ============ WEEK 2 — BUILDING THE BUSINESS ============

{
  day:8, week:2, date:"2026-08-08", theme:"Building",
  title:"Registering Your Business in Ghana",
  hook:"Registration isn't paperwork for its own sake — it's the door to banking, grants, and trust.",
  intro:"An unregistered business can still sell — but it can't open a proper business bank account, apply for most grants or loans, sign certain contracts, or build the kind of trust that lets you charge premium prices. Today's lesson walks through what registering a business in Ghana actually involves, in plain terms.",
  sections:[
    {h:"Sole proprietorship vs. limited company", body:"Most first-time entrepreneurs start as a sole proprietorship (registering a business name under the Registration of Business Names Act) — it's cheaper, faster, and simpler for a one-person or small operation, though it doesn't create a separate legal entity from you personally. A limited liability company costs and takes more to set up but separates your personal assets from business debts and looks more credible to investors and larger clients. Choose based on your risk exposure and growth plans, not just cost."},
    {h:"The practical steps", body:"Everything now runs through the Registrar General's Department (RGD) via their online eRegistrar portal at rgdeservices.com. Broadly: search and reserve your business name, gather your Tax Identification Number (TIN) from the Ghana Revenue Authority (free), complete Form A with your business details, pay the processing fee online (mobile money, card, or bank transfer are all accepted), and download your e-Certificate once approved. The whole process typically takes one to a few weeks and, at the time of writing, costs under GHS 100 all-in for a sole proprietorship — check rgd.gov.gh for current fees, as these are periodically updated."},
    {h:"What to do while you wait", body:"Registration approval isn't instant, so don't let it block your progress. You can validate, brand, and even soft-launch informally while your registration processes — just make sure you complete it before you're handling significant revenue, opening a business bank account, or signing formal contracts, since those steps generally require your certificate."}
  ],
  interactive:{ type:"quiz", question:"What is the main practical downside of staying unregistered as your business grows?", options:[
    {text:"It's illegal to make any sales at all", correct:false},
    {text:"You can't open a dedicated business bank account, access most grants, or sign certain contracts", correct:true},
    {text:"Your prices will automatically be lower", correct:false},
    {text:"Customers can immediately tell and will refuse to buy", correct:false}
  ], explain:"Registration mainly unlocks banking, formal grant/loan eligibility, and contract credibility — it doesn't make selling itself illegal at small scale, but it becomes a real ceiling as you grow." },
  action:"Visit rgdeservices.com and run a name search for your business name today, even if you're not ready to complete registration — this tells you immediately if your preferred name is available.",
  pdf:{ file:"day-08-registering-in-ghana.pdf", label:"Day 8 Workbook: Ghana Business Registration Checklist (RGD steps, documents, fees)" },
  videos:[
    { title:"How To Register Your Business In Ghana || Cost, Documents And Process", channel:"YouTube", url:"https://www.youtube.com/watch?v=NAppJ1izprw" }
  ]
},

{
  day:9, week:2, date:"2026-08-09", theme:"Building",
  title:"Pricing Your Product or Service",
  hook:"Underpricing doesn't win you more customers — it wins you the wrong ones, and less money to serve them well.",
  intro:"Pricing is simultaneously the easiest lever to change and the one founders are most afraid to touch. Today you'll learn three pricing approaches and how to combine them into a number that covers your costs, reflects your value, and still feels fair in the Ghanaian market you're operating in.",
  sections:[
    {h:"Cost-plus pricing — your floor, not your ceiling", body:"Add up every direct cost of delivering one unit (materials, transport, payment processing fees, your time valued honestly) and add a margin on top. This tells you the absolute minimum you can charge without losing money — it should never be your final price, only your floor. Many first-time entrepreneurs price here and wonder why they're busy but broke."},
    {h:"Value-based and competitive pricing — your realistic range", body:"Value-based pricing asks: what is this actually worth to the customer in time saved, stress avoided, or money it helps them make? Competitive pricing looks at what similar businesses already charge (from your Day 5 research). Your real price usually lives between your cost floor and what the market is already demonstrating it will pay — and it should reflect your positioning: if you're the premium, faster, more reliable option, price above the cheapest competitor, not below."},
    {h:"Ghana-specific pricing psychology", body:"Round, simple numbers (GHS 10, GHS 20, GHS 50) tend to work better for mobile money and cash transactions than awkward decimals. Consider offering small package or bundle discounts rather than one-off discounts, which train customers to always wait for a deal. And if your customer profile is price-sensitive but frequency-tolerant, smaller recurring charges (like this course's own model) can outperform one large upfront price — test both if you can."}
  ],
  interactive:{ type:"reflection", prompt:"Calculate your cost-plus floor price for your main product or service. Then write down what you believe the realistic market price actually is, and the gap between the two." },
  action:"Set a specific price today — not a range. A specific number, even if you adjust it later, forces real decisions about your margins and positioning.",
  pdf:{ file:"day-09-pricing.pdf", label:"Day 9 Workbook: Pricing Calculator (cost-plus, value-based, and bundle worksheets)" },
  videos:[
    { title:"How to Price Your Products (Pricing Strategy Guide)", channel:"YouTube", url:"https://www.youtube.com/watch?v=U7BB1qNytcs" },
    { title:"12 Pricing Strategies for Small Businesses", channel:"Intuit QuickBooks", url:"https://www.youtube.com/watch?v=SUQUrnC-Auk" }
  ]
},

{
  day:10, week:2, date:"2026-08-10", theme:"Building",
  title:"Branding: Name, Logo, Voice",
  hook:"Branding isn't decoration. It's the shortcut your customer's brain uses to trust you before they've tried you.",
  intro:"A brand is everything a customer feels, remembers, and expects when they think of your business — not just your logo. Today you'll define the three foundational pieces: your name, a simple visual identity, and a consistent voice, without overspending on any of them at this stage.",
  sections:[
    {h:"Naming that actually works", body:"A good business name is easy to say, easy to spell (crucial for search and word-of-mouth), and doesn't box you into one narrow product if you plan to expand. Avoid names too similar to existing local competitors — check availability on RGD's name search (from Day 8) and on the social platforms you plan to use, since a mismatched handle across platforms confuses customers."},
    {h:"A minimum viable visual identity", body:"You don't need a professional designer on day one. You need: one primary colour, one accent colour, a simple wordmark or icon, and consistency in using them everywhere — your WhatsApp Business profile, Instagram, invoices, and packaging. Free tools like Canva let you build this cheaply; the goal at this stage is consistency, not sophistication."},
    {h:"Voice: how your brand actually talks", body:"Decide, in a sentence, how your business sounds when it communicates: warm and personal, sharp and efficient, playful and youthful, or authoritative and premium. This should match your customer profile from Day 4 — a business serving busy professionals communicates differently than one serving university students. Write this down; it keeps your captions, replies, and customer service consistent even as you (or eventually a team member) write them."}
  ],
  interactive:{ type:"checklist", items:[
    "Shortlist 3 possible business names",
    "Check each for RGD availability and matching social handles",
    "Pick one primary colour and one accent colour",
    "Write your brand voice in one sentence (e.g. 'warm, direct, a little playful')",
    "Create a simple logo or wordmark using a free tool like Canva"
  ]},
  action:"Set up (or update) your WhatsApp Business profile today using your finalised name, colours, and a one-line description written in your brand voice.",
  pdf:{ file:"day-10-branding.pdf", label:"Day 10 Workbook: Brand Foundations One-Pager (name, colours, voice)" },
  videos:[
    { title:"How To Build a Brand — channel playlist", channel:"How To Build A Brand (Sammy Blindell)", url:"https://www.youtube.com/howtobuildabrand" }
  ]
},

{
  day:11, week:2, date:"2026-08-11", theme:"Building",
  title:"Building an Online Presence (Website & Social)",
  hook:"Your first website doesn't need to be perfect. It needs to exist, and it needs to be believable.",
  intro:"An online presence is now the default first place a potential customer checks before they trust you enough to pay. Today's lesson covers what actually matters for a first business website or page, and how to choose between social-first and a proper website based on your business type.",
  sections:[
    {h:"Do you need a full website yet?", body:"If your business is highly visual, sells physical products, or needs a proper checkout experience, a simple website (even a single page) pays off quickly. If your business is service-based, local, and relationship-driven, a strong WhatsApp Business profile plus one consistent social platform may outperform a website in the early months. Don't build a website because you feel you 'should' — build one because it removes a specific friction point for your specific customer."},
    {h:"What a minimum viable business page needs", body:"Clear statement of what you do and for whom, your pricing or a clear way to ask, real photos or examples of your work (not just stock images), a simple way to contact or pay you, and — critically — proof: testimonials, before/afters, or even just a few real customer messages you have permission to share. Proof does more work than polish at this stage."},
    {h:"Choosing your platform", body:"For a fast, no-code option, tools like a simple HTML page (which you can build yourself or commission cheaply), Google Sites, or Linktree-style bio pages work for validation-stage businesses. As you grow and want more control — a proper storefront, admin dashboard, or payment integration — a custom-built site becomes worth the investment. Since you're already comfortable building web pages, lean on that strength here rather than defaulting to a template you'll outgrow."}
  ],
  interactive:{ type:"reflection", prompt:"Decide: website-first, social-first, or both simultaneously — for your specific business, and write two sentences on why." },
  action:"Publish something today, even if imperfect: a WhatsApp Business catalogue entry, a single-page site, or your first proper Instagram/Facebook business post with your new branding.",
  pdf:{ file:"day-11-online-presence.pdf", label:"Day 11 Workbook: Minimum Viable Business Page Checklist" },
  videos:[
    { title:"Best Way To Make A Small Business Website in 2026", channel:"YouTube", url:"https://www.youtube.com/watch?v=zJ5afGaqeAU" }
  ]
},

{
  day:12, week:2, date:"2026-08-12", theme:"Building",
  title:"Mobile Money & Digital Payments (MoMo, Paystack)",
  hook:"If it's hard to pay you, people who wanted to buy simply won't.",
  intro:"Payment friction quietly kills more sales than bad marketing does. Today covers the payment options available to a Ghanaian small business — from MoMo directly, to a payment gateway like Paystack — and how to think about which combination fits your business.",
  sections:[
    {h:"Direct mobile money — fast, but manual", body:"Accepting MoMo directly (giving customers your number to send payment) is the simplest possible setup and works from day one with zero integration. Its downside is manual reconciliation — you have to track who paid for what yourself, which becomes error-prone and slow as order volume grows, and it doesn't work well for automated, always-on selling like a website."},
    {h:"Payment gateways — Paystack and the like", body:"A payment gateway like Paystack lets you accept Mobile Money, cards, and bank transfers through one integration, with automatic reconciliation, and — importantly for anything recurring like a subscription — automated collection. Paystack operates in Ghana with support for MTN, Telecel, and AirtelTigo mobile money alongside cards, and even businesses that aren't yet formally registered can start collecting payments while their registration is in progress."},
    {h:"Choosing your setup at each stage", body:"Very early stage, testing an idea: direct MoMo is fine. Once you have a website or app and any meaningful order volume: integrate a gateway so reconciliation is automatic and you look professional at checkout. If your business involves recurring charges (subscriptions, memberships — like this very course you're taking), you'll want a gateway that supports that specifically, verified server-side so payments can't be faked or skipped."}
  ],
  interactive:{ type:"quiz", question:"Why does a growing business eventually need a payment gateway instead of just direct MoMo transfers?", options:[
    {text:"Direct MoMo is illegal for businesses", correct:false},
    {text:"Gateways automatically reconcile who paid for what and support recurring/automated billing", correct:true},
    {text:"Gateways are always cheaper per transaction", correct:false},
    {text:"Customers refuse to use MoMo for business payments", correct:false}
  ], explain:"The core advantage is automation and reconciliation at scale — manual MoMo tracking works fine at low volume but becomes a real operational bottleneck as your order count grows." },
  action:"If you don't already have one, create a free Paystack account today at paystack.com — you can operate in test mode immediately while your business registration and bank details are finalised.",
  pdf:{ file:"day-12-mobile-money-payments.pdf", label:"Day 12 Workbook: Payment Setup Comparison + Paystack Getting-Started Checklist" },
  videos:[
    { title:"How to create a Paystack account for beginners and activate it", channel:"YouTube", url:"https://www.youtube.com/watch?v=dEUcmxkKZbo" },
    { title:"Paystack Tutorials (official playlist)", channel:"Paystack", url:"https://www.youtube.com/playlist?list=PL7p57jRcd2OxY3YGcM6lDPH-kuFTIvmNy" }
  ]
},

{
  day:13, week:2, date:"2026-08-13", theme:"Building",
  title:"Basic Bookkeeping & Managing Cash Flow",
  hook:"You can be profitable on paper and still run out of cash. Bookkeeping is how you see that coming.",
  intro:"Bookkeeping sounds like an accountant's job, but at small-business scale it's really just consistent, simple record-keeping — and it's the difference between knowing exactly how your business is doing and guessing. Today you'll set up the minimum system that actually gets maintained, because the best bookkeeping system is the one you'll consistently use.",
  sections:[
    {h:"The three numbers that matter most early on", body:"Revenue (everything coming in), expenses (everything going out, categorised), and cash on hand (what you actually have available right now, which is not the same as profit on paper if customers owe you money or you're holding inventory). Track these weekly at minimum — daily if your volume is high enough to make errors compound quickly."},
    {h:"Single-entry is enough to start", body:"You don't need double-entry accounting on day one. A simple spreadsheet or even a notebook with columns for date, description, money in, money out, and running balance is enough for most sole proprietorships in their first year. The habit of recording consistently matters far more than the sophistication of the system — a beautiful accounting tool nobody updates is worse than a rough notebook that's current."},
    {h:"Separate business and personal money immediately", body:"Even before you have a formal business bank account, keep business cash and personal cash mentally and physically separate — a dedicated MoMo wallet or account used only for the business is a good bridge. Mixing them is the single most common reason small business owners lose track of whether they're actually making money, and it makes any future loan or grant application far harder to support with clean records."}
  ],
  interactive:{ type:"checklist", items:[
    "Set up a simple spreadsheet or notebook with date / description / in / out / balance columns",
    "Record every transaction from the last 7 days that you can remember",
    "Set a recurring weekly time (e.g. every Sunday) to update it",
    "Open a dedicated MoMo wallet or account for business use only, separate from personal",
    "Calculate your current cash on hand right now"
  ]},
  action:"Log every transaction for today before you sleep — starting the habit on day one is far easier than trying to reconstruct three months of records later.",
  pdf:{ file:"day-13-bookkeeping.pdf", label:"Day 13 Workbook: Simple Cash Flow Tracker Template" },
  videos:[
    { title:"Bookkeeping Basics for Small Business Owners (free template!)", channel:"YouTube", url:"https://www.youtube.com/watch?v=itpCtsopKTI" }
  ]
},

{
  day:14, week:2, date:"2026-08-14", theme:"Review",
  title:"Week 2 Review & Business Plan Draft",
  hook:"You now have the operational backbone. Time to write it all down as one coherent plan.",
  intro:"Week 2 gave you the practical scaffolding of a real business: registration, pricing, branding, an online presence, payments, and bookkeeping. Today you'll compile these into a working business plan draft — not a 40-page academic document, but a working one-pager you'll actually refer back to and revise.",
  sections:[
    {h:"Why a lean plan beats a long one", body:"A business plan's real purpose isn't to impress anyone — it's to force clarity and catch weak spots before they cost you money. A one-page lean plan covering your problem, solution, customer, revenue model, pricing, and key costs does this just as effectively as a lengthy document, and unlike a 40-pager, you'll actually keep it updated as reality teaches you things."},
    {h:"What to include", body:"Problem and customer (from Weeks 1), your positioning line, your business model and pricing (from Week 2), your registration status, your payment setup, and a simple 90-day revenue goal broken into weekly targets. Add your single biggest current risk — every honest plan should name at least one thing that could derail it, and what you'll do if it happens."},
    {h:"Treat it as a living document", body:"Revisit and revise this plan at the end of Week 3 and again on Day 30. A business plan that never changes after the day you wrote it either means your business perfectly matched your first guess (rare) or you're not paying attention to what the market is actually telling you (common). Expect to update it — that's a sign of a founder who's learning, not one who's failing."}
  ],
  interactive:{ type:"reflection", prompt:"In under 150 words, write your complete lean business plan: problem, customer, solution, price, and your single biggest current risk." },
  action:"Share your one-page plan with one person you trust for honest feedback — a mentor, a fellow entrepreneur, or someone from your target customer group — before Week 3 begins.",
  pdf:{ file:"day-14-week2-review.pdf", label:"Week 2 Recap: One-Page Lean Business Plan Template" },
  videos:[
    { title:"Bookkeeping Basics for Small Business Owners (revisit for your cash-flow section)", channel:"YouTube", url:"https://www.youtube.com/watch?v=itpCtsopKTI" }
  ]
},

// ============ WEEK 3 — REVENUE & GROWTH ============

{
  day:15, week:3, date:"2026-08-15", theme:"Revenue",
  title:"Understanding Revenue Streams",
  hook:"One income source is a job with extra risk. Multiple income sources are a business.",
  intro:"This is the heart of the course. A revenue stream is any distinct way your business earns money. Relying on a single revenue stream is fragile — if demand dips, so does everything. Today you'll map the revenue streams available to your specific business model, and start thinking about which to layer in over time.",
  sections:[
    {h:"Primary vs. secondary revenue streams", body:"Your primary stream is what you lead with and what most customers know you for. Secondary streams are additions that serve existing customers more deeply (upsells, add-ons) or reach new customer segments with a related offer. Most healthy small businesses eventually run 2–3 revenue streams, not one — but they add the second only once the first is working reliably, not before."},
    {h:"Four broad categories worth knowing", body:"Transactional (one-time purchases — you make a sale and it's complete), recurring (subscriptions or retainers — smaller amounts, but predictable and compounding), service/time-based (paid per hour or per job), and platform/matching (connecting two sides and taking a cut, like a marketplace). Each has a different relationship with your time and your growth ceiling — transactional and service revenue both cap out at how much you personally can produce or deliver, while recurring and platform models can scale further with the same effort once built."},
    {h:"How this maps to what you're already building", body:"If Beam sells data bundles, that's transactional revenue with potential for a loyalty/subscription layer. If Earthly Homes matches tenants and landlords, that's platform revenue. A laundry service could be transactional per order, or converted into a recurring weekly subscription for regular customers. Notice how the same underlying business can be restructured to unlock a second revenue stream without starting over."}
  ],
  interactive:{ type:"checklist", items:[
    "Identify your current or planned primary revenue stream",
    "List 2 possible secondary revenue streams for your business",
    "Classify each as transactional, recurring, service, or platform",
    "Note which one could become recurring even if it starts transactional",
    "Rank your streams by which to focus on first, second, and later"
  ]},
  action:"Commit, in writing, to focusing fully on ONE primary revenue stream for the next two weeks before adding any secondary stream — diversifying too early is a common way to build nothing well.",
  pdf:{ file:"day-15-revenue-streams.pdf", label:"Day 15 Workbook: Revenue Stream Mapping Worksheet" },
  videos:[
    { title:"How To Create Multiple Streams Of Revenue", channel:"YouTube — Gino Barbaro", url:"https://www.youtube.com/watch?v=UnSkAvQ-Hcw" }
  ]
},

{
  day:16, week:3, date:"2026-08-16", theme:"Revenue",
  title:"Product-Based Revenue (Physical & Digital Products)",
  hook:"Digital products can be sold to your first customer and your ten-thousandth for almost the same effort.",
  intro:"Product-based businesses sell a tangible or downloadable thing rather than time. Today covers both physical products (inventory, sourcing, delivery) and digital products (courses, templates, guides — like this very course) and the very different economics of each.",
  sections:[
    {h:"Physical products: the inventory trade-off", body:"Physical products require capital tied up in stock before you've sold anything, plus storage, delivery logistics, and quality control. The upside is a tangible item customers can see and touch, which can build trust faster, and often supports higher perceived value and pricing than a purely digital equivalent. Manage this by starting with small batch sizes and pre-orders where possible, to avoid capital sitting idle in unsold stock."},
    {h:"Digital products: near-zero marginal cost", body:"A digital product — an e-book, a template pack, a course, a design asset — costs you essentially nothing to deliver to the 100th customer versus the 1st. This makes digital products extremely attractive for scaling revenue without proportionally scaling effort. The challenge shifts from production to distribution and trust: convincing someone to pay for something they can't physically hold requires strong positioning, proof, and often a free sample or preview."},
    {h:"Platforms and delivery for Ghanaian digital sellers", body:"Tools like Selar.co, Gumroad, or a simple storefront you build yourself (as you've done with OpenCrate) let you sell digital products with Ghana-friendly payment support. Whichever you use, invest disproportionate effort in the product page itself — the description, the preview, and the social proof — since digital products live or die on how convincingly they're presented before purchase."}
  ],
  interactive:{ type:"quiz", question:"What's the main reason digital products can scale revenue faster than physical products at the same price point?", options:[
    {text:"Digital products are always priced higher", correct:false},
    {text:"Customers trust digital products more than physical ones", correct:false},
    {text:"The cost to deliver one more unit is close to zero, unlike restocking physical inventory", correct:true},
    {text:"Digital products don't require any marketing", correct:false}
  ], explain:"Marginal cost is the key economic difference — once a digital product is created, serving one more customer costs almost nothing, while every additional physical unit requires more materials, storage, and delivery." },
  action:"Decide whether your business is (or should have) a physical, digital, or hybrid product component, and write one sentence on why.",
  pdf:{ file:"day-16-product-revenue.pdf", label:"Day 16 Workbook: Physical vs Digital Product Decision Matrix" },
  videos:[
    { title:"How to Sell Digital Products Online (Beginner's Guide)", channel:"YouTube", url:"https://www.youtube.com/watch?v=Ay2y2ww7wMc" }
  ]
},

{
  day:17, week:3, date:"2026-08-17", theme:"Revenue",
  title:"Service-Based Revenue & Freelancing",
  hook:"Your skills are already a product. The only question is whether you're pricing and packaging them like one.",
  intro:"Service-based revenue trades your time and skill directly for payment — web development, design, tutoring, consulting, physical services. It's often the fastest way to generate first revenue since it requires no inventory, but it comes with a hard ceiling: you only have so many hours. Today covers how to price, package, and grow beyond that ceiling.",
  sections:[
    {h:"Package your service, don't just sell hours", body:"Selling raw hours forces clients to negotiate down and makes your income unpredictable. Packaging your service into clear, fixed-scope offers ('a 6-page business website for GHS X, delivered in 10 days, including 2 rounds of revisions') makes pricing easier to justify, easier to sell, and easier for you to plan your time and income around."},
    {h:"Where to find your first clients", body:"Your existing network is almost always the fastest first source — friends, family, past classmates, and their networks. Beyond that: niche Facebook and WhatsApp groups where your target client hangs out, direct outreach to a small, specific list of businesses you'd genuinely like to work with, and — increasingly effective — short educational content that demonstrates your skill publicly, so potential clients find you already trusting your expertise."},
    {h:"Escaping the time ceiling", body:"Service revenue caps out at your personal hours unless you do one of three things: raise your prices as demand grows (the simplest lever), package a version of your service that requires less of your direct time (templates, done-with-you instead of done-for-you), or eventually hire and train others to deliver the service under your brand and standards. Plan which of these you'll pursue once you're consistently busy, rather than just working more hours."}
  ],
  interactive:{ type:"reflection", prompt:"Write your service as a fixed-scope package: what's included, what's excluded, delivery timeline, and price — as if you were about to send it to a real client today." },
  action:"Reach out to 3 people in your existing network today with your new fixed-scope package offer — not a vague 'let me know if you need anything,' but a specific offer with a specific price.",
  pdf:{ file:"day-17-service-revenue.pdf", label:"Day 17 Workbook: Service Package Builder Template" },
  videos:[
    { title:"Beginners Guide to Freelancing", channel:"YouTube — Jesse", url:"https://www.youtube.com/watch?v=KR1WYQEehwc" }
  ]
},

{
  day:18, week:3, date:"2026-08-18", theme:"Revenue",
  title:"Subscription & Recurring Revenue Models",
  hook:"GHS 40 once is a transaction. GHS 40 every month, times a thousand people, is a business you can plan around.",
  intro:"Recurring revenue is widely considered the most valuable revenue type in business, because it's predictable — you can plan hiring, spending, and growth around income you're confident will repeat, instead of guessing month to month. This very course you're taking uses a version of this model. Today covers how subscription thinking applies beyond software.",
  sections:[
    {h:"Why recurring revenue compounds", body:"A one-time sale ends the relationship at checkout. A subscription keeps the relationship — and the cash flow — going, which means your marketing effort compounds instead of resetting to zero every month. This is why businesses with any recurring component tend to be more resilient and, over time, more valuable than pure one-off transaction businesses."},
    {h:"Subscription models beyond obvious software", body:"Recurring revenue isn't only for apps: a weekly laundry pickup subscription, a monthly supply box, a retainer service (ongoing social media management, ongoing bookkeeping support), or membership access to exclusive content or community — all convert one-time buyers into recurring ones. The trick is identifying what your customer needs repeatedly rather than once, and packaging that specifically."},
    {h:"The two numbers that matter: churn and lifetime value", body:"Churn is the percentage of subscribers who cancel in a given period — keeping this low matters more than acquiring new subscribers fast, because a leaky bucket defeats the whole advantage of recurring revenue. Lifetime value is the total revenue you can expect from one customer over the entire relationship, not just their first payment. A subscription business succeeds by making lifetime value meaningfully higher than what it costs to acquire that customer in the first place."}
  ],
  interactive:{ type:"checklist", items:[
    "Identify one thing your customer needs repeatedly, not just once",
    "Sketch a possible subscription or recurring package for it",
    "Estimate a realistic monthly or weekly price",
    "Estimate how many months an average subscriber might stay (lifetime)",
    "Calculate rough lifetime value: price x estimated months"
  ]},
  action:"Even if you don't launch a subscription immediately, write down what your 'recurring version' would look like — you'll want this ready when you're ready to layer in a second revenue stream, per Day 15.",
  pdf:{ file:"day-18-subscription-revenue.pdf", label:"Day 18 Workbook: Recurring Revenue & Lifetime Value Calculator" },
  videos:[
    { title:"Subscription Model Explained: Recurring Payments & Business Benefits", channel:"YouTube", url:"https://www.youtube.com/watch?v=9BMvIzbN_nU" }
  ]
},

{
  day:19, week:3, date:"2026-08-19", theme:"Revenue",
  title:"Marketing on a Zero Budget (Organic Growth)",
  hook:"You don't need a marketing budget. You need consistency and a clear message, repeated in the right place.",
  intro:"Most first-time entrepreneurs believe they need money to market their business. In reality, the majority of small businesses in Ghana grow first through free, organic channels — and paid advertising (tomorrow's lesson) works far better once your organic presence has already proven what resonates. Today covers how to grow without spending on ads.",
  sections:[
    {h:"Content that sells without selling", body:"The strongest organic content shows your work in progress, answers a question your customer profile from Day 4 actually has, or demonstrates the transformation your product creates — not a hard sell. Behind-the-scenes content ('how we prepare an order,' 'a day in the shop') consistently outperforms polished advertisement-style posts for trust-building at small scale."},
    {h:"Consistency beats intensity", body:"Posting three times a week for two months beats posting daily for one week and then going silent. Pick a realistic, sustainable posting rhythm across one or two platforms where your customer profile actually spends time (from Day 4), rather than spreading thin across five platforms you can't maintain."},
    {h:"Word of mouth is still the most powerful channel", body:"Ask every satisfied customer directly for a referral or a share — most won't do it unprompted, not because they didn't like your product, but because it simply doesn't occur to them. A small referral incentive (a discount for both the referrer and the new customer) can meaningfully accelerate this, especially in tight-knit communities like campuses, churches, and neighbourhoods, which are exactly where much of Ghanaian commerce already happens."}
  ],
  interactive:{ type:"reflection", prompt:"Choose ONE platform to focus your organic marketing effort on for the next two weeks, and write your realistic posting frequency (e.g. '3x per week')." },
  action:"Post one piece of behind-the-scenes or educational content today (not a direct sales post) on your chosen platform.",
  pdf:{ file:"day-19-zero-budget-marketing.pdf", label:"Day 19 Workbook: 14-Day Organic Content Calendar Template" },
  videos:[
    { title:"How to Grow Your Small Business with No Marketing Budget", channel:"YouTube", url:"https://www.youtube.com/watch?v=cy4nzwiFCj8" }
  ]
},

{
  day:20, week:3, date:"2026-08-20", theme:"Revenue",
  title:"Paid Advertising Basics (Facebook, Instagram, TikTok Ads)",
  hook:"Paid ads amplify what's already working. They rarely fix an offer that isn't.",
  intro:"Once your organic content has shown you what messaging and offers resonate, small paid ad budgets can accelerate growth significantly. Today covers the basics of running your first Facebook/Instagram (Meta) ad campaign responsibly — starting small, testing, and only scaling what's proven to work.",
  sections:[
    {h:"Start with an offer you've already validated organically", body:"Don't launch your first-ever ad on a completely untested message. Look back at your organic posts from this week: which specific post, caption, or offer got the most genuine engagement or DMs? That's your strongest candidate to put paid budget behind — you're amplifying proven interest, not gambling on a guess."},
    {h:"Start small and set a real test budget", body:"You don't need hundreds of cedis to learn something useful. A small, clearly defined test budget run over several days, targeting your specific customer profile from Day 4 (age, location, interests), will tell you whether the ad format and message work before you commit more. Track cost per click and, more importantly, cost per actual sale or lead — clicks that don't convert aren't the win."},
    {h:"Common first-ad mistakes to avoid", body:"Targeting too broadly ('everyone in Ghana' instead of your specific customer profile), changing the ad too frequently before it has time to gather enough data, and sending traffic to a page that doesn't clearly explain the offer or make it easy to pay. Fix your landing page or WhatsApp flow first — an ad can only be as effective as what it points people toward."}
  ],
  interactive:{ type:"quiz", question:"What should determine which post or message you turn into your first paid ad?", options:[
    {text:"Whichever post you personally like the most", correct:false},
    {text:"Whichever organic post already showed the strongest genuine engagement or interest", correct:true},
    {text:"The most expensive-looking photo you have", correct:false},
    {text:"A completely new message you haven't tested yet, for variety", correct:false}
  ], explain:"Paid ads work best amplifying something already proven to resonate organically — testing brand-new, unvalidated messaging with paid budget is a much riskier and more expensive way to learn the same lesson." },
  action:"If you're ready, set up a Meta Business Suite account and draft (but don't necessarily launch yet) your first small test campaign targeting your Day 4 customer profile.",
  pdf:{ file:"day-20-paid-advertising.pdf", label:"Day 20 Workbook: First Ad Campaign Planning Worksheet" },
  videos:[
    { title:"Facebook Ads Tutorial for Beginners [Updated for 2026]", channel:"YouTube", url:"https://www.youtube.com/watch?v=NuSpIBth2EE" }
  ]
},

{
  day:21, week:3, date:"2026-08-21", theme:"Review",
  title:"Week 3 Review & Revenue Stream Mapping",
  hook:"You now understand how money actually flows into a business. Map your version of it.",
  intro:"Week 3 covered the full landscape of how businesses earn: product, service, subscription, organic and paid marketing. Today, you'll consolidate this into a complete Revenue Stream Map for your specific business — the document that shows exactly where your money will come from and how you'll find customers for each stream.",
  sections:[
    {h:"Building the map", body:"For each revenue stream you're pursuing (starting with just your primary one, per Day 15's advice), write down: the offer, the price, the target customer segment, and the primary channel (organic, paid, referral, or direct outreach) you'll use to reach them. This turns abstract 'I should market more' into a specific, repeatable weekly plan."},
    {h:"Set a real 4-week revenue target", body:"Using your pricing from Day 9 and a realistic estimate of how many customers you can reach through your chosen channel, set a specific revenue number for the next 4 weeks — not a hope, a calculated target based on actual numbers you've gathered this week. Break it down into a weekly number so you can track whether you're on pace."},
    {h:"Identify your growth bottleneck honestly", body:"Every business has one constraint limiting growth right now — it might be that you don't have enough leads, or you have leads but a weak conversion offer, or you have sales but can't fulfil them fast enough. Name yours honestly; Week 4 will focus partly on removing exactly this kind of bottleneck as you think about sales, scaling, and systems."}
  ],
  interactive:{ type:"reflection", prompt:"Write your complete Revenue Stream Map for the next 4 weeks: primary offer, price, target customer, channel, and your calculated weekly revenue target." },
  action:"Share your 4-week revenue target with one accountability partner (a friend, mentor, or fellow entrepreneur) who will check in with you weekly on progress.",
  pdf:{ file:"day-21-week3-review.pdf", label:"Week 3 Recap: Revenue Stream Map + 4-Week Target Planner" },
  videos:[
    { title:"How To Create Multiple Streams Of Revenue (revisit for your full map)", channel:"YouTube — Gino Barbaro", url:"https://www.youtube.com/watch?v=UnSkAvQ-Hcw" }
  ]
},

// ============ WEEK 4 — SALES, SCALING & SUSTAINABILITY ============

{
  day:22, week:4, date:"2026-08-22", theme:"Growth",
  title:"The Art of Selling (Persuasion, Objection Handling)",
  hook:"Objections aren't rejection. They're a customer telling you exactly what's stopping them from saying yes.",
  intro:"Many first-time entrepreneurs, especially those who came to business through a craft or technical skill, feel uncomfortable 'selling.' Today reframes selling as simply helping someone make a good decision for themselves, and gives you a practical framework for handling the objections you'll hear most often.",
  sections:[
    {h:"Selling is clarifying, not convincing", body:"The best salespeople aren't the smoothest talkers — they're the best listeners. Understand what the customer actually needs and what's genuinely holding them back before you respond, rather than launching into a rehearsed pitch. A customer who feels heard is far more likely to trust your recommendation, even if it means them spending money."},
    {h:"The five objections you'll hear constantly", body:"'It's too expensive' (often really means 'I don't yet see enough value for this price' — address value, not just price), 'I need to think about it' (often a polite way to avoid saying no directly — ask what specifically they're unsure about), 'I don't need it right now' (find out what would need to change for the timing to be right), 'I've tried something like this before and it didn't work' (acknowledge specifically what went wrong for them, then explain what's different about yours), and 'I need to check with someone else' (find out who, and consider how you might reach that person too)."},
    {h:"Never argue past a genuine 'no'", body:"There's a real difference between a hesitation you can address and a genuine, informed 'no.' Pushing past the second erodes trust and reputation, especially in tight Ghanaian communities where word travels fast. Handle objections with the same honesty and warmth you'd want if you were the customer — the goal is a good decision for them, which sometimes means walking away gracefully."}
  ],
  interactive:{ type:"quiz", question:"When a customer says 'it's too expensive,' what does this most often actually mean?", options:[
    {text:"They have literally no money at all", correct:false},
    {text:"They don't yet see enough value in the offer to justify that specific price", correct:true},
    {text:"They are testing you to see if you'll panic-discount", correct:false},
    {text:"They've already decided not to buy and are being polite", correct:false}
  ], explain:"Price objections are usually a value-perception issue, not a pure affordability issue — the productive response is usually to clarify value, not to immediately drop your price." },
  action:"Write down the 3 objections you hear most often from real potential customers, and draft a specific, honest response to each — not a script to memorise word-for-word, but a clear starting point.",
  pdf:{ file:"day-22-selling-objections.pdf", label:"Day 22 Workbook: Objection-Handling Response Builder" },
  videos:[
    { title:"Common Sales Objections and How to Overcome Them", channel:"YouTube", url:"https://www.youtube.com/watch?v=Av9Ol8iuQeI" }
  ]
},

{
  day:23, week:4, date:"2026-08-23", theme:"Growth",
  title:"Customer Service & Retention",
  hook:"It's far cheaper to keep a customer than to find a new one — and most businesses barely try to.",
  intro:"Acquiring a new customer typically costs significantly more than keeping an existing one satisfied, yet most first-time entrepreneurs pour all their energy into acquisition and almost none into retention. Today covers practical, low-cost ways to keep the customers you've already worked hard to earn.",
  sections:[
    {h:"The moments that actually build loyalty", body:"Loyalty isn't built by discounts alone — it's built in specific moments: how fast and how warmly you respond to a question, how you handle a mistake when (not if) one happens, and whether the customer feels remembered on their second visit, not treated like a stranger again. Map your own customer's journey and identify where these trust-building moments happen — or should happen but currently don't."},
    {h:"Handling complaints turns detractors into advocates", body:"A customer whose complaint is handled well, quickly, and without defensiveness often becomes more loyal than one who never had a problem at all — because you demonstrated exactly how you behave under pressure. Respond fast, acknowledge specifically what went wrong, fix it generously, and don't make them repeat their problem to three different people before it's resolved."},
    {h:"Simple retention tactics that cost little", body:"A personal thank-you message after purchase, a small surprise bonus for repeat customers, remembering and referencing past orders or conversations, and proactively checking in before a customer would need to ask you something — these low-cost gestures compound into real loyalty over time, especially in a market where personal relationships carry real commercial weight."}
  ],
  interactive:{ type:"checklist", items:[
    "Map your customer's journey from first contact to repeat purchase",
    "Identify one trust-building moment you can improve immediately",
    "Draft a simple 'thank you after purchase' message template",
    "Decide one small gesture for repeat customers",
    "Write your standard response for handling a complaint calmly and generously"
  ]},
  action:"Reach out to one past customer today just to check in and thank them — no sales pitch attached.",
  pdf:{ file:"day-23-customer-retention.pdf", label:"Day 23 Workbook: Customer Journey Map + Retention Playbook" },
  videos:[
    { title:"Keep 'Em Coming: Mastering Customer Retention", channel:"YouTube", url:"https://www.youtube.com/watch?v=agQ9NXcyH0A" }
  ]
},

{
  day:24, week:4, date:"2026-08-24", theme:"Growth",
  title:"Partnerships & Networking",
  hook:"Your next customer, supplier, or opportunity is more likely to come through a person than an ad.",
  intro:"Business relationships compound over years, and the entrepreneurs who network deliberately — not just at big events, but consistently in small ways — tend to find opportunities that never appear in any public listing. Today covers how to build genuine, useful relationships without it feeling transactional or forced.",
  sections:[
    {h:"Give before you ask", body:"The strongest networking relationships start with you offering something of value first — a useful introduction, a piece of honest feedback, a small favour — before you ever need anything in return. This reverses the usual awkward dynamic of networking feeling like a series of asks, and it's simply how trust gets built between people."},
    {h:"Where to find your people", body:"Industry-specific WhatsApp and Facebook groups, local business associations and chambers of commerce, campus entrepreneurship hubs (Ghana has a genuinely strong ecosystem of these — Kumasi's own Leti Arts started this way), and simply other entrepreneurs solving adjacent (not competing) problems for your same customer. A laundry business and a hostel management service serve overlapping customers without competing — that's a natural partnership."},
    {h:"Following up is the entire game", body:"Most networking value is lost not from a bad first conversation, but from never following up afterward. A short message referencing something specific from your conversation, sent within a few days, turns a one-time chat into an actual relationship. Keep a simple list of people you meet and one note on each, so 3 months later you can reconnect with genuine specificity rather than a generic 'hey, long time.'"}
  ],
  interactive:{ type:"reflection", prompt:"Name 2 businesses or individuals serving a similar customer to yours (without directly competing) who could become a genuine partnership. What could you offer them first?" },
  action:"Send one specific, low-pressure message to a potential partner or mentor today — reference something specific about them or their work, and offer something before you ask for anything.",
  pdf:{ file:"day-24-networking.pdf", label:"Day 24 Workbook: Partnership Opportunity Finder + Follow-Up Tracker" },
  videos:[
    { title:"How to Build a Strong Business Network", channel:"YouTube", url:"https://www.youtube.com/watch?v=qVFbGtu8duY" }
  ]
},

{
  day:25, week:4, date:"2026-08-25", theme:"Growth",
  title:"Hiring Your First Team Member",
  hook:"The moment you can't grow further alone is the moment hiring stops being optional.",
  intro:"Hiring your first team member is one of the biggest operational shifts a small business makes — from doing everything yourself to trusting someone else with part of your business. Today covers when you're actually ready, and how to do it without the common early mistakes.",
  sections:[
    {h:"Signs you're actually ready, not just busy", body:"Being busy isn't the same as being ready to hire. You're ready when you have a specific, repeatable task you can clearly explain and hand off (not just a vague sense that you need 'help'), when that task is consistently generating enough revenue to cover the cost of paying someone, and when you have enough of your own time freed up to actually train and manage them properly at the start."},
    {h:"Start with what you can afford honestly", body:"Your first hire doesn't have to be full-time. Part-time help, a task-based freelancer, or an intern-style arrangement can test whether you're ready for the responsibility of managing someone before committing to full-time payroll. Calculate the real cost — not just wages, but your time spent training and managing — before committing."},
    {h:"Document before you delegate", body:"Before hiring, write down exactly how you currently do the task you want to hand off — step by step, in enough detail that someone with reasonable competence could follow it. This single habit (documenting your own process) is what separates businesses that scale smoothly from ones where every new hire requires you to personally explain everything from scratch, every time."}
  ],
  interactive:{ type:"quiz", question:"What's the clearest sign you're actually ready to hire, versus just feeling overwhelmed?", options:[
    {text:"You feel tired and want help with 'everything'", correct:false},
    {text:"You have a specific, repeatable, documentable task that consistently generates enough revenue to cover paying someone", correct:true},
    {text:"A competitor recently hired their first employee", correct:false},
    {text:"You have some spare cash this particular month", correct:false}
  ], explain:"Vague overwhelm and one-off spare cash aren't reliable signals — a specific, well-defined, revenue-justified task is what makes a first hire sustainable rather than a short-lived experiment." },
  action:"Write step-by-step documentation for one task in your business that you'd eventually want to hand off — even if you're not hiring yet, this is valuable groundwork.",
  pdf:{ file:"day-25-hiring.pdf", label:"Day 25 Workbook: First-Hire Readiness Checklist + Task Documentation Template" },
  videos:[
    { title:"Hiring your first employee: A practical guide for small business", channel:"YouTube", url:"https://www.youtube.com/watch?v=dzVgL0-gZkE" }
  ]
},

{
  day:26, week:4, date:"2026-08-26", theme:"Growth",
  title:"Scaling Operations & Systems",
  hook:"If a task only works when you personally do it, you don't have a business yet — you have a job you created for yourself.",
  intro:"Systems are what let a business grow without every additional customer requiring proportionally more chaos from you. Today covers how to identify which parts of your business need systemising first, and how to build simple, real systems without overcomplicating things at your current stage.",
  sections:[
    {h:"Start with your most repeated task", body:"Track everything you do for a few days and note which tasks repeat most often — onboarding a new customer, fulfilling an order, responding to common questions. These repeated tasks are your highest-leverage candidates for systemising first, because even a small improvement compounds across every future repetition."},
    {h:"A system is just a documented, repeatable process", body:"You don't need expensive software to build your first systems — a simple checklist, a saved WhatsApp message template for common questions, or a basic spreadsheet workflow can be a genuine system. The goal is that the process works reliably whether you personally execute it or someone you've trained does — consistency, not sophistication, is the point at this stage."},
    {h:"Avoid the two common systemising mistakes", body:"Building systems only you can use (defeats the purpose — the goal is transferability) and trying to systemise everything at once (pick one area, get it working well, then move to the next). Progress on one real system beats a half-finished attempt at ten."}
  ],
  interactive:{ type:"checklist", items:[
    "Track your tasks for 2–3 days and note which repeat most",
    "Pick your single most-repeated task to systemise first",
    "Write it as a clear, numbered, step-by-step checklist",
    "Test running it exactly as written — does it actually work without you improvising?",
    "Save it somewhere accessible for future reference or handoff"
  ]},
  action:"Turn your Day 25 task documentation (or a new one) into your first real, tested system — a checklist someone else could follow with minimal guidance from you.",
  pdf:{ file:"day-26-scaling-systems.pdf", label:"Day 26 Workbook: Systems Builder Template" },
  videos:[
    { title:"How to build systems so good, your business runs itself", channel:"YouTube", url:"https://www.youtube.com/watch?v=GetUViFjCOM" }
  ]
},

{
  day:27, week:4, date:"2026-08-27", theme:"Growth",
  title:"Funding Your Business (Loans, Grants, Investors in Ghana)",
  hook:"You don't need outside funding to start — but knowing your real options removes fear from the decision either way.",
  intro:"Many Ghanaian entrepreneurs either avoid formal funding entirely out of unfamiliarity, or chase it too early before they have anything to show. Today covers the real, current funding landscape available to young Ghanaian entrepreneurs, and how to think about whether and when to pursue it.",
  sections:[
    {h:"Government-backed programmes", body:"The National Entrepreneurship and Innovation Programme (NEIP), through its Adwumawura initiative, supports Ghanaian entrepreneurs aged 18–40 with structured training, mentorship, and grant support for startup and growth stages — apply through adwumawura.neip.gov.gh. The newer 24-Hour Economy and Accelerated Export Development Programme (24H+) offers concessionary startup loans from GHS 5,000 to GHS 500,000 for young Ghanaians aged 18–35, alongside free digital skills training. The Ghana Enterprises Agency (gea.gov.gh) also supports MSME growth more broadly. Availability, terms, and requirements for all of these can change, so verify current details directly on their official portals before applying."},
    {h:"Bootstrapping is a legitimate strategy, not just a fallback", body:"Many successful Ghanaian businesses — including ones you've built yourself — start and grow entirely on customer revenue reinvested back into the business, without external funding. This keeps you in full control and forces disciplined spending, though it can mean slower growth than a well-funded competitor. There's no single right answer; it depends on your risk tolerance, your growth ambitions, and how capital-intensive your specific business model is."},
    {h:"What funders actually look for", body:"Across grants, loans, and any investor, the common thread is evidence: a registered business (from Day 8), some record of real customer demand (from your validation work), basic bookkeeping (from Day 13) showing you can be trusted with money, and a clear, specific plan for what the funding will actually be used for. Informal, unregistered businesses without any track record are consistently the ones rejected first — which is exactly why this course sequenced registration and bookkeeping before this lesson."}
  ],
  interactive:{ type:"reflection", prompt:"Honestly assess: does your business currently need outside funding to reach its next milestone, or can you bootstrap the next stage from revenue? Write your reasoning." },
  action:"If funding could genuinely help your next stage, visit adwumawura.neip.gov.gh today and review the current programme requirements — even if you're not ready to apply yet, understanding the criteria shapes what to build toward.",
  pdf:{ file:"day-27-funding.pdf", label:"Day 27 Workbook: Ghana Funding Landscape Guide + Application Readiness Checklist" },
  videos:[
    { title:"Search: NEIP Adwumawura programme overview", channel:"Search on YouTube for current NEIP/Adwumawura explainer videos, as official programme content is updated regularly", url:"https://www.youtube.com/results?search_query=NEIP+Adwumawura+Ghana+entrepreneurship+grant" }
  ]
},

{
  day:28, week:4, date:"2026-08-28", theme:"Growth",
  title:"Legal Protection (Contracts, IP, Trademarks)",
  hook:"A handshake works until it doesn't. A simple written agreement protects both sides when memory and goodwill aren't enough.",
  intro:"Legal protection sounds intimidating and expensive, but at small-business scale it mostly means a few simple, cheap habits: written agreements for anything significant, and protecting the name and identity you built in Week 2. Today covers the basics every founder should know, adapted to the Ghanaian context.",
  sections:[
    {h:"Simple contracts prevent expensive disputes", body:"For any service work, partnership, or significant transaction, a simple written agreement — even a clear WhatsApp message confirming scope, price, timeline, and what happens if either side doesn't deliver — is far better than a verbal understanding alone. It doesn't need to be a formal lawyer-drafted document to be useful; it needs to exist and be specific."},
    {h:"Trademarks protect the brand you built in Week 2", body:"A trademark protects your business name, logo, or slogan from being used by someone else in a way that confuses your customers. In Ghana, trademark registration is handled through the Registrar-General's Department, working alongside the Ghana Intellectual Property Office (GIPO) framework — the same broad system you used to register your business name on Day 8, though trademark protection is a separate, additional registration from your basic business name registration. Registering incorporating a business name does not automatically give you trademark rights over it."},
    {h:"Protect what you actually create", body:"If your business involves original written content, designs, course material, or code — like much of what you build — basic copyright protection exists automatically once you create the work in Ghana, but keeping dated records and originals of your work strengthens your ability to prove ownership if a dispute ever arises. This matters increasingly as you build things like Sector Seven, where the underlying IP is genuinely valuable long-term."}
  ],
  interactive:{ type:"checklist", items:[
    "Identify one recurring transaction type in your business (client work, supplier orders, partnerships)",
    "Draft a simple written agreement template for it (scope, price, timeline, what happens if something goes wrong)",
    "Check whether your business name/logo needs separate trademark protection beyond basic registration",
    "Keep dated records/originals of any significant creative or written work you produce",
    "Note one legal question you still need to ask a professional before it becomes urgent"
  ]},
  action:"Draft your simple written agreement template today, even a short one — use it for your very next client or supplier transaction rather than relying on a verbal understanding.",
  pdf:{ file:"day-28-legal-protection.pdf", label:"Day 28 Workbook: Simple Contract Template + IP Protection Checklist" },
  videos:[
    { title:"Trademark Basics: What Every Small Business Owner Should Know Now, Not Later", channel:"USPTO (US-focused, but the underlying principles of trademark protection apply broadly — verify Ghana-specific process via RGD/GIPO)", url:"https://www.youtube.com/watch?v=EyRfU7WI1Sw" }
  ]
},

{
  day:29, week:4, date:"2026-08-29", theme:"Growth",
  title:"Long-Term Vision & Personal Branding",
  hook:"People buy from businesses. Increasingly, they buy from the person behind the business first.",
  intro:"As you approach the end of this course, today shifts focus from tactics to trajectory: your own personal brand as the founder, and the longer-term vision guiding where your business goes after Day 30. Especially for a founder as visible and creative as you are, your personal brand and your business brand will always be intertwined.",
  sections:[
    {h:"Why your personal brand matters even if you're not 'the face' of the business", body:"Even a business with strong branding of its own benefits from a visible, trusted founder — it builds credibility with partners, makes fundraising conversations easier, opens networking doors (Day 24), and lets you build an audience that follows you across ventures, not just this one specific product. Given your work across Beam, Earthly Homes, Pressfield, and Sector Seven, a strong personal brand as 'a builder who ships' compounds value across everything you create, not just one project."},
    {h:"Building it authentically, without pretending to be someone else", body:"The strongest personal brands share real process, not just polished outcomes — the actual struggle of registering a business, the actual thinking behind a pricing decision, the actual lesson from a failed marketing test. This is more relatable and more differentiated than generic motivational content, and it's also simply more honest, which builds trust faster."},
    {h:"Zoom out: where is this actually going?", body:"Write a genuine, longer-term vision — not vague ('I want to be successful') but specific: what does your business look like in 1 year, and in 5? Does it stay a solo operation, grow a team, spin into multiple ventures the way your own portfolio already has? There's no required answer, but naming it clearly gives your daily decisions a direction to point toward."}
  ],
  interactive:{ type:"reflection", prompt:"Write your 1-year and 5-year vision for this business in 2–3 sentences each. Be specific, not motivational-poster vague." },
  action:"Publicly share one piece of real, honest process content today — something you learned, struggled with, or decided during this 30-day course — on the platform you chose on Day 19.",
  pdf:{ file:"day-29-personal-branding.pdf", label:"Day 29 Workbook: Personal Brand Foundations + 1-Year/5-Year Vision Worksheet" },
  videos:[
    { title:"Build your Personal Brand as an Entrepreneur", channel:"YouTube", url:"https://www.youtube.com/watch?v=KVLsOV_CH9s" }
  ]
},

{
  day:30, week:4, date:"2026-08-30", theme:"Graduation",
  title:"Graduation — Your 90-Day Action Plan",
  hook:"30 days of learning is only valuable if it becomes 90 days of doing. Let's build that plan.",
  intro:"Congratulations — you've reached Day 30. This final lesson has no new tactical content. Instead, it's a structured capstone: you'll revisit your Day 1 reflection, consolidate everything from all four weeks, and leave with a concrete 90-day action plan rather than a course completion certificate that sits unused.",
  sections:[
    {h:"Revisit where you started", body:"Go back and re-read your Day 1 reflection — the sentence describing why you wanted to build a business. After 30 days of real work, does it still feel true, or has your 'why' become sharper and more specific? Both are good outcomes. Notice how much more concrete your thinking has become since Day 1 — that shift itself is proof of the work you've put in."},
    {h:"Consolidate your four weekly documents", body:"You now have a Business Concept Canvas (Day 7), a Lean Business Plan (Day 14), a Revenue Stream Map (Day 21), and everything from this final week on sales, systems, and vision. Bring these together into a single reference document — this is now your actual operating playbook, built from 30 days of real work rather than theory alone."},
    {h:"Build your 90-day plan in three horizons", body:"Days 1–30 (next month): the immediate priorities — likely finishing registration if incomplete, hitting your Week 3 revenue target, and fully implementing your first system from Day 26. Days 31–60: your first deliberate expansion — a second revenue stream (Day 15), your first hire if ready (Day 25), or a funding application (Day 27). Days 61–90: review everything, and decide what to double down on based on real results, not assumptions. Write specific, dated milestones for each horizon, not vague intentions."}
  ],
  interactive:{ type:"checklist", items:[
    "Re-read your Day 1 reflection and note what's changed",
    "Pull together your Day 7, Day 14, and Day 21 documents into one reference",
    "Write 3 specific milestones for Days 1–30 of your 90-day plan",
    "Write 3 specific milestones for Days 31–60",
    "Write your review checkpoint plan for Days 61–90"
  ]},
  action:"Schedule a calendar reminder for 30 days from today to review this plan against what actually happened — the single habit that separates founders who improve continuously from those who repeat the same mistakes.",
  pdf:{ file:"day-30-graduation-90-day-plan.pdf", label:"Day 30 Workbook: Complete 90-Day Action Plan (all 4 weekly documents combined)" },
  videos:[
    { title:"The Power of an Entrepreneurial Mindset (revisit where you started)", channel:"TEDxLangleyED — Bill Roche", url:"https://www.youtube.com/watch?v=Ihs4VFZWwn4" }
  ]
}

];

// Helper: get lesson by day number
function getLessonByDay(day){ return LESSONS.find(l => l.day === Number(day)); }

// Helper: is a given day unlocked (calendar-based, relative to COURSE_START)
function isDayUnlocked(day){
  const start = new Date(COURSE_START + "T00:00:00Z");
  const target = new Date(start.getTime() + (day - 1) * 86400000);
  const now = new Date();
  return now >= target;
}

// Helper: get the unlock date string for a given day
function getUnlockDate(day){
  const lesson = getLessonByDay(day);
  return lesson ? lesson.date : null;
}

// Node-compatible export (harmless in the browser — `module` is undefined there).
// Lets generate_pdfs.py reuse this exact same content via a JSON dump, so the
// workbook PDFs never drift out of sync with what's shown on the website.
if (typeof module !== "undefined" && module.exports) {
  module.exports = { LESSONS, COURSE_START, COURSE_PRICE_GHS };
}
