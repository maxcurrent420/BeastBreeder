  /**
   * @file
   * This file contains the definition of the Quest class.
   * It provides functionality related to quests in the game.
   */

import { Quest } from './quest.js';

export class NPC {
  /**
   * Constructor for the NPC class.
   *
   * @param {string} name - The name of the NPC.
   * @param {string} role - The role of the NPC.
   * @param {string} dialogue - The initial dialogue of the NPC.
   * @returns {void}
   */
  constructor(name, role, dialogue) {
    this.name = name;
    this.role = role;
    this.dialogue = dialogue;
    this.quests = [];
  }

  /**
   * Assigns a quest to the NPC.
   *
   * @param {Quest} quest - The quest to be assigned.
   * @returns {void}
   */
  assignQuest(quest) {
    this.quests.push(quest);
  }

  /**
   * Offers quests to the player if they have not already accepted them.
   *
   * @param {Player} player - The player to whom quests are to be offered.
   * @returns {void}
   */
  offerQuests(player) {
    for (const quest of this.quests) {
      if (!player.quests.includes(quest)) {
        console.log(`${this.name} offers a quest: ${quest.name} - ${quest.description}`);
        player.quests.push(quest);
      }
    }
  }

  /**
   * Starts a quest for the player if not already started.
   *
   * @param {Quest} quest - The quest to be started.
   * @param {Player} player - The player who is starting the quest.
   * @returns {void}
   */
  startQuest(quest, player) {
      if (quest instanceof Quest && player.quests.includes(quest) && !quest.isStarted) {
        quest.setStarted();
        player.quests.push(quest);
        console.log(`${player.name} has started the quest: ${quest.name}`);
      }
    if (quest instanceof Quest && player.quests.includes(quest) && !quest.isStarted) {
      quest.startQuest();
      console.log(`${player.name} has started the quest: ${quest.name}`);
    }
  }

  /**
   * Sells an item to the player if they have enough coins.
   *
   * @param {Item} item - The item to be sold.
   * @param {Player} player - The player to whom the item is being sold.
   * @returns {void}
   */
  sellItem(item, player) {
    if (player.coins >= item.cost) {
      player.coins -= item.cost;
      player.inventory.push(item);
      console.log(`${player.name} has purchased ${item.name} for ${item.cost} coins.`);
    } else {
      console.log(`${player.name} does not have enough coins to purchase ${item.name}.`);
    }
  }
}