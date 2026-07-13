# Teaching Notes

Working notes and user preferences. Refer back to these when designing lessons.

## User preferences
- **Minimalism is a hard requirement.** Keep tools/frameworks to an absolute
  minimum. The user wants to understand fundamentals and see the inner workings,
  not be "clouded by 100 tools and abstracted away." When choosing between a
  convenient library and the standard library, prefer the standard library and
  explain what's happening underneath.
- **Discuss before coding.** Per the user's global instructions: lay out options
  and trade-offs first; never create/edit files or install anything without an
  explicit go-ahead ("Go ahead", "Write it", etc.). Proposing a plan is not
  permission to execute it.
- **Small increments.** One tightly-scoped lesson at a time.
- **Honesty.** Mark inferences as inferences. "I don't know" beats
  confident-and-wrong.

## Background (for pitching difficulty)
- Junior dev, ~3 years. Main language .NET/C#; light Java/Maven. Frontend:
  Vue/Angular/React. Light Docker. **Zero** Scala, JVM, Kubernetes.
- Comes from an OOP/imperative mindset — expect the FP shift (immutability,
  expressions over statements, purity) to be the main conceptual work.

## Environment
- Windows 11, PowerShell. IntelliJ IDEA (new to them) chosen over VSCode.
- Toolchain: Scala 3 + Scala CLI only. Scala CLI manages the JVM + compiler.

## Next session
- **Lesson 4 CONFIRMED complete (2026-07-13).** User ran `narrate`, did the quiz, and
  saw BOTH the compile-time non-exhaustive warning AND the runtime `MatchError: Miss`
  when they removed the `Miss` case — the full story. Storage strength looks good. See
  LR-0004. Open directly on Lesson 5; no re-teaching of `match` needed.
- **Build Lesson 5 — the first pure attack-resolution function**
  (roll + AC → AttackResult). All the pieces now exist (product, sum, match). This
  is the first real "functional core" win — the mission's centrepiece. Likely still
  no real randomness yet (pass the roll in as a param → keeps it pure; motivates the
  later "functional state / where does randomness live" lesson).
- Still parked: a short "Option: honest maybe" lesson — user has only *seen*
  `Some(...)`/`None`. ADT page shows Option IS an enum, so it slots naturally now
  that `match` is taught.
- Parked teaching threads to reach for when relevant: `case _ =>` wildcard (and how
  it disables exhaustiveness), matching on nested/shape data (both teased in Lesson 4's
  ask-teacher box).

## Assets & reference state
- `assets/quiz.js` — reusable retrieval-quiz widget (built Lesson 2). Markup
  contract documented at top of the file; styles live in `course.css`. Reuse it,
  don't reinvent. Rule: keep quiz options equal word/char count.
- `reference/scala-syntax.html` — growing syntax cheat sheet. **Append new syntax
  here every lesson** (currently: val/var, case class, copy, ==, enum, match +
  exhaustiveness, collections, functions/`def` + lambda values, @main, s-strings,
  indentation).

## Teaching decisions log
- 2026-07-07: Chose Scala CLI as the sole toolchain (official `scala` runner
  since 3.5.0; auto-downloads JVM). Networking will use plain `java.net`
  sockets — no http4s/ZIO — to keep the "inner workings" visible.
- 2026-07-07: Lesson 1 done. Confirmed: Scala 3.8.4 / JVM 17, IntelliJ 2026.1.4
  Community + Scala plugin via BSP. Coursier cache at
  `C:\Users\Robin\AppData\Local\Coursier\cache\`. See LR-0001.
- 2026-07-12: Lesson 2 delivered ("Modelling a monster"). User chose the deeper
  "why immutable" angle over the plain scope. Built reusable quiz widget +
  started the syntax reference. See LR-0002.
- 2026-07-13: Lesson 4 delivered ("Pattern matching on outcomes"). Hands-on
  exhaustiveness (user picked the "trigger the warning yourself" variant over prose).
  Reused quiz.js + course.css; appended a `match` section to the syntax reference and
  wired the 0003↔0004↔reference nav links. **Found + noted a latent bug: Lesson 3's
  quiz `.q` blocks omit the `<p class="q-fb">` element quiz.js expects, so its
  explanation line silently fails (green highlight still works).** Lesson 4 includes
  the element correctly. **Retrofitted (2026-07-13):** added the `q-fb` element to all
  4 questions in BOTH Lesson 2 and Lesson 3 (user had never seen an explanation — thought
  the quiz was just red/green/yellow). Also **hardened `quiz.js`**: it now self-heals by
  creating the `q-fb` node if a lesson omits it, so this can't silently recur.
- 2026-07-12: **Re-anchored Lesson 2 to the user's real .NET mental model.** They
  have little `record` experience — their world is mutable `{ get; set; }` EF
  entities + DTO/ViewModel bags. So immutability is now framed via *the setter*
  (a setter = the handle that causes aliasing; case class has none) and a callout
  noting EF entities are legitimately mutable (change-tracking) while our domain
  is the value/DTO world. **Going forward, anchor C# analogies to mutable classes
  + EF, not to records.** Validation-via-attributes → validation-as-a-function is
  a flagged future lesson (functional error handling).
