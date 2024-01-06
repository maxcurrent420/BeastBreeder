// Sample items
const sword = {name: 'Sword', type: 'Weapon', cost: 100};
const shield = {name: 'Shield', type: 'Armor', cost: 150};

let storeInventory = [sword, shield];

// Display store
export function displayStore() {

  // Reference DOM elements
  const storeContainer = document.getElementById('store');
  const itemList = document.getElementById('store-items');

  // Clear existing items
  itemList.innerHTML = '';

  // Display each item
  storeInventory.forEach(item => {
    
    const itemEl = document.createElement('div');
    itemEl.classList.add('store-item');

    const nameEl = document.createElement('div');
    nameEl.textContent = item.name;

    const costEl = document.createElement('div');
    costEl.textContent = item.cost + ' gold';

    itemEl.appendChild(nameEl);
    itemEl.appendChild(costEl);

    itemList.appendChild(itemEl);

  });

}

// Buy item
export function buyItem(item) {
  // TODO deduct gold, add to inventory
}
