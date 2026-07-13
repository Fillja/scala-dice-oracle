# Immutable domain modelling with case classes (Lesson 2 delivered)

Lesson 2 built and delivered on 2026-07-12: **"Modelling a monster with immutable
data."** First real FP-core lesson after setup.

**What was taught (knowledge):**
- `case class Monster(name: String, armorClass: Int)` as a *product type*, anchored
  hard to C# `record`.
- What a case class generates for free: no-`new` constructor, immutable `val` fields,
  value equality (`==`), readable `toString`, `copy`.
- The chosen depth angle (per user's request): **why** immutability matters —
  no aliasing / "spooky action at a distance", safe sharing, and a first, gentle
  naming of **referential transparency** (same input → same output).
- `.copy(...)` as "change without mutating".
- `List(...)` and `.find(_ == ...)` returning an `Option` (`Some`/`None`).

**Deliberately deferred (do NOT assume learned):**
- `Option` was only *seen* as a printed `Some(...)`, explicitly flagged as "its own
  lesson soon." Not taught how to unwrap (getOrElse / pattern match).
- `enum` / ADTs, pattern matching, dice logic — all still ahead. One concept per lesson.

**Skills practice:** retrieval quiz (4 Qs, new reusable `assets/quiz.js` widget) +
hands-on task (add a Skeleton, look it up, observe value equality). Skill is
*claimed but not yet confirmed* — no evidence yet that the user ran `monsters.scala`
or completed the task. Confirm at the top of next session before advancing.

**New workspace assets created:** `assets/quiz.js` (reusable retrieval-quiz widget,
markup-contract documented in the file), quiz styles appended to `assets/course.css`,
and `reference/scala-syntax.html` (growing syntax cheat sheet — started this lesson).

**ZPD for next lesson:** with product types in hand, the natural next brick is
**sum types** — modelling a *choice*. Candidate: Lesson 3 "Hit or Miss with an
`enum`" (an ADT for the attack outcome), which sets up pattern matching after.
See [[MISSION.md]] and [[0001-environment-and-baseline]].
