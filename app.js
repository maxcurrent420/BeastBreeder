import * as monsters from './utils/procedural.js';

// Generate monster
const Monster = monsters.generateMonster();  

// Pass to active screen
currentScreen.addMonster(Monster);

// Monster object
class Monster {
  constructor(name, health, attack) {
    this.name = name;
    this.health = health;
    this.attack = attack;
  }
}

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