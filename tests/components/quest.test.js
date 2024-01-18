// tests/components/quest.test.js

import { Quest } from '../components/quest.js';

describe('Quest', () => {
  let quest;

  beforeEach(() => {
    quest = new Quest('Save the Village', 'Easy', '100 coins', [
      { name: 'Defeat the monsters', completed: false },
      { name: 'Rescue the villagers', completed: false },
    ]);
  });

  describe('updateProgress', () => {
    it('should update the progress of the quest when a valid task index is provided', () => {
      const taskIndex = 0;

      quest.updateProgress(taskIndex);

      expect(quest.tasks[taskIndex].completed).toBe(true);
    });

    it('should log an error when an invalid task index is provided', () => {
      const taskIndex = -1;
      const consoleErrorSpy = jest.spyOn(console, 'error');

      quest.updateProgress(taskIndex);

      expect(consoleErrorSpy).toHaveBeenCalledWith('Invalid task index: ' + taskIndex);
    });
  });

  describe('checkCompletion', () => {
    it('should mark the quest as completed when all tasks are completed', () => {
      quest.tasks.forEach(task => {
        task.completed = true;
      });

      quest.checkCompletion();

      expect(quest.completed).toBe(true);
    });

    it('should not mark the quest as completed when not all tasks are completed', () => {
      quest.tasks[0].completed = true;

      quest.checkCompletion();

      expect(quest.completed).toBe(false);
    });
  });
});
