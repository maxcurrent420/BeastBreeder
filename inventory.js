// Inventory class
class Inventory {
  maxItems = 500;

  constructor() {
    this.items = [];
    maxItems = 500;
  }

  // Add item to inventory
  addItem(item) {
    if (this.items.length < this.maxItems) {
      this.items.push(item);
    } else {
      console.log('Inventory is full');
    }
    this.items.push(item);
  }

  // Use item from inventory
  useItem(item) {
    const index = this.items.indexOf(item);
    if(index > -1) {
      this.items.splice(index, 1);
    }
    const index = this.items.indexOf(item);
    if(index > -1) {
      this.items.splice(index, 1);
    }
  }

}

// Item class
class Item {

  constructor(name, type) {
    this.name = name;
    this.type = type; 
  }

}

// Export classes
export {
  Inventory,
  Item
}