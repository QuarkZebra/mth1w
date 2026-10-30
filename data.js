/* ═══════════════════════════════════════════════════════════
   MTH1W COURSE DATA — this is the only file you edit.

   Each day looks like:
     {d:1, iso:"2026-09-01", topic:"Types of Numbers", num:"1.1",
      note:"", ans:"", extras:[]}

   - note: paste the URL of the blank note & practice problems.
           Empty "" shows a greyed-out link with "Coming soon".
   - ans:  paste the URL of the answers. Empty "" is greyed out
           with "Coming soon"; once filled it goes live with the
           ☠︎ "do not look" hover.
   - num:  the note number shown to students ("1.7 Blank Note &
           Practice Problems"). Days with no note (tests, quizzes,
           work periods) just leave num out. noteLabel overrides
           the whole label when a day has no clean number.
   - flag: "quiz" | "pquiz" | "test" tints the row. Quiz days
           use noteLabel/ansLabel for custom link names.
   - extras: [ ["Title","https://…","kind"], … ]
           kind = "doc" (worksheet/handout), "ans" (solutions,
           shows the ☠︎ warning), "vid" (video), "eqao" (the
           day's EQAO companion sheet — dark blue, ✎ icon).

   D(id) is shorthand for a Google Drive link — paste either a
   full URL or D("fileId"), both work.

   KEYS: where a KEY pdf already exists in Drive, its id is
   stashed in a comment right after ans:"" — after class, move
   it into the ans field.

   To SAVE TIME: (Just change the message)

   git add . && git commit -m "coding 3 key add" && git push origin main

   ═══════════════════════════════════════════════════════════ */

const D = id => `https://drive.google.com/file/d/${id}/view`;

