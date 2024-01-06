/**
 * Represents an NPC (Non-Player Character) in the game.
 * @class
 */
class NPC {
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
```

## components/quest.js

### class Quest

```javascript
/**
 * Represents a quest in the game.
 * @class
 */
class Quest {
  /**
   * Creates a new Quest instance.
   * @constructor
   * @param {string} name - The name of the quest.
   * @param {string} difficulty - The difficulty of the quest.
   * @param {string[]} rewards - The rewards of the quest.
   */
  constructor(name, difficulty, rewards) {
    this.name = name;
    this.difficulty = difficulty;
    this.rewards = rewards;
  }

  /**
   * Starts the quest.
   */
  startQuest() {
    // Perform necessary actions to start the quest
    // ...
  }

  /**
   * Completes the quest.
   */
  completeQuest() {
    // Perform necessary actions to complete the quest
    // ...
  }
}
```

## inventory.js

### class Inventory

```javascript
/**
 * Represents the player's inventory.
 * @class
 */
class Inventory {
  /**
   * Creates a new Inventory instance.
   * @constructor
   */
  constructor() {
    this.items = [];
  }

  /**
   * Adds an item to the inventory.
   * @param {Item} item - The item to add.
   */
  addItem(item) {
    this.items.push(item);
  }

  /**
   * Uses an item from the inventory.
   * @param {Item} item - The item to use.
   */
  useItem(item) {
    const index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }
}

/**
 * Represents an item in the game.
 * @class
 */
class Item {
  /**
   * Creates a new Item instance.
   * @constructor
   * @param {string} name - The name of the item.
   * @param {string} type - The type of the item.
   */
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
}
