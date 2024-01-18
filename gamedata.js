class Quest {
  constructor(id, name, description, objectives) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.objectives = objectives;
  }
}

class NPC {
  constructor(id, name, dialogue) {
    this.id = id;
    this.name = name;
    this.dialogue = dialogue;
  }
}

class Monster {
  constructor(id, name, level) {
    this.id = id;
    this.name = name;
    this.level = level;
  }
}

const questLog = new Map();

const questObjectives = {
  KILL: 'kill',
  GATHER: 'gather',
  ESCORT: 'escort',
  EXPLORE: 'explore'
};