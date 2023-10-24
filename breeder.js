// Import Monster class
import Monster from './monster.js'; 

// Breed cooldown timer
let lastBreedTime = 0;
const breedCooldown = 30; // seconds 

// Breed monsters
export function breedMonsters(monster1, monster2) {

  // Enforce cooldown
  const now = new Date().getTime();
  if (now - lastBreedTime < breedCooldown*1000) {
    console.log('Breeding too fast! Please wait.');
    return;
  }

  // Inherit primary type from parent 1
  let type1 = monster1.types[0];

  // Secondary type from parent 2 
  let type2 = monster2.types[Math.floor(Math.random() * monster2.types.length)];
  
  // Generate random mutations
  let healthMutation = Math.floor(Math.random() * 20) - 10; 
  let attackMutation = Math.floor(Math.random() * 20) - 10;

  // Create child monster
  let child = new Monster(
    generateName(monster1, monster2),
    (monster1.health + monster2.health) / 2 + healthMutation,
    (monster1.attack + monster2.attack) / 2 + attackMutation,
    [type1, type2] // inherit types
  );

  // Set cooldown
  lastBreedTime = now;

  // Return child
  return child;

}

// Other functions...
