
export function generateMonster() {
  // function code
}

// Generate random monster
export function generateMonster() {

  const names = ['Goblin', 'Troll', 'Orc'];

  const types = ['Fire', 'Water', 'Ground'];

  const monster = {
    name: randomName(names),
    type: randomType(types), 
    health: randomBetween(80, 120),
    attack: randomBetween(10, 20)
  };

  return monster;

}

// Generate random item 
export function generateItem() {

  const item = {
    name: randomName(items),
    type: randomType(types),
    value: randomBetween(5, 50)
  };

  return item;

}

// Helper functions
function randomName(nameList) {
  return nameList[Math.floor(Math.random() * nameList.length)];
}

function randomType(typeList) {
  return typeList[Math.floor(Math.random() * typeList.length)];
}

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
