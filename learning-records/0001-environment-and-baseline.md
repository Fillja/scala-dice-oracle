# Environment working; learner baseline established

Lesson 1 complete. The learner has a confirmed, minimal Scala 3 toolchain and can
run code two ways — no setup teaching is needed from here on.

**Evidence:** Ran `hello.scala` successfully via both `scala-cli` (CLI) and the
IntelliJ green Run button, with a working BSP import.

**Confirmed environment (don't re-derive):**
- Scala **3.8.4**, JVM **Temurin 17** (both auto-managed by Scala CLI).
- IntelliJ IDEA 2026.1.4 Community + Scala plugin, importing the project via BSP.
- Coursier cache at `C:\Users\Robin\AppData\Local\Coursier\cache\`; project build
  artifacts in `.scala-build\`.
- Windows Defender real-time protection excluded for the project folder (learner's
  choice, for indexing performance).

**Baseline for zone of proximal development:** Comfortable with imperative/OOP
(.NET/C#, some Java). Has now *seen* — but not yet practiced — `@main`, `val`
(immutability), significant-indentation blocks, and `s"..."` interpolation, each
introduced via analogy to C#. Next teaching should build the FP core (immutable
domain modelling with case classes / ADTs), grounded in the dice-oracle project.
See [[MISSION.md]].
