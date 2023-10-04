// Inventory class
class Inventory {

  constructor() {
    this.items = [];
  }

  // Add item to inventory
  addItem(item) {
    this.items.push(item);
  }

  // Use item from inventory
  useItem(item) {
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