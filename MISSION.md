# Mission: Functional Programming in Scala

## Why
Broaden from web development (.NET) into a new domain by learning functional
programming, using Scala as the vehicle. The goal is to internalize FP
fundamentals well enough to bring that thinking back to the day job — not to
collect framework knowledge.

## Success looks like
- Build two small networked services (a **Client** and a **Dice Oracle**) that
  resolve D&D-style attacks over a simple line protocol.
- Model the domain with immutable data (case classes, ADTs) and resolve game
  logic with **pure functions**.
- Explain and apply core FP ideas: immutability, algebraic data types, pattern
  matching, referential transparency, functional error handling, and the
  "functional core / imperative shell" split.

## Constraints
- A few hours per week, solo, self-taught.
- **Minimal tooling by choice**: Scala 3 + Scala CLI + standard library only.
  No frameworks or effect systems until the fundamentals are solid. The user
  wants to see the inner workings, not be abstracted away by many tools.
- Starting from zero Scala/JVM setup; comes from a .NET/OOP background.

## Out of scope (for now)
- Effect systems (Cats Effect, ZIO), web frameworks (http4s), sbt, databases,
  Kubernetes.
