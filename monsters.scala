case class Monster(name: String, armorClass: Int)

@main def roster() =
  val monsters = List(
    Monster("Skeleton", 11),
    Monster("Goblin", 13),
    Monster("Orc", 15),
    Monster("Dragon", 18)
  )

  val foundMonster = monsters.find(m => m.name == "Skeleton")
  println(foundMonster)
  println(Monster("Orc", 13) == Monster("Orc", 13))