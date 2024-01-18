// components/quest.test.js

import { Quest } from './quest';

describe('Quest', () => {
  let quest;

  beforeEach(() => {
    quest = new Quest('Test Quest', 'Easy', ['Gold'], [
      { name: 'Task 1', completed: false },
      { name: 'Task 2', completed: false },
    ]);
  });

  describe('startQuest', () => {
    it('should set initial progress and mark the quest as started', () => {
      quest.startQuest();
      expect(quest.progress).toBe(0);
      expect(quest.completed).toBe(false);
    });
  });

  describe('updateProgress', () => {
    it('should update the progress of the quest based on a completed task', () => {
      quest.updateProgress(0);
      expect(quest.tasks[0].completed).toBe(true);
      expect(quest.completed).toBe(false);
    });

    it('should handle an invalid task index', () => {
      console.error = jest.fn();
      quest.updateProgress(2);
      expect(console.error).toHaveBeenCalledWith('Invalid task index: 2');
    });
  });

  describe('checkCompletion', () => {
    it('should check if all tasks are completed', () => {
      quest.updateProgress(0);
      quest.updateProgress(1);
      quest.checkCompletion();
      expect(quest.completed).toBe(true);
    });
  });

  describe('completeQuest', () => {
    it('should complete the quest if all tasks are done', () => {
      quest.updateProgress(0);
      quest.updateProgress(1);
      quest.completeQuest();
      expect(console.log).toHaveBeenCalledWith('Completing the quest: Test Quest');
      expect(console.log).toHaveBeenCalledWith('Claiming rewards: ', ['Gold']);
    });

    it('should handle an incomplete quest', () => {
      quest.completeQuest();
      expect(console.log).toHaveBeenCalledWith('Quest is not yet completed.');
    });
  });
});
