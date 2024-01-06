import { Inventory } from '../components/inventory.js';

class Breeding {
  constructor(playerInventory: Inventory) {
    this.playerInventory = playerInventory;
    this.playerInventory = playerInventory;
  }

  breed(monster1, monster2, item) {
    this.playerInventory.useItem(item);

    if (!this.playerInventory.items.includes(item)) {
      throw new Error('Item not in inventory');
    }

    const newMonster = this.combineMonsters(monster1, monster2, item);

    return newMonster;
  }

  combineMonsters(monster1, monster2, item) {
    // Logic to combine monsters and influence traits with item
  }
}

export default Breeding;
