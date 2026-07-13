# Lesson 4 (pattern matching + exhaustiveness) — CONFIRMED complete

Date: 2026-07-13.

**Lesson 4 delivered and CONFIRMED same session.** User built `narrate(AttackResult):
String` with `match`, ran it, did the quiz, and completed the hands-on exhaustiveness
exercise (they chose the "trigger the warning yourself" variant over prose).

**Strong evidence of understanding — user saw the full story, not half:**
- Compile-time: got `[warn] match may not be exhaustive … It would fail on pattern case:
  Miss` at `attacks.scala:7:3`, AND saw the IDE red squiggle on the `result` match scrutinee.
- Runtime: the program compiled + ran anyway (it's a *warning*, not an error), printed the
  first `Hit`, then threw `scala.MatchError: Miss` when `foreach` reached the `Miss` element.
- So they experienced the key insight first-hand: exhaustiveness checking moves a would-be
  runtime `MatchError` forward to a compile-time warning. The warning *predicted the exact
  crash*. User said "this was a good lesson."

**Concepts now solid (storage strength looks good):**
- `match` is an **expression** that returns a value (vs C# `switch` statement); anchored to
  C#'s `switch` expression.
- Payload binding: `case Hit(dmg) =>` binds the case's data to a fresh `val` — this closed
  the open thread from [[0003-sum-types-and-adts]] ("reading a case's data needs a match").
- Exhaustiveness on a closed `enum`; `MatchError` is what a non-exhaustive match throws at
  runtime.

**Flagged forward (mentioned, not yet taught):**
- Warnings-as-errors: in a real build you'd fail the compile on a non-exhaustive match so it
  can't ship. Good to teach when we set up a slightly more real project / build config.
- `case _ =>` wildcard (and how it silently disables exhaustiveness), matching on nested
  shape — both teased in Lesson 4's ask-teacher box, still parked.

**Retrofit done this session:** added the missing `q-fb` feedback element to Lesson 2 and
Lesson 3 quizzes (user had never seen a quiz explanation — the element was absent so it
failed silently). Hardened `assets/quiz.js` to self-create the node if a lesson omits it.

**ZPD for next lesson:** Lesson 5 = **the first pure attack-resolution function**
(`roll + AC -> AttackResult`). All building blocks now exist — product ([[0002-immutable-domain-modelling]]),
sum ([[0003-sum-types-and-adts]]), and `match`. This is the mission's centrepiece: the first
real "functional core" win. Keep it pure by passing the roll in as a parameter (defers the
"where does randomness live" problem, which motivates a later functional-state lesson).
See [[MISSION.md]].
