// PLS 152 Fall 2026 — bulk-create all 14 scheduled announcements.
// Generated from announcements_2026.md — REGENERATE (build_announcements_js
// section of the workspace) rather than editing by hand.
//
// USAGE (day zero, AFTER the cartridge import):
//   1. Open the course in Chrome, note the course id in the URL.
//   2. COURSE_ID is already set to 1112484 (this course).
//   3. Open the console (Cmd+Option+J), paste this whole file, hit Enter.
//   4. Verify: Announcements tab shows 14 items with "Delayed until:" dates.
//
// SAFETY: any announcement whose delayed_post_at is in the PAST posts and
// EMAILS the whole class immediately. This script refuses to create those —
// if day zero slips past an announcement's date, update its time first.

const COURSE_ID = "1112484"; // PLS 152 001 FQ 2026 (canvas.ucdavis.edu/courses/1112484)

const ANNOUNCEMENTS = [
  {
    "id": "A1",
    "title": "Welcome to Plant Genetics!",
    "delayed_post_at": "2026-09-21T15:00:00Z",
    "message": "<p>Hi all,</p>\n<p>Welcome to Plant Genetics (PLS 152)! Our first class is this Thursday\nSeptember 24, 3:10 PM in Veihmeyer Hall 212. Heads up that even though\nthe registrar lists a separate 20 minute discussion, we meet as one\ncontinuous 3:10-5:00 block on Tuesdays and Thursdays with a short break\nin the middle, so plan for the full two hours.</p>\n<p>A quick preview of how the course runs. After most classes youll\nsubmit a short reflection on that days material, due by 11:59 PM the\nsame day. Low stakes quizzes are due Tuesdays at 3:10 before class and\ncover the previous week. Instead of exams there is a midterm paper (more\non that soon, the prompt is already posted) and a final group\npresentation. All course materials live on the course website: <a\nhref=\"https://greymonroe.github.io/PLS_152/\">https://greymonroe.github.io/PLS_152/</a></p>\n<p>Im really excited for this quarter. See you Thursday!</p>\n<p>Best, Grey</p>"
  },
  {
    "id": "A2",
    "title": "Week 1: Mendel and beyond",
    "delayed_post_at": "2026-09-28T15:00:00Z",
    "message": "<p>Hi all,</p>\n<p>Great to meet everyone Thursday! This week is transmission genetics:\nMendels rules on Tuesday, and Thursday all the wonderful ways biology\nbreaks them.</p>\n<p>Reminder that reflections are due 11:59 PM the same day as each\nclass. Quiz 1 (covering this weeks lectures) is due next Tuesday October\n6 at 3:10, before class.</p>\n<p>Best, Grey</p>"
  },
  {
    "id": "A3",
    "title": "Week 2: Quiz 1 due Tuesday + mutations",
    "delayed_post_at": "2026-10-05T15:00:00Z",
    "message": "<p>Hi all,</p>\n<p>Quiz 1 (transmission genetics) is due tomorrow at 3:10, before\nclass.</p>\n<p>This week we get molecular: Tuesday is mutations, the ultimate source\nof all genetic variation, and Thursday is how an allele actually causes\na phenotype.</p>\n<p>Best, Grey</p>"
  },
  {
    "id": "A4",
    "title": "Week 3: Quiz 2 Tuesday + BRING A LAPTOP Thursday",
    "delayed_post_at": "2026-10-12T15:00:00Z",
    "message": "<p>Hi all,</p>\n<p>Quiz 2 (molecular genetics) is due tomorrow at 3:10.</p>\n<p>Tuesday we cover reproduction and domestication, the origins of\ncrops. Thursday is different: no lecture. Sheena Campbell from the\nlibrary will teach lit search tools (including some AI research\nassistants), and then the rest of the block is in-class time to start\ndigging into topics for your midterm paper. <strong>Bring a\nlaptop!</strong></p>\n<p>If you havent looked at the midterm prompt yet, nows the time: <a\nhref=\"https://greymonroe.github.io/PLS_152/\">https://greymonroe.github.io/PLS_152/</a>.\nYoure writing about one of three kinds of topics, a problem genetics can\nsolve, an open question in genetics, or how a genetic technology works.\nThursday is your launchpad: the Midterm Topic Explorer (three candidate\ntopics with a mini lit search on each) is due the following Thursday,\nOctober 22.</p>\n<p>Best, Grey</p>"
  },
  {
    "id": "A5",
    "title": "Tomorrow: laptops!",
    "delayed_post_at": "2026-10-14T15:00:00Z",
    "message": "<p>Hi all,</p>\n<p>Quick reminder: bring a laptop to class tomorrow. Well spend the\nfirst part with Sheena from the library learning lit search tools, then\nyoull use the rest of the block searching and reading for your midterm\ntopic. Come with some candidate topics in mind!</p>\n<p>Best, Grey</p>"
  },
  {
    "id": "A6",
    "title": "Week 4: Quiz 3, guest lecture + Mars cacao tour Thursday",
    "delayed_post_at": "2026-10-19T15:00:00Z",
    "message": "<p>Hi all,</p>\n<p>Quiz 3 (reproduction &amp; domestication) is due tomorrow at\n3:10.</p>\n<p>Tuesday we welcome Dr. Mitch Feldmann for quantitative genetics:\npredicting phenotype from genotype. Thursday is the Mars cacao\ngreenhouse tour! We meet at the Core Greenhouse Complex, not our\nclassroom: <a\nhref=\"https://maps.app.goo.gl/qPKkrqz9au33nZcL8\">https://maps.app.goo.gl/qPKkrqz9au33nZcL8</a>.\nWear closed-toe shoes (required) and note photos arent allowed\ninside.</p>\n<p>Also due Thursday at 3:10: the Midterm Topic Explorer (your three\ncandidate topics, mini lit search on each, and which one you picked).\nDetails on Canvas.</p>\n<p>Best, Grey</p>"
  },
  {
    "id": "A7",
    "title": "Tomorrow: meet at the Core Greenhouse Complex",
    "delayed_post_at": "2026-10-21T15:00:00Z",
    "message": "<p>Hi all,</p>\n<p>Reminder for tomorrow: we meet at the Core Greenhouse Complex at\n3:10, not Veihmeyer: <a\nhref=\"https://maps.app.goo.gl/qPKkrqz9au33nZcL8\">https://maps.app.goo.gl/qPKkrqz9au33nZcL8</a>.\nClosed-toe shoes are required (theres a footbath on the way in) and no\nphotos inside the greenhouse please.</p>\n<p>Your Midterm Topic Explorer is also due at 3:10 tomorrow.</p>\n<p>See you there!</p>\n<p>Best, Grey</p>"
  },
  {
    "id": "A8",
    "title": "Week 5: Quiz 4 Tuesday + group survey Thursday",
    "delayed_post_at": "2026-10-26T15:00:00Z",
    "message": "<p>Hi all,</p>\n<p>Quiz 4 (quantitative genetics) is due tomorrow at 3:10.</p>\n<p>This week is gene discovery: forward genetics on Tuesday (mutant\nscreens and the ABC model), then GWAS and QTL mapping on Thursday.</p>\n<p>One more thing due this week: the group preference survey for the\nfinal project, due Thursday at 3:10. Takes just a few minutes and it\ndetermines your presentation group, so dont skip it!</p>\n<p>Best, Grey</p>"
  },
  {
    "id": "A9",
    "title": "Week 6: Quiz 5 Tuesday, midterm due in one week",
    "delayed_post_at": "2026-11-02T16:00:00Z",
    "message": "<p>Hi all,</p>\n<p>Quiz 5 (forward genetics &amp; GWAS/QTL) is due tomorrow at 3:10.</p>\n<p>Tuesday we tackle why finding causal genes is actually hard,\nfeaturing the Cape Verde story. Thursday is climate adaptation, 400\nyears of research.</p>\n<p>And the big one: your midterm paper is due one week from tomorrow,\nTuesday November 10 at 3:10 PM, before class. Youve had the tools since\nthe library session, so use this weekend and next to finish strong. Id\nrather read your good ideas than your rushed ones!</p>\n<p>Best, Grey</p>"
  },
  {
    "id": "A10",
    "title": "Midterm due tomorrow at 3:10",
    "delayed_post_at": "2026-11-09T16:00:00Z",
    "message": "<p>Hi all,</p>\n<p>Your midterm paper is due tomorrow (Tuesday) at 3:10 PM, submitted on\nCanvas before class. Dont wait until 3:05 to upload!</p>\n<p>In class tomorrow we host graduates of SCOPE, the student-led plant\nbreeding programs here at UC Davis. Thursday Dr. Chaehee Lee joins us\nfor the long and short of genomics: what does it actually mean to\nsequence something?</p>\n<p>Best, Grey</p>"
  },
  {
    "id": "A11",
    "title": "Week 8: check-in quiz Tuesday, Bayer panel + grad talks",
    "delayed_post_at": "2026-11-16T16:00:00Z",
    "message": "<p>Hi all,</p>\n<p>Due tomorrow at 3:10: the final project check-in quiz. Its two things\nin one, a short check-in on your groups topic plus a few questions on\nthe recent lectures (finding the genes, climate adaptation, and\ngenomics).</p>\n<p>Tuesday we host a panel of scientists from Bayer Woodland on careers\nin plant science and genetics. Thursday our own grad students present\ntheir research. These two days are a big part of why this course exists,\ncome with questions!</p>\n<p>Best, Grey</p>"
  },
  {
    "id": "A12",
    "title": "Week 9: no classes, group work + check-in #2",
    "delayed_post_at": "2026-11-23T16:00:00Z",
    "message": "<p>Hi all,</p>\n<p>No class meetings this week. Tuesday is a group work day for your\nfinal presentations, and check-in #2 (a bullet summary of your planned\nslides) is due Tuesday at 3:10. Thursday is Thanksgiving, enjoy the\nbreak!</p>\n<p>Presentations are Tuesday December 1 and Thursday December 3. Your\npresentation file and contributions doc are due December 1 at 3:10\nregardless of which day your group presents.</p>\n<p>Best, Grey</p>"
  },
  {
    "id": "A13",
    "title": "Final presentations this week!",
    "delayed_post_at": "2026-11-30T16:00:00Z",
    "message": "<p>Hi all,</p>\n<p>Its presentation week! Part 1 is tomorrow, part 2 Thursday. Every\ngroups presentation file and contributions doc are due tomorrow at 3:10\n(one submission per group).</p>\n<p>Also: extra credit memes are due Friday December 11 by 5:00 PM,\nposted to the meme discussion board so everyone can enjoy them. A proud\ncourse tradition, bring your best.</p>\n<p>Looking forward to seeing what you all put together!</p>\n<p>Best, Grey</p>"
  },
  {
    "id": "A14",
    "title": "Thank you + memes",
    "delayed_post_at": "2026-12-07T16:00:00Z",
    "message": "<p>Hi all,</p>\n<p>The presentations were fantastic, nice work everyone. This course is\none of my favorite things I do at Davis and thats because of you\nall.</p>\n<p>Last call for extra credit memes, due Friday December 11 by 5:00 PM\nin the discussion board. And if you havent yet, please fill out the\ncourse evaluation, I read every comment and the course genuinely changes\nbecause of them.</p>\n<p>Have a great break!</p>\n<p>Best, Grey</p>"
  }
];

(async () => {
  const csrf = decodeURIComponent(document.cookie.match(/_csrf_token=([^;]+)/)[1]);
  const now = new Date();
  for (const a of ANNOUNCEMENTS) {
    if (new Date(a.delayed_post_at) <= now) {
      console.warn(`SKIPPED (date in past, would email immediately): ${a.id} ${a.title}`);
      continue;
    }
    const body = new URLSearchParams({
      title: a.title, message: a.message,
      is_announcement: "true", published: "true",
      delayed_post_at: a.delayed_post_at,
    });
    const r = await fetch(`/api/v1/courses/${COURSE_ID}/discussion_topics`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded", "X-CSRF-Token": csrf },
      body,
    });
    console.log(`${a.id} ${r.ok ? "OK" : "FAILED " + r.status}: ${a.title}`);
  }
  console.log("Done. Check the Announcements tab for 14 delayed items.");
})();
