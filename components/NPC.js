import { Quest } from './quest.js';

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
