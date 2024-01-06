import { Inventory, Item } from '../inventory.js';

class Store {
  constructor() {
    this.inventory = new Inventory();
  }

  buyItem(name, type) {
    const item = new Item(name, type);
    this.inventory.addItem(item);
  }
}

export default Store;
