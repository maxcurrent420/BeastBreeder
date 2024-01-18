// components/quest.js

/**
   * @file
   * This file contains the definition of the Quest class.
   * It provides functionality related to quests in the game.
   */

export class Quest {
  
   /**
   * Constructor for the Quest class.
   *
   * @param {string} name - The name of the quest.
   * @param {string} difficulty - The difficulty level of the quest.
   * @param {string} description - The description of the quest.
   * @param {Array<string>} rewards - The rewards for completing the quest.
   * @param {Task[]} tasks - The tasks required to complete the quest.
   * @returns {void}
   */
  
  
  
  startQuest() {
    /**
   * Starts the quest and resets the progress.
   */
  
  
  
  

  updateProgress(taskIndex) {
    /**
   * Updates the progress of the quest based on a completed task.
   *
   * @param {number} taskIndex - The index of the completed task.
   * @returns {void}
   */
  
   }

  
  
  checkCompletion() {
    /**
   * Checks if all the tasks of the quest are completed.
   *
   * @returns {void}
   */
  
  
  
   completeQuest() {
     /**
   * Completes the quest if all the tasks are done.
   */
  

  
  setDescription(description) {
    /**
   * Sets the description of the quest.
   *
   * @param {string} description - The new description of the quest.
   * @returns {void}
   */
  
  
  
  
  
  setStarted() {
    /**
   * Marks the quest as started.
   */
  
  
  
  
  
  
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