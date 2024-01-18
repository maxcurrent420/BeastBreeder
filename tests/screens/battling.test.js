// tests/screens/battling.test.js

import Battle from '../screens/battling.js';

describe('Battle', () => {
  let playerInventory;
  let questSystem;
  let battle;

  beforeEach(() => {
    playerInventory = {
      useItem: jest.fn(),
      items: ['item1', 'item2'],
    };

    questSystem = {
      updateProgress: jest.fn(),
    };

    battle = new Battle(playerInventory, questSystem);
  });

  describe('fight', () => {
    it('should use the item from the player inventory and update quest progress', () => {
      const monster = 'Monster1';
      const item = 'item1';

      battle.fight(monster, item);

      expect(playerInventory.useItem).toHaveBeenCalledWith(item);
      expect(questSystem.updateProgress).toHaveBeenCalledWith('monster', monster);
    });

    it('should throw an error if the item is not in the player inventory', () => {
      const monster = 'Monster1';
      const item = 'item3';

      expect(() => {
        battle.fight(monster, item);
      }).toThrow('Item not in inventory');
    });
  });
});
