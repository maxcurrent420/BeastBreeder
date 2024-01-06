import { Quest } from './quest.js';

/**
 * This file contains the implementation of the NPC class, which represents non-playable characters in the game. NPCs have various attributes and behaviors that interact with the player and other game entities.
 */

export class NPC {
  /**
   * Creates a new NPC instance.
   * @constructor
   * @param {string} name - The name of the NPC.
   * @param {string} role - The role of the NPC.
   * @param {string} dialogue - The dialogue of the NPC.
   */
  constructor(name, role, dialogue) {
    this.name = name;
    this.role = role;
    this.dialogue = dialogue;
  }

  /**
   * Starts a quest for the NPC.
   * @param {Quest} quest - The quest to start.
   */
  startQuest(quest) {
    if (quest instanceof Quest) {
      quest.startQuest();
    }
  }

  /**
   * Sells an item to the player.
   * @param {Item} item - The item to sell.
   * @param {Player} player - The player to sell the item to.
   */
  sellItem(item, player) {
    if (player.coins >= item.cost) {
      player.coins -= item.cost;
      player.inventory.push(item);
    }
  }
}
