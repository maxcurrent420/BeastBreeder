// components/quest.js

export class Quest {
  constructor(name, difficulty, description, rewards, tasks = []) {
    this.name = name;
    this.difficulty = difficulty;
    this.rewards = rewards;
    this.tasks = tasks;
    this.progress = 0; // Initialize progress
    this.completed = false; // Initialize completion status
  }

  startQuest() {
    // Set initial progress and mark the quest as started
    this.progress = 0;
    this.completed = false;
    console.log('Starting the quest: ' + this.name);
    console.log('Tasks to complete: ', this.tasks);
  }

  updateProgress(taskIndex) {
    // Update the progress of the quest based on a completed task
    if (taskIndex >= 0 && taskIndex < this.tasks.length) {
      this.tasks[taskIndex].completed = true;
      this.checkCompletion(); // Check if all tasks are completed
    } else {
      console.error('Invalid task index: ' + taskIndex);
    }
  }

  checkCompletion() {
    // Check if all tasks are completed
    this.completed = this.tasks.every(task => task.completed);
    if (this.completed) {
      console.log('Quest completed: ' + this.name);
    }
  }

  completeQuest() {
    // Complete the quest if all tasks are done
    if (this.completed) {
  setDescription(description) {
    this.description = description;
  }
  isStarted = false;
  setStarted() {
    this.isStarted = true;
  }
      console.log('Completing the quest: ' + this.name);
      console.log('Claiming rewards: ', this.rewards);
      // Here you would typically add code to give the rewards to the player
    } else {
      console.log('Quest is not yet completed.');
    }
  }
}