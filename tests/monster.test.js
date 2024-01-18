// tests/monster.test.js

import Monster from '../monster.js';

describe('Monster', () => {
  let monster;

  beforeEach(() => {
    monster = new Monster('Goblin', 100, 10, 5, ['Fire']);
  });

  describe('startQuest', () => {
    it('should start a quest when the quest status is "None"', () => {
      const quest = { name: 'Save the Village', requiredProgress: 10 };

      monster.startQuest(quest);

      expect(monster.currentQuest).toBe(quest);
      expect(monster.questStatus).toBe('InProgress');
      expect(monster.questProgress).toBe(0);
    });

    it('should not start a quest when the quest status is not "None"', () => {
      const quest = { name: 'Save the Village', requiredProgress: 10 };
      monster.questStatus = 'InProgress';

      monster.startQuest(quest);

      expect(monster.currentQuest).toBe(null);
      expect(monster.questStatus).toBe('InProgress');
      expect(monster.questProgress).toBe(0);
    });
  });

  describe('updateQuestProgress', () => {
    it('should update the quest progress and complete the quest when the progress reaches the required progress', () => {
      const quest = { name: 'Save the Village', requiredProgress: 10 };
      monster.startQuest(quest);

      monster.updateQuestProgress(5);
      expect(monster.questProgress).toBe(5);

      monster.updateQuestProgress(5);
      expect(monster.questProgress).toBe(10);
      expect(monster.questStatus).toBe('Completed');
    });

    it('should not update the quest progress when the quest status is not "InProgress"', () => {
      const quest = { name: 'Save the Village', requiredProgress: 10 };

      monster.updateQuestProgress(5);
      expect(monster.questProgress).toBe(0);
    });
  });

  describe('completeQuest', () => {
    it('should complete the quest when the quest status is "InProgress"', () => {
      const quest = { name: 'Save the Village', requiredProgress: 10 };
      monster.startQuest(quest);

      monster.completeQuest();

      expect(monster.questStatus).toBe('Completed');
    });

    it('should not complete the quest when the quest status is not "InProgress"', () => {
      const quest = { name: 'Save the Village', requiredProgress: 10 };

      monster.completeQuest();

      expect(monster.questStatus).toBe('None');
    });
  });
});
