# Functional Programming in Scala — Resources

Trusted sources for this workspace. Knowledge in lessons should be drawn from
here, not from parametric guesses. Annotate every entry.

## Knowledge

- [The Scala 3 Book (official)](https://docs.scala-lang.org/scala3/book/introduction.html)
  The canonical, free introduction to Scala 3 from the language team. Use for:
  syntax, case classes, enums/ADTs, pattern matching, collections — the primary
  reference for almost every early lesson.
- [Scala 3 — Getting Started / Install](https://docs.scala-lang.org/getting-started/install-scala.html)
  Official install guidance; confirms Scala CLI as the recommended entry point.
  Use for: setup and toolchain questions.
- [Scala CLI documentation](https://scala-cli.virtuslab.org/docs/overview/)
  Docs for our one and only tool. Use for: running files, REPL, tests, IDE
  setup (`setup-ide`), packaging. See [Under the hood](https://scala-cli.virtuslab.org/docs/under-the-hood/)
  for how it manages the JVM/compiler.
- [Using Scala CLI with IntelliJ IDEA (JetBrains)](https://www.jetbrains.com/help/idea/scalacli.html)
  Official steps for importing a Scala CLI project via BSP. Use for: IDE setup.
- [Book: _Functional Programming in Scala, 2nd ed._ — Chiusano, Bjarnason, Pilquist](https://www.manning.com/books/functional-programming-in-scala-second-edition)
  The canonical FP-in-Scala text ("the red book"). Deep and rigorous — a
  purchase, not free. Use for: the *why* behind purity, ADTs, functional state
  (the dice-randomness problem is literally a chapter here), and later error
  handling. Reach for it once fundamentals click.

## Wisdom (Communities)

- [r/scala](https://www.reddit.com/r/scala/)
  Active, generally high-signal. Use for: "is this idiomatic?" questions, design
  critique once you have code to show.
- [Scala Users Discourse forum](https://users.scala-lang.org/)
  Official beginner-friendly forum, patient with newcomers. Use for: focused
  language questions with a code snippet.
- [Scala Discord / Gitter (linked from scala-lang.org/community)](https://www.scala-lang.org/community/)
  Real-time help. Use for: quick unblocking.

## Gaps
- No source yet vetted specifically for **plain JVM socket networking from
  Scala** (most tutorials jump to a framework). Will search when we reach the
  imperative-shell lesson; may lean on Java's `java.net` docs directly.
