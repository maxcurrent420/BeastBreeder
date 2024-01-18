// Import monsters from app.js
import { monsters } from './app.js'; 

// Display home screen
export default function showHome() {

  // Get reference to screen container
  const screen = document.getElementById('screen');

  // Add monster list
  const monsterList = document.createElement('ul');
  monsterList.id = 'monster-list';
  
  monsters.forEach(monster => {
    const li = document.createElement('li');
    li.textContent = monster.name;
    monsterList.appendChild(li);
  });

  screen.appendChild(monsterList);

  // Add button to switch to breeding screen 
  const breedButton = document.createElement('button');
  breedButton.textContent = 'Go to Breeding';
  breedButton.addEventListener('click', () => {
    showScreen('breed');
  });

  screen.appendChild(breedButton);

}
