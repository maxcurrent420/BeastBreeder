// monster.test.js

import Monster, { types } from './monster';

describe('Monster', () => {
  let monster;

  beforeEach(() => {
    monster = new Monster('Test Monster', 100, 10, 5, types.PLANT);
  });

  describe('startQuest', () => {
    it('should start a quest and set the quest status and progress', () => {
      const testQuest = { name: 'Test Quest', requiredProgress: 10 };
      monster.startQuest(testQuest);
      expect(monster.questStatus).toBe('InProgress');
      expect(monster.questProgress).toBe(0);
    });
  });

  describe('updateQuestProgress', () => {
    it('should update the quest progress and complete the quest if progress is sufficient', () => {
      const testQuest = { name: 'Test Quest', requiredProgress: 10 };
      monster.startQuest(testQuest);
      monster.updateQuestProgress(5);
      expect(monster.questProgress).toBe(5);
      monster.updateQuestProgress(10);
      expect(monster.questProgress).toBe(15);
      expect(monster.questStatus).toBe('Completed');
    });
  });

  describe('completeQuest', () => {
    it('should complete the quest if it is in progress', () => {
      const testQuest = { name: 'Test Quest', requiredProgress: 10 };
      monster.startQuest(testQuest);
      monster.completeQuest();
      expect(monster.questStatus).toBe('Completed');
    });
  });
});
