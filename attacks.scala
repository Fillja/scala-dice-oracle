enum AttackResult:
  case Hit(damage: Int)
  case Critical(damage: Int)
  case Miss

def narrate(result: AttackResult): String =
  result match {
    case AttackResult.Hit(dmg) => s"A solid hit for $dmg damage."
    case AttackResult.Critical(dmg) => s"CRITICAL HIT - $dmg damage!"
    case AttackResult.Miss => s"A clean miss."
  }

@main def combat() =
  val attackLog = List(
    AttackResult.Hit(6),
    AttackResult.Miss,
    AttackResult.Hit(3),
    AttackResult.Critical(12)
  )
  attackLog.foreach(attackResult => println(narrate(attackResult)))