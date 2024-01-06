 Monster class
class Monster {

  constructor(name, health, attack, defense, types) {
    this.name = name;
    this.health = health; 
    this.attack = attack;
    this.defense = defense;
    this.types = types;
  }

   Battle mechanics
  takeDamage(damage) {
    this.health -= damage;
  }

  attackEnemy(enemy) {
    let damage = this.attack - enemy.defense;
    enemy.takeDamage(damage);
  }

}

 Monster type definitions
const types = {
  PLANT: 'Plant',
  FIRE: 'Fire',
  WATER: 'Water'
}

 Export Monster class
export default Monster;
export { types };