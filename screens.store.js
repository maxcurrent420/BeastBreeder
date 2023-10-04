// Import inventory system
import { getGold } from '../components/inventory.js';

// Get current gold amount
let gold = getGold();

// Display gold text
const goldText = document.getElementById('gold');
goldText.textContent = gold + ' gold';

// Buy item
function buyItem(item) {

  // Check if enough gold
  if (gold < item.cost) {
    alert("Not enough gold!");
    return; 
  }

  // Remove gold
  gold -= item.cost;
  
  // Update gold text
  goldText.textContent = gold + ' gold'; 

  // Add item to inventory
  addItem(item);

}

// Connect to existing gold amount
function connectStore() {
  gold = getGold();
  goldText.textContent = gold + ' gold'; 
}