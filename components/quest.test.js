// components/quest.test.js

import { Quest } from './quest';

describe('Quest', () => {
  let quest;

  beforeEach(() => {
    quest = new Quest('Test Quest', 'Easy', ['Gold'], [
      { name: 'Task 1', completed: false },
      { name: 'Task 2', completed: false },
      { name: 'Task 3', completed: false },
    ]);
  });

  describe('startQuest', () => {
    it('should initialize progress and completion status', () => {
      quest.startQuest();
      expect(quest.progress).toBe(0);
      expect(quest.completed).toBe(false);
    });
  });

  describe('updateProgress', () => {
    it('should update task completion and call checkCompletion', () => {
      quest.updateProgress(0);
      expect(quest.tasks[0].completed).toBe(true);
      // Add more tests for different task indices and edge cases
    });

    it('should log an error for invalid task index', () => {
      const consoleErrorSpy = jest.spyOn(console, 'error');
      quest.updateProgress(-1);
      expect(consoleErrorSpy).toHaveBeenCalledWith('Invalid task index: -1');
      // Add more tests for other invalid task indices
      consoleErrorSpy.mockRestore();
    });
  });

  describe('completeQuest', () => {
    it('should complete the quest and claim rewards', () => {
      // Set all tasks as completed
      quest.tasks.forEach(task => task.completed = true);
      const consoleLogSpy = jest.spyOn(console, 'log');
      quest.completeQuest();
      expect(quest.completed).toBe(true);
      expect(consoleLogSpy).toHaveBeenCalledWith('Completing the quest: Test Quest');
      expect(consoleLogSpy).toHaveBeenCalledWith('Claiming rewards: ', ['Gold']);
      // Add more tests for other scenarios, such as when the quest is not completed
      consoleLogSpy.mockRestore();
    });

    it('should log a message when the quest is not completed', () => {
      const consoleLogSpy = jest.spyOn(console, 'log');
      quest.completeQuest();
      expect(consoleLogSpy).toHaveBeenCalledWith('Quest is not yet completed.');
      // Add more tests for other scenarios, such as when the quest is already completed
      consoleLogSpy.mockRestore();
    });
  });
});
