import { Quest } from './quest.js';

/**
 * This file contains the implementation of the NPC class, which represents non-playable characters in the game. NPCs have various attributes and behaviors that interact with the player and other game entities.
 */

export class NPC {
  constructor(name, role, dialogue) {
    this.name = name;
    this.role = role;
    this.dialogue = dialogue;
  }

  startQuest(quest) {
    if (quest instanceof Quest) {
      quest.startQuest();
    }
  }

  sellItem(item, player) {
    if (player.coins >= item.cost) {
      player.coins -= item.cost;
      player.inventory.push(item);
    }
  }
}
