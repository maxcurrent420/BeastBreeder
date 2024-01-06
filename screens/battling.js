import { Inventory, Item } from '../inventory.js';

class Battle {
  constructor(playerInventory) {
    this.playerInventory = playerInventory;
  }

  fight(monster, item) {
    this.playerInventory.useItem(item);

    if (!this.playerInventory.items.includes(item)) {
      throw new Error('Item not in inventory');
    }

    // Logic for fighting the monster goes here
  }
}

export default Battle;