const COURSE = {
  code: "MTH1W",
  title: "Mathematics 9",
  sub: "Grade 9 · De-streamed",

  /* Pinned under the title, above the units: [label, url, kind, warn].
     kind = "outline" | "routine" | "calc". A warn string shows as a hazard
     note on hover (desktop) or first tap (phone). */
  essentials: [
    ["Course Outline",D("1HEEkHSr_Mx2lo6ibd_f6Vibwz9Fus9a2"),"outline"],   /* LaTeX rebuild, 14 Sep 2026, written over the 2021 pdf so the id held */
    ["A Homework Routine",D("1quQdMsDNPSvJLj8wxe-c9D9doSvAcNTy"),"routine"],
    ["Approved Calculators",D("1Hq2HE1EzSy2frKT0pfDUSWshgf0GB7A1"),"calc","Must be one of these exact models"],
  ],

  units: [

  /* ── UNIT 1 ─────────────────────────────────────────────── */
  {name:"Number Sense", days:[
    {d:1, iso:"2026-09-01", topic:"Course Intro  ·  Types of Numbers", num:"1.1",
      note:D("1AkFkTVzwaaACbwa_q3uSKyrjDKyfKV7E"),
      ans:D("1LC8Vtia_nr1Z-rQDesgz7UIiKk88XMP0"), /* key: D("1LC8Vtia_nr1Z-rQDesgz7UIiKk88XMP0") */
      extras:[["EQAO Questions", D("1Nw-RQXt8XvlKaCjpaRujeHmmYWj1bF4X"), "eqao"],
              ["Rational and Irrational Numbers Explained", "https://www.youtube.com/watch?v=j4fMvpOc6YQ", "vid"]]},
    {d:2, iso:"2026-09-02", topic:"Sets and Subsets", num:"1.2",
      note:D("1wUomT5kNm4Dw2FE48UIkBLxmzLznc16O"),
      ans:D("1xWuDTDyT3hx0plvRWqIq0AMU0ZvJMCTd"), /* key: D("1xWuDTDyT3hx0plvRWqIq0AMU0ZvJMCTd") */
      extras:[["EQAO Questions", D("1XfUyLtHsYkjOjabexhZuhB541SBo0UiN"), "eqao"],
              ["Sets, Subsets and the Real Numbers", "https://www.youtube.com/watch?v=vSpIVLg3xMc", "vid"]]},
    {d:3, iso:"2026-09-03", topic:"Integers in Context", num:"1.3",
      note:D("15TB3_NNd056LKA7_rhyiyAz42CsNMQ_0"),
      ans:D("10hoDPfUTW4ovBahyhi8Ij1cXd8iwy8Od"), /* key: D("10hoDPfUTW4ovBahyhi8Ij1cXd8iwy8Od") */
      extras:[["EQAO Questions", D("1QaKfSgWg8a1pMO7A5Hpdyrh_suX-p-pJ"), "eqao"],
              ["Adding and Subtracting Integers", "https://www.youtube.com/watch?v=GJjbq1C0MaA", "vid"],
              ["Multiplying Positive and Negative Numbers", "https://www.youtube.com/watch?v=47wjId9k2Hs", "vid"]]},
    {d:4, iso:"2026-09-04", topic:"Fractions and Unit Fractions", num:"1.4",
      note:D("1_2YOHAyFxMYs-x4TB42obmtI-YmuUprr"),
      ans:D("1TevnPQRs3pCwlC9cT5E9fvtO4a1WBhTz"), /* key: D("1TevnPQRs3pCwlC9cT5E9fvtO4a1WBhTz") */
      extras:[["EQAO Questions", D("158YA_J8FUjFwfjd-L_ncjGNQUvLM8HOM"), "eqao"],
              ["Fractions on a Number Line", "https://www.youtube.com/watch?v=TLktfswm54A", "vid"]]},
    {d:5, iso:"2026-09-08", topic:"Adding and Subtracting Fractions", num:"1.5",
      note:D("1UYndNGYDBdA441ja2sS26zkzEXvWcKxS"),
      ans:D("1tfD-ZvRE1DxzFLpval360pxPLkpHpRP8"), /* key: D("1tfD-ZvRE1DxzFLpval360pxPLkpHpRP8") */
      extras:[["EQAO Questions", D("1biR8qOlJ2I4cIUZ-elC3Gn-8vRCl_wTX"), "eqao"],
              ["Adding Mixed Numbers", "https://www.youtube.com/watch?v=pynfj2bYRms", "vid"]]},
    {d:6, iso:"2026-09-09", topic:"Multiplying and Dividing Fractions", num:"1.6",
      note:D("1k0vHaQYkJGPG9tbyMYV4Bfh9aIj6eiRx"),
      ans:D("1NqZg-Zkij7bH-sO_SdbLX9RmcMwvpq5A"), /* key: D("1NqZg-Zkij7bH-sO_SdbLX9RmcMwvpq5A") */
      extras:[["EQAO Questions", D("1E8mz00WeuB3vSgaqNFLqgT3jdHb-uUk8"), "eqao"],
              ["Dividing Fractions", "https://www.youtube.com/watch?v=4lkq3DgvmJo", "vid"]]},
    {d:7, iso:"2026-09-10", topic:"Current Topics  &  Integer and Fraction Operations", flag:"quiz",
      extras:[]},
    {d:8, iso:"2026-09-11", topic:"Powers", num:"1.7",
      note:D("1pAZikafnnL7u9MO0wigZ8iJyD_N5uSEE"),
      ans:D("1k3tgceplF03fxJvhjhGJtNygMWsfjgiY"), /* key: D("1k3tgceplF03fxJvhjhGJtNygMWsfjgiY") */
      extras:[["EQAO Questions", D("1FiwS4bLGpA_zr0ygD1r2V5ED6VHD649c"), "eqao"],
              ["The Problem with Zero", "https://www.youtube.com/watch?v=BRRolKTlF6Q", "vid"]]},
    {d:9, iso:"2026-09-14", topic:"Scientific Notation", num:"1.8",
      note:D("1vC594m_1UIvvolgahz1MHGTyPJJBECn4"),
      ans:D("1qulWkf-0pfyPmrzmb4TGiKHvK1MqH1oH"), /* key: D("1qulWkf-0pfyPmrzmb4TGiKHvK1MqH1oH") */
      extras:[["EQAO Questions", D("13DR7UNqbEa6CgLWwwGgcn_0r2uLAbRmd"), "eqao"],
              ["Scientific Notation", "https://www.youtube.com/watch?v=YmqXohR1UfA", "vid"]]},
    {d:10, iso:"2026-09-15", topic:"Coding 1 · Variables and Output", num:"1.9",
      note:D("1Oj6QQ4J5tG53_vDRXZpGTgMG56EVgJBd"),
      ans:D("1skQbfL5sYNhn3kaMnETqcMmWLLYjvumQ"), /* key: D("1skQbfL5sYNhn3kaMnETqcMmWLLYjvumQ") */
      extras:[["EQAO Questions", D("16KJPAKAJPW31wqneSbTE2OC-Coe0iMJM"), "eqao"],
              ["Guided Lesson (start here if coding is new)", D("1chopdH4UePkO5cEfyyO1NL4zstfmCUKu"), "doc"],
              ["Answers", D("1NStMuR0Ncy56GxRiQGkndsKsCLu7IGb1"), "ans"], 
              ["What Is a Variable?", "https://www.youtube.com/watch?v=ghCbURMWBD8", "vid"]]},
    {d:11, iso:"2026-09-16", topic:"Density, Infinity and Limits", num:"1.10",
      note:D("1BN1NSVvln-wFvLTJDuPdX10Aw7e24oGC"),
      ans:D("1KCHccdvZpF1WwxI5GFOikDgVLWJw0-8W"), /* key: D("1KCHccdvZpF1WwxI5GFOikDgVLWJw0-8W") */
      extras:[["EQAO Questions", D("1Xm-_6jcRAd4N7CGm5FmOKu3mm4rw1SD5"), "eqao"],
              ["Infinity Is Bigger Than You Think", "https://www.youtube.com/watch?v=elvOZm0d4H0", "vid"],
              ["The Infinite Hotel Paradox (first 1:17)", "https://www.youtube.com/watch?v=Uj3_KqkI9Zo", "vid"]]},
    {d:12, iso:"2026-09-17", topic:"Ratios, Rates and Proportions", num:"1.11",
      note:D("1070Eg0sLMYC_8i3eOb41b-iM3n60JmF-"),
      ans:D("1QhZetFnS7ajcwW-vt0C4AgDCJ0hXewD6"), /* key: D("1QhZetFnS7ajcwW-vt0C4AgDCJ0hXewD6") */
      extras:[["EQAO Questions", D("1KWWMZpwfH07g5ELDkHa-IqepymGO-6Xv"), "eqao"],
              ["Ratios and Rates", "https://www.youtube.com/watch?v=RQ2nYUBVvqI", "vid"],
              ["Proportions", "https://www.youtube.com/watch?v=USmit5zUGas", "vid"]]},
    {d:13, iso:"2026-09-18", topic:"Current Topics  &  Function Operations", flag:"quiz",
      extras:[]},
    {d:14, iso:"2026-09-21", topic:"Review", noteLabel:"Unit 1 Review",
      note:D("1m69B9i07Ou-D5oFV0Aa1t2OAxwE9ZqF8"),
      ans:D("1ohldN3AU_m4LAhMcBT9fWWEqQWy6Xa_M"), /* key: D("1ohldN3AU_m4LAhMcBT9fWWEqQWy6Xa_M") */
      extras:[]},
    {d:15, iso:"2026-09-22", topic:"Unit 1 Test", flag:"test", extras:[]},
  ]},

  /* ── UNIT 2 ─────────────────────────────────────────────── */
  {name:"Algebra", days:[
    {d:16, iso:"2026-09-23", topic:"Algebraic Expressions", num:"2.1",
      note:D("1Vj3FB9JTvftt7Qk_Xdwuh-yaxKi_eWRG"),
      ans:D("1c6VAc3b1MfMYMAjHxLg5cNl2Qf6jSr-1"), /* key: D("1c6VAc3b1MfMYMAjHxLg5cNl2Qf6jSr-1") */
      extras:[["EQAO Questions", D("1NsWFWZLg1xj-Zbkt6OxeCZDiMsm7_f-V"), "eqao"],
              ["Algebraic Substitution", "https://www.youtube.com/watch?v=XJmXvZdRRNQ", "vid"]]},
    {d:17, iso:"2026-09-24", topic:"Coding 2 · Input and Pseudocode", num:"2.2",
      note:D("1Xv8ybKK5rHTQhVYaO_NL0d_uiaGEI0TE"),
      ans:D("1Anx0z7QkvP6-wP-QRfc2ixCQu5Rw9taN"), /* key: D("1Anx0z7QkvP6-wP-QRfc2ixCQu5Rw9taN") */
      extras:[["EQAO Questions", D("1O-lVhQouEJdpijAEnELQkos30rsBh9-g"), "eqao"],
              ["What Is Pseudocode?", "https://www.youtube.com/watch?v=qfckDdsEIq8", "vid"]]},
    {d:18, iso:"2026-09-25", topic:"Collecting Like Terms", num:"2.3",
      note:D("1b-XS_es2YeXxQuYAFAZnUslEbA48X25X"),
      ans:D("1ik0IoSRj0VHKrHpBr8h9NlHi8NVYcHUW"), /* key: D("1ik0IoSRj0VHKrHpBr8h9NlHi8NVYcHUW") */
      extras:[["EQAO Questions", D("1vqPIqJTk8pWvMDphVPJ1xUBHNwmIAi5k"), "eqao"],
              ["Collecting Like Terms", "https://www.youtube.com/watch?v=g9VIuFYB98g", "vid"]]},
    {d:19, iso:"2026-09-28", topic:"Equivalent Expressions", num:"2.4",
      note:D("10kyfDCK4bc-nJbXpj7ePbW9BnFd9N_bN"),
      ans:D("1FQZvqRF3iXl2e-X36Fy36DnVTAibxnRr"), /* key: D("1FQZvqRF3iXl2e-X36Fy36DnVTAibxnRr") */
      extras:[["EQAO Questions", D("155A8msqLtwmIetV14w36Zg12VQizv4ZH"), "eqao"],
              ["Equivalent Expressions", "https://www.youtube.com/watch?v=eW7paVRISoU", "vid"]]},
    {d:20, iso:"2026-09-29", topic:"Adding and Subtracting Polynomials", num:"2.5",
      note:D("19imA5a3tuS9lH5C5yTrjcw6nFwfy0401"),
      ans:D("16OXJLgbERpuiEvOz15D2ilReb7gHMHwm"), /* key: D("16OXJLgbERpuiEvOz15D2ilReb7gHMHwm") */
      extras:[["EQAO Questions", D("1b12y0ENTEIMPT1efb53iE0AaAxFXaGH8"), "eqao"],
              ["Adding and Subtracting Polynomials", "https://www.youtube.com/watch?v=nJPPYdkU35E", "vid"]]},
    {d:21, iso:"2026-09-30", topic:"Current Topics  &  Fraction Operations", flag:"quiz",
      extras:[]},
    {d:22, iso:"2026-10-01", topic:"Powers with the Same Base", num:"2.6",
      note:D("1h1nUMYQcox_hIeJkAkn3HvW9C2PfzgDe"),
      ans:"", /* key: D("10hioQwgK-GMAJSRBha-ARXFUZcwW1nt1") */
      extras:[["EQAO Questions", D("1TqP-1BG9SzbvTjPYsDkTAHAsV-arhvmL"), "eqao"],
              ["Multiplying and Dividing Powers", "https://www.youtube.com/watch?v=CZ5ne_mX5_I", "vid"]]},
    {d:23, iso:"2026-10-05", topic:"Powers of Powers", num:"2.7",
      note:D("1wfqKeWALwtVqYBUYSdfZiHkaoWx5cRHp"),
      ans:D("1utsen4Y4k9CvhEuiyCwTivyQOZlOQCBU"), /* key: D("1utsen4Y4k9CvhEuiyCwTivyQOZlOQCBU") */
      extras:[["EQAO Questions", D("1z72US5rvBvmmp-Aa87xSLk6MhPOcuxk4"), "eqao"],
              ["Powers of Products and Quotients", "https://www.youtube.com/watch?v=dC1ojsMi1yU", "vid"]]},
    {d:24, iso:"2026-10-06", topic:"Multiplying and Dividing Monomials", num:"2.8",
      note:D("10jZD63n3g49NleMtKK6_sBT2GJ-_z8RI"),
      ans:D("1ntnxTl6EIixVDL3YwGQSOtwfvWQGHPXr"), /* key: D("1ntnxTl6EIixVDL3YwGQSOtwfvWQGHPXr") */
      extras:[["EQAO Questions", D("12jstp468azBigIcTBmzmyEjKDs-FJrN7"), "eqao"],
              ["Multiplying and Dividing Monomials", "https://www.youtube.com/watch?v=IvefwveWexA", "vid"]]},
    {d:25, iso:"2026-10-07", topic:"Multiplying a Monomial by a Polynomial", num:"2.9",
      note:D("1LmUt8One4rBTaMemrKJ3Lnz9KrFpqSJU"),
      ans:D("1LNRmESPkecDXGnj_-pA-c_ZjDtJRVyYK"), /* key: D("1LNRmESPkecDXGnj_-pA-c_ZjDtJRVyYK") */
      extras:[["EQAO Questions", D("1ez_ObwmrxNr81Qv5P5PVeq3VrJeemxxH"), "eqao"],
              ["Multiplying a Polynomial by a Monomial", "https://www.youtube.com/watch?v=4xVWVvyachs", "vid"]]},
    {d:26, iso:"2026-10-08", topic:"Solving One-Step and Two-Step Equations", num:"2.10",
      note:D("1Tc0lVBtGZQ6a0YsQi2rU-zcA9HD3Jeu0"),
      ans:D("1FJgAMIWa59pEP-QzuSGNmf5lWHiX7lAU"), /* key: D("1FJgAMIWa59pEP-QzuSGNmf5lWHiX7lAU") */
      extras:[["EQAO Questions", D("1lonBLMyYvxFWUUxes-j5IuElH99EJoB1"), "eqao"],
              ["Solving Basic Equations", "https://www.youtube.com/watch?v=l3XzepN03KQ", "vid"],
              ["Solving Two-Step Equations", "https://www.youtube.com/watch?v=LDIiYKYvvdA", "vid"]]},
    {d:27, iso:"2026-10-09", topic:"Solving with Variables on Both Sides", num:"2.11",
      note:D("1iU3UqovrFKqF5zpY4_4gNtuO-ikHGoWW"),
      ans:D("1L5r3Rm9G2Cx6TMO3rpFnIGDl97gTVSxH"), /* key: D("1L5r3Rm9G2Cx6TMO3rpFnIGDl97gTVSxH") */
      extras:[["EQAO Questions", D("1V8qGQSmLTqaTDnKhN-IKPTBh8ti9MrGc"), "eqao"],
              ["Variables on Both Sides", "https://www.youtube.com/watch?v=f15zA0PhSek", "vid"],
              ["Solving with the Distributive Property", "https://www.youtube.com/watch?v=YZBStgZGyDY", "vid"]]},
    {d:28, iso:"2026-10-13", topic:"Coding 3 · Word Problems and Checking", num:"2.12",
      note:D("1vytWnAL2XWxeEw4IMhoHzWF0zEpwi486"),
      ans:D("1KGijohkv5Tg7CDDI41RuMiofWuZQLW1q"), /* key: D("1KGijohkv5Tg7CDDI41RuMiofWuZQLW1q") */
      extras:[["EQAO Questions", D("12xEHCYC2WUeiSaX29_tm2cXNGsMSXpPX"), "eqao"],
              ["Word Problem: Solving Equations", "https://www.youtube.com/watch?v=iimpwYBiKNg", "vid"],
              ["A Harder Equation Word Problem", "https://www.youtube.com/watch?v=xKH1Evwu150", "vid"]]},
    {d:29, iso:"2026-10-14", topic:"Current Topics  &  Scientific Notation", flag:"quiz",
      extras:[]},
    {d:30, iso:"2026-10-15", topic:"Review", noteLabel:"Unit 2 Review",
      note:D("1X75-icUfhEmZgWiPHPeIb3HFzRPw3P06"),
      ans:D("1qDrYxYiRSe4DCLDbNZ0D2LpRq3inXrlG"), /* key: D("1qDrYxYiRSe4DCLDbNZ0D2LpRq3inXrlG") */
      extras:[["Connections and Extensions", D("1k9sIf6AJm4Rr9WYPT5G736Vooiubi71F"), "doc"],
              ["Answers", D("1Yxe8tOgX1aGL1WGa8XoFmZ87ajHRkjjv"), "ans"]]},
    {d:31, iso:"2026-10-16", topic:"Unit 2 Test", flag:"test", extras:[]},
  ]},

  /* ── UNIT 3 ─────────────────────────────────────────────── */
  {name:"Linear Relations", days:[
    {d:32, iso:"2026-10-19", topic:"Rates of Change", num:"3.1",
      note:D("1J4IWaTzS8WyATpElDgKxXaDcVX2c94k0"),
      ans:D("14-I6bLHE-BFyn96s3Ta2TVmtB2VW971G"), /* key: D("14-I6bLHE-BFyn96s3Ta2TVmtB2VW971G") */
      extras:[["EQAO Questions", D("1fCSC2pBe8ZXtXWXXoxGNo-WgaZRsrPAX"), "eqao"],
              ["Finding Rates from Word Descriptions", "https://www.youtube.com/watch?v=euUyBndYvcw", "vid"]]},
    {d:33, iso:"2026-10-20", topic:"Linear and Non-Linear Relations", num:"3.2",
      note:D("1mk_Oys2hHn4PynS00i6DtLezlm50pdge"),
      ans:D("12VjXYvY-6hun8pNKJllNare0JVIAZ607"), /* key: D("12VjXYvY-6hun8pNKJllNare0JVIAZ607") */
      extras:[["EQAO Questions", D("15osF2FTEVbhVQP9kERHTvTYWN9U70-Bh"), "eqao"],
              ["Rate of Change and First Differences", "https://www.youtube.com/watch?v=DQgZ8M-NYgQ", "vid"]]},
    {d:34, iso:"2026-10-21", topic:"Connecting Representations", num:"3.3",
      note:D("1r9kXTXwdcJAAr2d8kff2uYhM-gKjNCMJ"),
      ans:D("1_bUWH3pr3YlipWzZxTu_Go9NxMQpDjyG"), /* key: D("1_bUWH3pr3YlipWzZxTu_Go9NxMQpDjyG") */
      extras:[["EQAO Questions", D("1-rsTT_qLLZexxYKmFTzWY4FDoFwHjUN0"), "eqao"],
              ["Tables, Graphs, Equations and Words", "https://www.youtube.com/watch?v=a2pobj3LK1k", "vid"]]},
    {d:35, iso:"2026-10-22", topic:"Current Topics  &  Like terms and Polynomial Operations", flag:"quiz",
      extras:[]},
    {d:36, iso:"2026-10-23", topic:"Slope", num:"3.4",
      note:D("1ayoshLHx2OuaPLqHMvNC8X25ObDikv-_"),
      ans:D("1vzKI8I3WeWkA7i5xSWGSdsPNNjZoL98p"), /* key: D("1vzKI8I3WeWkA7i5xSWGSdsPNNjZoL98p") */
      extras:[["EQAO Questions", D("1d_U3drnkVnJ9go2TKPQCorcUXcwT-04Z"), "eqao"],
              ["How to Find the Slope of a Line", "https://www.youtube.com/watch?v=QVdelg2-Zzk", "vid"]]},
    {d:37, iso:"2026-10-26", topic:"y = mx + b", num:"3.5",
      note:D("1R_TtmARjdijhIjQ8KUo0Ywkm61mb7TPU"),
      ans:D("1uMvoWo86e8x51SbzCAqfjxyeRkA_QDYQ"), /* key: D("1uMvoWo86e8x51SbzCAqfjxyeRkA_QDYQ") */
      extras:[["EQAO Questions", D("1iOwPLVqj4qTLqCsul7Vw7OnXCk_LcN7z"), "eqao"],
              ["Slope-Intercept Form: y = mx + b", "https://www.youtube.com/watch?v=qXX47hS2KLw", "vid"]]},
    {d:38, iso:"2026-10-27", topic:"Coding 4 · The Repeat Loop", num:"3.6",
      note:D("1t9fARx0gmbJQ1J3bDSs_T9r7LigKjd6B"),
      ans:D("16sMaJrhxG7LtwohKrlHhFHl7AEN-gf6s"), /* key: D("16sMaJrhxG7LtwohKrlHhFHl7AEN-gf6s") */
      extras:[["EQAO Questions", D("1qJ4e-JXb1tsCsqHYkTSNr-DNLeWz3pld"), "eqao"],
              ["Counting Loops in Pseudocode", "https://www.youtube.com/watch?v=w0iQ3-HvijA", "vid"]]},
    {d:39, iso:"2026-10-28", topic:"Equations from a Slope and a Point", num:"3.7",
      note:D("1-8Gszhofqq52p_UZRzlasbfG0NkExUFo"),
      ans:D("1DDvwd8-Gg_5P3yIVzuA-HXH5P0LGm14W"), /* key: D("1DDvwd8-Gg_5P3yIVzuA-HXH5P0LGm14W") */
      extras:[["EQAO Questions", D("10S8VX7CzDd8sbiv3rOdH7-ipSpsO5m_Q"), "eqao"],
              ["Equation of a Line from a Slope and a Point", "https://www.youtube.com/watch?v=H9ym0qevDRE", "vid"]]},
    {d:40, iso:"2026-10-29", topic:"Equations from Two Points", num:"3.8",
      note:D("1Sh-JxzCZGX8jA470SwZx2Z-qSr42w6sW"),
      ans:D("1rJsxz3Tzr2wg28PTAaJEgl-8sP-PrcaN"), /* key: D("1rJsxz3Tzr2wg28PTAaJEgl-8sP-PrcaN") */
      extras:[["EQAO Questions", D("1TWEl4RjnbfY31L71cHfuNn8bTOycPDFs"), "eqao"],
              ["Equation of a Line from Two Points", "https://www.youtube.com/watch?v=1wekohJ5nqA", "vid"]]},
    {d:41, iso:"2026-10-30", topic:"Problem Solving with Linear Relations", num:"3.9",
      note:D("1h12hrWIDXcgcXo9yhKOF8W2ViBxbTwsu"),
      ans:D("10dKX8nDuVJoUPQXhyBLP4ehZisLzLmTk"), /* key: D("10dKX8nDuVJoUPQXhyBLP4ehZisLzLmTk") */
      extras:[["EQAO Questions", D("1oedUszxDLPtaXQiaBS7hO011B-NHgf5y"), "eqao"],
              ["Linear Function Word Problems", "https://www.youtube.com/watch?v=8F4mk4C73YU", "vid"]]},
    {d:42, iso:"2026-11-02", topic:"Review", noteLabel:"Unit 3 Review",
      note:D("15iz2XJOS3JtZR4KLMQQYxBHWGRoISE9w"),
      ans:"", /* key: D("1S0lxbIWJ88xlcyst2Zb5LZOpo9QAlcMB") */
      extras:[]},
    {d:43, iso:"2026-11-03", topic:"Unit 3 Test", flag:"test", extras:[]},
  ]},

  /* ── UNIT 4 ─────────────────────────────────────────────── */
  {name:"Characteristics of Relations", days:[
    {d:44, iso:"2026-11-04", topic:"Take Your Kid to Work Day · No Grade 9 Class",
      extras:[]},
    {d:45, iso:"2026-11-05", topic:"Ordered Pairs, Plotting, and Satisfying a Relation", num:"4.1",
      note:D("14IPrPBqyRb__KiEa4CE3NGJ1aBf9Aeio"),
      ans:"", /* key: D("1tWUkCq7SYZLQs-UGZsl-XipUvAZH5i15") */
      extras:[["EQAO Questions", D("1i5eqqLbNcTNsjtTJ1ak1nDiLZwx7VUYv"), "eqao"],
              ["Ordered Pairs That Satisfy an Equation", "https://www.youtube.com/watch?v=6MfdfNtDCbs", "vid"]]},
    {d:46, iso:"2026-11-06", topic:"Intercepts and Equations ax + by = k", num:"4.2",
      note:D("1Tx9QIvuh1N4Z-ZcElzRiq8Gl88P600ko"),
      ans:"", /* key: D("1-YY4ibXn8x6XuuFRgMqyH_spMhPom0dk") */
      extras:[["EQAO Questions", D("1ulkdfqBN7yXcJ9CMRraL4h1YDeH9--gj"), "eqao"],
              ["Intercepts from Standard Form", "https://www.youtube.com/watch?v=_YnnE0s-T8Y", "vid"]]},
    {d:47, iso:"2026-11-09", topic:"Translations and Reflections of Lines", num:"4.3",
      note:D("1L3BGJ6TrkYtR_8YV8fECATUUExDFMRQI"),
      ans:"", /* key: D("1QblhHzLyBd8qZpRiDxvsh5hnA5itsIJS") */
      extras:[["EQAO Questions", D("1Yw7KBlFqi5Rxz7J0DltY-3t5jZMKNiCy"), "eqao"],
              ["Transforming Linear Functions", "https://www.youtube.com/watch?v=q3tFRKOIxLo", "vid"]]},
    {d:48, iso:"2026-11-10", topic:"Rotations of Lines about the Origin", num:"4.4",
      note:D("1yWw2cXsbx6zFObtYPjoRV2tmhlYueDHq"),
      ans:"", /* key: D("1-pn0pg1KhsBs1FC3ulRtAgCzq2UUIU07") */
      extras:[["EQAO Questions", D("1RuAIQccFfMvROZ448g4bb8_c3YuLYmYS"), "eqao"],
              ["Rotating a Line 90° About the Origin", "https://www.youtube.com/watch?v=_wm5AiFIGUw", "vid"]]},
    {d:49, iso:"2026-11-11", topic:"Non-Linear Relations: xy = k and Quadratic Shapes", num:"4.5",
      note:D("1DTl7D22IIluI-mywe4PtyPlJcE3OtpPB"),
      ans:"", /* key: D("1_WVGmwabkDEidty0xgRL__bZYST47icR") */
      extras:[["EQAO Questions", D("1bsX-f1xieKIcUiDatL10fN8eOVObR5KA"), "eqao"],
              ["Inverse Variation", "https://www.youtube.com/watch?v=lbAgiD1X-LE", "vid"]]},
    {d:50, iso:"2026-11-12", topic:"Coding 5 · If/Else: On, Above or Below the Line?", num:"4.6",
      note:D("1X77mIWvc14bH_IHcFPOuMq3kS98ohm4K"),
      ans:"", /* key: D("1AQ-EWYptGEgU2jzyhrbkVp_zCRUXFWU_") */
      extras:[["EQAO Questions", D("1K-4aJ5cnqggDe_haa5XsMEc-RpTLjE14"), "eqao"],
              ["If/Else in Pseudocode", "https://www.youtube.com/watch?v=9U6lsT8f-hI", "vid"]]},
    {d:51, iso:"2026-11-13", topic:"Current Topics  &  Solving, Slope, and y = mx + b", flag:"quiz",
      extras:[]},
    {d:52, iso:"2026-11-16", topic:"Review", noteLabel:"Unit 4 Review",
      note:D("1zsTzdyRT-mnNe3SieUNcSSW_8uAzanb3"),
      ans:"", /* key: D("1dEfys6adXIxPi8quexKFp1rx5o_TFDeW") */
      extras:[]},
    {d:53, iso:"2026-11-17", topic:"Unit 4 Test", flag:"test", extras:[]},
  ]},

  /* ── UNIT 5 ─────────────────────────────────────────────── */
  {name:"Data and Modelling", days:[
    {d:54, iso:"2026-11-18", topic:"How Data Is Collected", num:"5.1",
      note:D("15C7NDpK2ljXAHhfAfad6jfvkttf6m5zU"),
      ans:"", /* key: D("1zJrmM3JmcotZfHB7M2nflDarrYzddoZD") */
      extras:[["EQAO Questions", D("1wRUQIOl-3DC4KxdkC9o0m5MjjiVX94zR"), "eqao"],
              ["What Is Sampling?", "https://www.youtube.com/watch?v=qhzkCebkSWE", "vid"]]},
    {d:55, iso:"2026-11-19", topic:"One-Variable Data", num:"5.2",
      note:D("1cOt7LxQmpwLQnRGIzZOvBPX4pv-fYbf4"),
      ans:"", /* key: D("18HOGQ5ETrAMsPorA9BnB2UIKYm5R-Dia") */
      extras:[["EQAO Questions", D("1MvU-sI2Y5Qs-yW3sqL3twGLxVGJSgd6t"), "eqao"],
              ["Mean, Median, Mode and Range", "https://www.youtube.com/watch?v=e3uY2LraXts", "vid"]]},
    {d:56, iso:"2026-11-20", topic:"Two-Variable Data: Scatter Plots and Lines of Best Fit", num:"5.3",
      note:D("14HOEb02eKMcSETLHaKFglf92tfBWJGd4"),
      ans:"", /* key: D("1cWwE_jPx3Eeu-BW0lqvwG9qNaTiL_xQ8") */
      extras:[["EQAO Questions", D("1J_yGuMA5o0t8bIoAisXEi9rNWsuFt6S0"), "eqao"],
              ["Scatter Plots and the Line of Best Fit", "https://www.youtube.com/watch?v=e18KM681cmg", "vid"]]},
    {d:57, iso:"2026-11-24", topic:"Coding 6 · The Accumulator: Totals and Means", num:"5.4",
      note:D("1AwL5jN7xAUgYmS1O3LuQspMikBWjfe4c"),
      ans:"", /* key: D("1FUHwaaHKNRa_DMzuYNCMVRFVne9xMTUk") */
      extras:[["EQAO Questions", D("1Uo9r8PLGSRtXJAmXXj-Uorq-GViSJTrk"), "eqao"],
              ["Keeping a Running Total", "https://www.youtube.com/watch?v=x8e_od727XQ", "vid"]]},
    {d:58, iso:"2026-11-25", topic:"The Modelling Process: Understanding the Situation", num:"5.5",
      note:D("11H6ruRFRdrW0y46bSrdtNcTK661syXkP"),
      ans:"", /* key: D("1JEVRL9ISpPKn1XW9D1i8MxV1gdlvqNok") */
      extras:[["EQAO Questions", D("1sj77ZNBuOWOFsQ13_EDUUOC4Tebxsn-V"), "eqao"],
              ["What Is Math Modelling?", "https://www.youtube.com/watch?v=xHtsuOB-TPw", "vid"]]},
    {d:59, iso:"2026-11-26", topic:"Current Topics  &  y = mx + b Substitution", flag:"quiz",
      extras:[]},
    {d:60, iso:"2026-11-27", topic:"Modelling: The Plan and the Data", num:"5.6",
      note:D("1VBPOccSQ7Xb3BuE1kSo2fTDTQgdp9kq-"),
      ans:"", /* key: D("16GIgag8OmrkbRpY7u4hLJ2X4Ssq9GAN4") */
      extras:[["EQAO Questions", D("1hFcEY9BaH8IM1KVkihGB0uuUhncdF_QM"), "eqao"],
              ["Math Modelling: Defining Variables", "https://www.youtube.com/watch?v=oQTrwJWTc4M", "vid"]]},
    {d:61, iso:"2026-11-30", topic:"Modelling: Creating the Model", num:"5.7",
      note:D("1TWfSPTi6hDrWHGKV04NmmopbX62CSG7E"),
      ans:"", /* key: D("1n1GGQp6QN9X3xqsCbZAFkWr5bh4CwT5y") */
      extras:[["EQAO Questions", D("1uaVdKh2XcB959qHTh5DJibXwUFZoUy3G"), "eqao"],
              ["Math Modelling: Getting a Solution", "https://www.youtube.com/watch?v=wwck9hVjlQc", "vid"]]},
    {d:62, iso:"2026-12-01", topic:"Modelling: Assessing and Reporting", num:"5.8",
      note:D("1Azgj9ROLUcAHoMNuqWFziyuQduNYsJUW"),
      ans:"", /* key: D("1Y6DSsND1NzNXq6G051J9XSkblQKqALZ3") */
      extras:[["EQAO Questions", D("1CZ22cxDbCmrNa32J0DgsdKxUdle-IDwS"), "eqao"],
              ["Math Modelling: Analysis", "https://www.youtube.com/watch?v=EpnSdicc8hw", "vid"],
              ["Math Modelling: Reporting the Results", "https://www.youtube.com/watch?v=Qfq5TZL7lx4", "vid"]]},
    {d:63, iso:"2026-12-02", topic:"Modelling Project · Presentations",
      extras:[["Unit 5 Review", D("1K52-T-tfDsgCwKElKvEO4hlbl_l34kPo"), "doc"],
              ["Answers", D("1uoRNLs19D7INCnZ-_IovXLHxLIjfpyBD"), "ans"]]},
  ]},

  /* ── UNIT 6 ─────────────────────────────────────────────── */
  {name:"Geometry and Measurement", days:[
    {d:64, iso:"2026-12-03", topic:"Measurement Systems, Units and Conversion", num:"6.1",
      note:D("1XmCCycwrpOPPmYQd2gpvzhJtTLrnFumv"),
      ans:"", /* key: D("1ASeEqPw9OQJ_oNbsaZfB8lbk9Lbqt1pK") */
      extras:[["EQAO Questions", D("14f2Q3fPZFl4Kb9kj6homCfbQfqPhSeiX"), "eqao"],
              ["Converting Between Metric and Imperial", "https://www.youtube.com/watch?v=8SHTjGkbDp0", "vid"]]},
    {d:65, iso:"2026-12-04", topic:"Perimeter and Area in 2D · Composite Shapes", num:"6.2",
      note:D("1vWzbHOwTAszhzTwWUtNezfrmUA9h4XBM"),
      ans:"", /* key: D("1AIQlklUMG1bIC5srz6yiACVqdjYc2x1a") */
      extras:[["EQAO Questions", D("1EMImB44s9SGBk9WoI13FCtgE1ouwSDVH"), "eqao"],
              ["Perimeter and Area of a Composite Shape", "https://www.youtube.com/watch?v=rBpsauKXPfs", "vid"],
              ["Area of a Shaded Region", "https://www.youtube.com/watch?v=YopxzELAqkA", "vid"]]},
    {d:66, iso:"2026-12-07", topic:"Designing to a Constraint", num:"6.3",
      note:D("1O1h7vkYNJmLdxJnVRqKKtG-gQTCrf51u"),
      ans:"", /* key: D("1wlB6QzcvJQTHaRZ2IRL8rFbrPVH_82RW") */
      extras:[["EQAO Questions", D("1cFCwt9Sc6unrni38VTiJaTFrSGNX8cBG"), "eqao"],
              ["Maximizing Area with a Fixed Perimeter", "https://www.youtube.com/watch?v=Rie6kF1UZD0", "vid"],
              ["The Effects of Changing Dimensions", "https://www.youtube.com/watch?v=mtlvdt_adc8", "vid"]]},
    {d:67, iso:"2026-12-08", topic:"The Pythagorean Relationship", num:"6.4",
      note:D("1aL3ugZjZhYwb5RUVhUZHRpwXkhI-DweD"),
      ans:"", /* key: D("1b3RIQ4yhGBGWpZRcSsekZ8M1qZEnA2x1") */
      extras:[["EQAO Questions", D("1EszQfJVxrODyrc41N74z5mGE7kLaJHqK"), "eqao"],
              ["What Is the Pythagorean Theorem?", "https://www.youtube.com/watch?v=oOhq1T80LEo", "vid"]]},
    {d:68, iso:"2026-12-09", topic:"Current Topics  &  Solving Equations and Proportional Reasoning", flag:"quiz",
      extras:[]},
    {d:69, iso:"2026-12-10", topic:"Angle Relationships: Interior and Exterior Angles", num:"6.5",
      note:D("1IeAm3ozqiC9i_6WEfJ_jAwK-X5FTzdkP"),
      ans:"", /* key: D("1Oe7HCEuugO6evFa1-4L3VwYon6s189a7") */
      extras:[["EQAO Questions", D("1RZdQfxpVUqMGx4kMvyaASxAsR2tlGW9K"), "eqao"],
              ["Interior and Exterior Angles", "https://www.youtube.com/watch?v=OEzEo4XqzJQ", "vid"],
              ["Angle Theorems: Top 10", "https://www.youtube.com/watch?v=Bq1QyT-HZrU", "vid"]]},
    {d:70, iso:"2026-12-11", topic:"Triangle and Circle Relationships", num:"6.6",
      note:D("1fHOfOGDGqvf3ng51W4hvfG9YzuQsnHGg"),
      ans:"", /* key: D("1nGCYxRZl8ptdESr8_pP5lmUU8OcpirAR") */
      extras:[["EQAO Questions", D("11nd0y9wpaoVUgowQUb_9V1F-2eZOk28r"), "eqao"],
              ["Circle Theorems", "https://www.youtube.com/watch?v=dBIlCD_JF9Q", "vid"]]},
    {d:71, iso:"2026-12-14", topic:"Volume: Prisms, Pyramids, Cylinders and Cones", num:"6.7",
      note:D("1uxj_gQMTKP86J2iZEUvmpk_kKbOwzTS5"),
      ans:"", /* key: D("116yX2npCafLVe9ZnypJpm5-fXjtuE9HO") */
      extras:[["EQAO Questions", D("1EoDIANXOfGErgrbvN_ubuirtG3rLGDlL"), "eqao"],
              ["How Many Cones Fill a Cylinder?", "https://www.youtube.com/watch?v=Yr53Ji4SZDg", "vid"]]},
    {d:72, iso:"2026-12-15", topic:"Calculations in 3D · Surface Area", num:"6.8",
      note:D("1lopc-UuhwL2z5umboYBGyJOAhnoVVYPH"),
      ans:"", /* key: D("1lSKL_UHdtOHtuDXNrqNDWQjCTxa4pOMb") */
      extras:[["EQAO Questions", D("1cAEx77sg7KJJ6n5_B1gQsf7D-3aXjIb5"), "eqao"],
              ["Volumes of Composite Solids", "https://www.youtube.com/watch?v=I4VGICORQLE", "vid"]]},
    {d:73, iso:"2026-12-16", topic:"Review", noteLabel:"Unit 6 Review",
      note:D("1Xhq1vStXAjJ3vGcJavmmq_kNrHHEE44U"),
      ans:"", /* key: D("1Q7pkAZmzH7P4v-1xT5EidVTESOXk7Wap") */
      extras:[]},
    {d:74, iso:"2026-12-17", topic:"Unit 6 Test", flag:"test", extras:[]},
    {d:75, iso:"2026-12-18", topic:"Volume, Slope, and Like Terms", flag:"pquiz", extras:[]},
  ]},

  /* ── UNIT 7 ─────────────────────────────────────────────── */
  {name:"Financial Literacy", days:[
    {d:76, iso:"2027-01-04", topic:"Financial Situations, Systems and Context", num:"7.1",
      note:D("1x7v8en0QFX1v6K79KOz8hkGy1GVX22jJ"),
      ans:"", /* key: D("1J0ks2sFtvcGpplHpEcKEe6y2j-Ra1J0I") */
      extras:[["EQAO Questions", D("19rpctfn9ReSTKnaPUaH3BQIWMYqhQP7L"), "eqao"],
              ["Needs vs Wants", "https://www.youtube.com/watch?v=Wa8kYJV68LM", "vid"]]},
    {d:77, iso:"2027-01-05", topic:"Budgeting", num:"7.2",
      note:D("1ew2kujGTKR1oO6RM0Y_PqqiJgW20TCs_"),
      ans:"", /* key: D("1hh6kJn8pho-wXNif-k3fJ8XimpaVuTQo") */
      extras:[["EQAO Questions", D("13HqJ0PnpEHYI65oDLhNmrw986SQl4VcZ"), "eqao"],
              ["Making a Simple Budget", "https://www.youtube.com/watch?v=mt115A05q6Q", "vid"]]},
    {d:78, iso:"2027-01-06", topic:"Percent in Financial Contexts", num:"7.3",
      note:D("1F6Nwo72qIZqAemWXv8Ui8U8KXwPiX_Ck"),
      ans:"", /* key: D("1d1WWiDFPDUlwKPWQ2oSBXSL3GLYQwq3w") */
      extras:[["EQAO Questions", D("1En384h33RK3GrQVP787QiB6uagP0r-i_"), "eqao"],
              ["Percent of Change", "https://www.youtube.com/watch?v=jAcDJDjQk2g", "vid"]]},
    {d:79, iso:"2027-01-07", topic:"Appreciation and Depreciation", num:"7.4",
      note:D("1rNb24_-cVY4Z3tDivrF-IXWWPKvI6LjH"),
      ans:"", /* key: D("1Vh2ccdUfPG_RUTzsj3c8wGp9UGTGAw-P") */
      extras:[["EQAO Questions", D("1himGckX4voizUDMCZ9V58JwxtpN1hJok"), "eqao"],
              ["Appreciating vs Depreciating Assets", "https://www.youtube.com/watch?v=OGBT_l1yhbs", "vid"]]},
    {d:80, iso:"2027-01-08", topic:"Simple and Compound Interest", num:"7.5",
      note:D("1Lucq3RGxPxYnE1H5k2Y71_p43mj3Vx8R"),
      ans:"", /* key: D("1PpOfNlg4-BrJsmnsNCP0FpTGaUB_MHsW") */
      extras:[["EQAO Questions", D("13XbGJ0rRDoRr1Dt4Q0dMgD4yF2ktqcnU"), "eqao"],
              ["Simple vs Compound Interest", "https://www.youtube.com/watch?v=lMVwYoiiV0w", "vid"],
              ["How Principal and Interest Work in Loan Payments", "https://www.youtube.com/watch?v=JvEOX9DcZn8", "vid"]]},
    {d:81, iso:"2027-01-11", topic:"Coding 7 · Comparing Two Financial Options", num:"7.6",
      note:D("12TwriVKgLLjpKdeg-RwNQOFOmPSOx9p7"),
      ans:"", /* key: D("1FtzcbKT-IBI_hmLEsJu8RWmT9TjcF6TU") */
      extras:[["EQAO Questions", D("1L7LKSA-FgHlmPT9pM8IKbibqDaIGQnyY"), "eqao"],
              ["Comparing Two Savings Accounts", "https://www.youtube.com/watch?v=8xqmxdrDOcQ", "vid"]]},
    {d:82, iso:"2027-01-12", topic:"Current Topics  &  Exponent Laws and Percentages", flag:"quiz",
      extras:[]},
    {d:83, iso:"2027-01-13", topic:"Review", noteLabel:"Unit 7 Review",
      note:D("1JnT6I9dsDboeAoJJDcWnSOXHmzk5sZ1U"),
      ans:"", /* key: D("1p4pHlVY9POXj1uL-LKrl8OMlECBQXxOA") */
      extras:[]},
    {d:84, iso:"2027-01-14", topic:"Unit 7 Test", flag:"test", extras:[]},
  ]},

  /* ── EQAO REVIEW ────────────────────────────────────────── */
  {name:"EQAO Review", noNumber:true, days:[
    {d:85, iso:"2027-01-15", topic:"EQAO Review · Number and Algebra", noteLabel:"EQAO Review",
      note:D("1QSHaugWfZk7jjGAUSE-2crcy0EFqZ1Sy"),
      ans:"", /* key: D("17jDNsmnrtSe_JqL4wzFu3S4IivNi7569") */
      extras:[]},
    {d:86, iso:"2027-01-18", topic:"EQAO Review · Relations and Data", noteLabel:"EQAO Review",
      note:D("1Am3umpB9vpp4llqiLAN7QKUT9UlNwMVF"),
      ans:"", /* key: D("1fPawx_Cf4UcHWM0Kc9qIA2XF7tCTHL-q") */
      extras:[]},
    {d:87, iso:"2027-01-19", topic:"EQAO Review · Geometry, Measurement and Finance", noteLabel:"EQAO Review",
      note:D("1m5wH75jDczwibOtD8HbS6jj0JZDKaiR6"),
      ans:"", /* key: D("1HwZMX73gQJtIxgIfSZ7yLbKW4uguIJj7") */
      extras:[]},
    {d:88, iso:"2027-01-20", topic:"EQAO Format Practice · The Sample Assessment", noteLabel:"Format Practice",
      note:D("1Ks-8WN8D0qwN4SVeeyrK4QDhmkUSVxYd"),
      ans:"", /* key: D("1v1jy0TuDYLLQy9lRU8B5mzfiJJejB_4w") */
      extras:[["EQAO Online Sample Test", "https://eqao.com/the-assessments/grade-9-math", "eqao"]]},
    {d:89, iso:"2027-01-21", topic:"EQAO Timed Practice · Last Day", noteLabel:"Timed Practice",
      note:D("18w4kbjI4GQH4Bu7vwPxK83HyGCuGH56v"),
      ans:"", /* key: D("19zXlf_C5ABozTqVhs9G0S26lrAxNjCGs") */
      extras:[]},
  ]},

]};
