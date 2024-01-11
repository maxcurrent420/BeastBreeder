import SkillTree from './components/skillTree.js';
import Monster from './monster.js';

// src/Inventory.js

class Inventory {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    if (!this.isFull()) {
      this.items.push(item);
    }
  }

  removeItem(item) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  getItems() {
    return this.items;
  }

  getWeight() {
    let totalWeight = 0;
    this.items.forEach(item => {
      totalWeight += item.weight;
    });
    return totalWeight;
  }

  isFull() {
    return this.items.length >= 500;
  }

  hasItem(item) {
    return this.items.includes(item);
  }
}

export default Inventory;
