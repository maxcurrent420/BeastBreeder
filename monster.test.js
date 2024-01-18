// monster.test.js

import Monster from './monster';

describe('Monster', () => {
  let monster;

  beforeEach(() => {
    monster = new Monster('Test Monster', 100, 10, 5, ['Fire']);
  });

  describe('startQuest', () => {
    it('should start a quest if the monster is not already on a quest', () => {
      const quest = { name: 'Test Quest', requiredProgress: 10 };
      monster.startQuest(quest);
      expect(monster.currentQuest).toBe(quest);
      expect(monster.questStatus).toBe('InProgress');
      expect(monster.questProgress).toBe(0);
    });

    it('should not start a quest if the monster is already on a quest', () => {
      const quest1 = { name: 'Quest 1', requiredProgress: 10 };
      const quest2 = { name: 'Quest 2', requiredProgress: 20 };
      monster.startQuest(quest1);
      monster.startQuest(quest2);
      expect(monster.currentQuest).toBe(quest1);
      expect(monster.questStatus).toBe('InProgress');
      expect(monster.questProgress).toBe(0);
    });
  });

  describe('updateQuestProgress', () => {
    it('should update the quest progress if the monster is on a quest', () => {
      const quest = { name: 'Test Quest', requiredProgress: 10 };
      monster.startQuest(quest);
      monster.updateQuestProgress(5);
      expect(monster.questProgress).toBe(5);
    });

    it('should complete the quest if the quest progress reaches the required progress', () => {
      const quest = { name: 'Test Quest', requiredProgress: 10 };
      monster.startQuest(quest);
      monster.updateQuestProgress(10);
      expect(monster.questStatus).toBe('Completed');
    });

    it('should not update the quest progress if the monster is not on a quest', () => {
      monster.updateQuestProgress(5);
      expect(monster.questProgress).toBe(0);
    });
  });

  describe('completeQuest', () => {
    it('should complete the quest if the monster is on a quest', () => {
      const quest = { name: 'Test Quest', requiredProgress: 10 };
      monster.startQuest(quest);
      monster.updateQuestProgress(10);
      monster.completeQuest();
      expect(monster.questStatus).toBe('Completed');
    });

    it('should not complete the quest if the monster is not on a quest', () => {
      monster.completeQuest();
      expect(monster.questStatus).toBe('None');
    });
  });
});
