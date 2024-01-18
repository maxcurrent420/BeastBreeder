// screens/battling.test.js

import Battle from './battling';

describe('Battle', () => {
  let battle;
  let playerInventoryMock;
  let questSystemMock;

  beforeEach(() => {
    playerInventoryMock = {
      useItem: jest.fn(),
      items: ['Item 1', 'Item 2']
    };

    questSystemMock = {
      updateProgress: jest.fn()
    };

    battle = new Battle(playerInventoryMock, questSystemMock);
  });

  describe('fight', () => {
    it('should use the specified item from the player inventory', () => {
      const item = 'Item 1';
      battle.fight('monster', item);
      expect(playerInventoryMock.useItem).toHaveBeenCalledWith(item);
    });

    it('should throw an error if the item is not in the player inventory', () => {
      const item = 'Item 3';
      expect(() => battle.fight('monster', item)).toThrow('Item not in inventory');
    });

    it('should update quest progress after the fight', () => {
      const item = 'Item 2';
      battle.fight('monster', item);
      expect(questSystemMock.updateProgress).toHaveBeenCalledWith('monster', 'monster');
    });

    // Add more tests for other scenarios and edge cases

  });
});
