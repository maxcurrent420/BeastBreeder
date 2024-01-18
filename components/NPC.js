import { Quest } from './quest.js';

export class NPC {
  constructor(name, role, dialogue) {
    this.name = name;
    this.role = role;
    this.dialogue = dialogue;
    this.quests = [];
  }

  assignQuest(quest) {
    this.quests.push(quest);
  }

  offerQuests(player) {
    for (const quest of this.quests) {
      if (!player.quests.includes(quest)) {
        console.log(`${this.name} offers a quest: ${quest.name} - ${quest.description}`);
        player.quests.push(quest);
      }
    }
  }

  startQuest(quest, player) {
    if (quest instanceof Quest && player.quests.includes(quest) && !quest.isStarted) {
      quest.setStarted();
      player.quests.push(quest);
      console.log(`${player.name} has started the quest: ${quest.name}`);
    }
    if (quest instanceof Quest && player.quests.includes(quest) && !quest.isStarted) {
      quest.setStarted();
      player.quests.push(quest);
      console.log(`${player.name} has started the quest: ${quest.name}`);
    }
  }

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