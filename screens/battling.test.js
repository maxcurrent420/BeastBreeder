// screens/battling.test.js

import Battle from './screens/battling'; // Import the Battle class from screens/battling.js

describe('Battle', () => {
  let battle;
  let playerInventoryMock;
  let questSystemMock;

  beforeEach(() => {
    playerInventoryMock = {
      useItem: jest.fn(),
      items: ['Item 1', 'Item 2'],
    };

    questSystemMock = {
      updateProgress: jest.fn(),
    };

    battle = new Battle(playerInventoryMock, questSystemMock);
  });

  describe('fight', () => {
    it('should use the item from the player inventory', () => {
      const monster = 'Monster';
      const item = 'Item 1';

      battle.fight(monster, item);

      expect(playerInventoryMock.useItem).toHaveBeenCalledWith(item);
    });

    it('should throw an error if the item is not in the player inventory', () => {
      const monster = 'Monster';
      const item = 'Item 3';

      expect(() => battle.fight(monster, item)).toThrow('Item not in inventory');
    });

    it('should update the quest progress after the fight', () => {
      const monster = 'Monster';
      const item = 'Item 1';

      battle.fight(monster, item);

      expect(questSystemMock.updateProgress).toHaveBeenCalledWith('monster', monster);
    });
  });
});
