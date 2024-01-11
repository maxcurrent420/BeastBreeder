// components/inventory.js
class Inventory {
  constructor() {
    this.maxItems = 500;
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

class Item {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
}

export { Inventory, Item };
