import { Monster } from './components/monster.js';
import { types } from './components/monster.js';
import { Quest } from './quest.js';
import { Inventory } from './components/inventory.js';
import * as Store from './components/store.js';
import { loadHomeScreen } from './screens/home.js';
import { loadBreedingScreen } from './screens/breeding.js';
import { loadBattlingScreen } from './screens/battling.js';
import { loadStoreScreen } from './screens/store.js';
import { loadInventoryScreen } from './screens/inventory.js';
import * as procedural from './utils/procedural.js';
import * as wallet from './utils/wallet.js';
import * as gamedata from './utils/gamedata.js';

// Generate monster
const monster = new Monster("Dragon", 300, 50, 30, ["Fire"]);

// Pass to active screen
currentScreen.addMonster(Monster);



// Sample monsters
let monster1 = new Monster("Goblin", 100, 20);
let monster2 = new Monster("Troll", 200, 40);

let monsters = [monster1, monster2];

// Current screen
let currentScreen = "home";

// Load screen
function showScreen(screenName) {
  currentScreen = screenName;
  loadScreen(screenName);  
}

// Screen loading
function loadScreen(screen) {

  let screenElement = document.getElementById("screen");
  
  // Clear current contents
  screenElement.innerHTML = "";

  switch(screen) {
    case "home":
      // TODO
      break;
    case "breed":
      // TODO  
      break;
  }

}

// Initial load
showScreen("home");
