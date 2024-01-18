// tests/components/NPC.test.js

import { NPC } from '../components/NPC.js';
import { Quest } from '../components/quest.js';

describe('NPC', () => {
  let npc;
  let player;

  beforeEach(() => {
    npc = new NPC('John', 'Merchant', 'Welcome, traveler!');
    player = {
      name: 'Player1',
      quests: [],
    };
  });

  describe('createQuest', () => {
    it('should add a new quest to the NPC\'s quest list', () => {
      const questName = 'Save the Village';
      const questDescription = 'Defeat the monsters and save the village';
      const questReward = '100 coins';

      npc.createQuest(questName, questDescription, questReward);

      expect(npc.quests.length).toBe(1);
      expect(npc.quests[0]).toBeInstanceOf(Quest);
      expect(npc.quests[0].name).toBe(questName);
      expect(npc.quests[0].description).toBe(questDescription);
      expect(npc.quests[0].reward).toBe(questReward);
    });
  });

  describe('offerQuests', () => {
    it('should offer quests to the player', () => {
      const quest1 = new Quest('Save the Village', 'Defeat the monsters and save the village', '100 coins');
      const quest2 = new Quest('Retrieve the Artifact', 'Find the ancient artifact and bring it back', '200 coins');
      const quest3 = new Quest('Clear the Dungeon', 'Explore the dungeon and defeat the boss', '300 coins');

      npc.quests = [quest1, quest2, quest3];

      npc.offerQuests(player);

      expect(player.quests.length).toBe(3);
      expect(player.quests).toContain(quest1);
      expect(player.quests).toContain(quest2);
      expect(player.quests).toContain(quest3);
    });

    it('should not offer quests that the player already has', () => {
      const quest1 = new Quest('Save the Village', 'Defeat the monsters and save the village', '100 coins');
      const quest2 = new Quest('Retrieve the Artifact', 'Find the ancient artifact and bring it back', '200 coins');
      const quest3 = new Quest('Clear the Dungeon', 'Explore the dungeon and defeat the boss', '300 coins');

      npc.quests = [quest1, quest2, quest3];
      player.quests = [quest2];

      npc.offerQuests(player);

      expect(player.quests.length).toBe(3);
      expect(player.quests).toContain(quest1);
      expect(player.quests).toContain(quest2);
      expect(player.quests).toContain(quest3);
    });
  });
});
