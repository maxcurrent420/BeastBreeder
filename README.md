# BeastBreeder

BeastBreeder is a monster breeding game centered around breeding insectoids. It is hosted on IPFS, and gives users one free basic monster to start with as well as 1000 coins that can be used to buy other monsters and items to aid in training them etc. To login, users sign in using their Polygon wallet. This can also be used to buy coins and monster NFTs which have unique traits and advantages. The game features the following functionality:
- Breeding system for creating new monsters with unique traits
- Basic battling system for engaging in battles with other monsters
- Advanced Breeding Mechanics
- Skill Trees and Monster Specializations
- Store UI and logic for buying items and monsters
- Inventory screen for managing collected items
- Procedural generation for generating quests
- Saving and loading game data

## File Structure

- `index.html`: Main app page
- `style.css`: Stylesheet for app
- `app.js`: Main JS logic
- `assets/`: Folder for images, audio etc
  - `sprites/`
  - `backgrounds/`
  - `sfx/`
- `components/`: Reusable JS components
  - `monster.js`: Monster data and methods
  - `skill_trees.js`: Skill Trees and Monster Specializations
  - `quest.js`: Quest data structure
  - `inventory.js`: Inventory data structure
  - `store.js`: Store UI and logic
- `screens/`: JS for each screen
  - `home.js`: Home page and monster list
  - `breeding.js`: Breeding system
  - `battling.js`: Basic battling system
- `breeding.js`: Advanced Breeding Mechanics

- `utils/`: Helper classes and functions
  - `procedural.js`: For procedural generation
  - `wallet.js`: Blockchain utils 
  - `gamedata.js`: Wrapper for saving/loading data

## To-Do List

[Project Roadmap](ROADMAP.md)

- [x] `index.html`: Base HTML page
- [x] `style.css`: Minimal styling
- [x] `app.js`: Instantiate core game objects, starting logic
- [x] `components/monster.js`: Monster data and methods
- [x] `screens/home.js`: Home page and monster list
- [ ] `components/inventory.js`: Inventory data structure
- [ ] `components/quest.js`: Quest data structure
- [ ] `screens/breeding.js`: Breeding system
- [ ] `screens/battling.js`: Basic battling system
- [ ] `components/store.js`: Store UI and logic
- [ ] `utils/gamedata.js`: Save/load game data
- [ ] `utils/procedural.js`: Generate quests
- [ ] `index.html`: Connect all screens
- [ ] `style.css`: Remaining styling
- [ ] `app.js`: Additional game logic
