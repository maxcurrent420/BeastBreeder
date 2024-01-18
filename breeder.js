// Import Monster class
import Monster from './monster.js'; 

// Breed cooldown timer
let lastBreedTime = 0;
const breedCooldown = 30; // seconds 

// Function to inherit traits
function inheritTraits(monster1, monster2) {
  // Combine both parents' traits and filter out duplicates
  let combinedTraits = [...new Set([...monster1.traits, ...monster2.traits])];
  // Inherit traits with quest-related logic (to be implemented)
  // Placeholder for quest-related traits logic
  return combinedTraits;
}

// Function to inherit abilities
function inheritAbilities(monster1, monster2) {
  // Combine both parents' abilities and filter out duplicates
  let combinedAbilities = [...new Set([...monster1.abilities, ...monster2.abilities])];
  // Inherit abilities with quest-related logic (to be implemented)
  // Placeholder for quest-related abilities logic
  return combinedAbilities;
}

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

  // Inherit traits and abilities
  let inheritedTraits = inheritTraits(monster1, monster2);
  let inheritedAbilities = inheritAbilities(monster1, monster2);

  // Create child monster
  let child = new Monster(
    generateName(monster1, monster2),
    (monster1.health + monster2.health) / 2 + healthMutation,
    (monster1.attack + monster2.attack) / 2 + attackMutation,
    [type1, type2], // inherit types
    inheritedTraits,
    inheritedAbilities
  );

  // Set cooldown
  lastBreedTime = now;

  // Return child
  return child;

}

// Other functions...