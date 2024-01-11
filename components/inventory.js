import { Item } from './item.js';

class Inventory {
  constructor() {
    this.items = [];
    this.maxItems = 500;
  }

  addItem(item) {
    if (this.items.length < this.maxItems) {
      this.items.push(item);
    } else {
      throw new Error('Inventory is full');
    }
  }

  useItem(item) {
    const index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }
}

export default Inventory;
