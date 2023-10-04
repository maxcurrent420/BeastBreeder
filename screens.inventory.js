// Import inventory component
import { Inventory } from '../components/inventory.js';

// Player's inventory
const inventory = new Inventory();

// Add sample items
inventory.addItem({name: 'Potion', type: 'Consumable'});
inventory.addItem({name: 'Iron Sword', type: 'Weapon'});

// Show inventory screen
export default function showInventory() {

  // Get reference to page container
  const container = document.querySelector('#screen');

  // Clear previous contents
  container.innerHTML = '';

  // Display each item
  const itemList = document.createElement('ul');
  itemList.id = 'inventory';

  inventory.items.forEach(item => {
    const itemElement = document.createElement('li');
    itemElement.textContent = item.name;
    itemList.appendChild(itemElement); 
  });

  container.appendChild(itemList);

}
