import { Inventory, Item } from '../inventory.js';
import QuestSystem from '../questSystem.js'; // Import the QuestSystem

class Battle {
  constructor(playerInventory, questSystem) { // Update the constructor to include questSystem
    this.playerInventory = playerInventory;
    this.questSystem = questSystem; // Store the questSystem reference
  }

  fight(monster, item) {
    this.playerInventory.useItem(item);

    if (!this.playerInventory.items.includes(item)) {
      throw new Error('Item not in inventory');
    }

    // Logic for fighting the monster goes here

    // Update quest progress after the fight
    this.questSystem.updateProgress('monster', monster);
  }
}

export default Battle;