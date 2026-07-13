# Lesson 2 confirmed; Lesson 3 (sum types / ADTs) delivered

Date: 2026-07-12 (same session as LR-0002).

**Lesson 2 CONFIRMED complete.** User reports doing the full lesson including the
quiz and succeeding. Unprompted, they articulated the *why* correctly: immutability
matters because data is processed and shared across several networks at once, and we
need a guarantee the same correct data is served on all fronts. That's the real
insight, not just fluency — storage strength looks good here.

**Follow-up question that showed real understanding:** "Is `List` also immutable, and
is that why we use it over `Array`?" Answered: yes (List = immutable, build-new not
mutate); Array is mutable (slot reassignment) *and* fixed-size, kept for perf / Java
interop; immutability is a property of a whole family (List, Vector, Set, Map).
Captured this in `reference/scala-syntax.html` (new Collections section).

**Lesson 3 delivered: "Hit or Miss — modelling a choice with `enum`."**
- Concept (single): **sum types / ADTs**. Product (case class, AND) vs sum (enum, OR).
- `enum AttackResult: case Hit(damage: Int) / case Miss`.
- C# anchor (per the standing decision to anchor on the user's real .NET world):
  a C# enum is named ints; a Scala enum case **carries data** → discriminated union
  (F#/TS have it, C# doesn't). Also framed "make illegal states unrepresentable" vs
  the C# `bool WasHit` + `int? Damage` flag-bag anti-pattern.
- Win: build a `List[AttackResult]` combat log, print it, add a `Critical` case.

**Deliberately deferred (do NOT assume learned):**
- **Pattern matching / `match`** — explicitly held for Lesson 4. Lesson 3 only
  *models and constructs*; it teases exhaustiveness as next lesson's payoff.

**Lesson 3 CONFIRMED complete** (end of 2026-07-12 session). User built
`attacks.scala`, did the quiz, and gave back a correct product-vs-sum summary
("product = many fields/AND, sum = either-or/OR"). Storage strength looks solid.
Next session opens directly on Lesson 4 — no re-confirmation needed.
- Field access on a case (e.g. `hit.damage`) needs a match first, so not shown.

**ZPD for next lesson:** Lesson 4 = **pattern matching on `AttackResult`** — turn a
Hit/Miss/Critical into a narration string, and let the compiler enforce
exhaustiveness (the promise made in Lesson 3). After that, the pieces exist to write
the first *pure* attack-resolution function. See [[MISSION.md]],
[[0002-immutable-domain-modelling]].
