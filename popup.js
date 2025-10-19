// Story data structure with branching paths
const story = {
  start: {
    text: "It's Halloween night, and you're walking through the fog-covered streets when you spot an old, decrepit mansion on the hill. Its windows are dark, and the front door creaks in the wind. Something draws you toward it... You decide to go in. How will you enter?",
    choices: [
      { text: "Go in through the front door", next: "frontDoor" },
      { text: "Climb through the broken window", next: "brokenWindow" },
      { text: "Sneak in through the plumbing system", next: "plumbing" }
    ]
  },

  frontDoor: {
    text: "You push open the heavy front door. It groans loudly, echoing through the empty halls. Inside, you see a grand staircase leading up and a flickering light coming from the basement. You also notice a dusty library to your left.",
    choices: [
      { text: "Go up the grand staircase", next: "staircase" },
      { text: "Follow the light to the basement", next: "basement" },
      { text: "Enter the dusty library", next: "library" }
    ]
  },

  brokenWindow: {
    text: "You carefully climb through the broken window, cutting your hand slightly on the glass. You find yourself in what appears to be a child's bedroom, frozen in time. Toys are scattered everywhere, and you hear a music box playing softly. There's a closet door slightly ajar and a door leading to a hallway.",
    choices: [
      { text: "Investigate the music box", next: "musicBox" },
      { text: "Open the closet door", next: "closet" },
      { text: "Exit to the hallway", next: "hallway" }
    ]
  },

  plumbing: {
    text: "You squeeze through the narrow pipes, getting covered in grime and cobwebs. Eventually, you emerge in a dark cellar filled with ancient machinery and strange symbols on the walls. You hear whispers coming from deeper in the cellar, and you notice a hidden passage behind a bookshelf.",
    choices: [
      { text: "Follow the whispers deeper into the cellar", next: "whispers" },
      { text: "Investigate the hidden passage", next: "hiddenPassage" },
      { text: "Examine the strange symbols", next: "symbols" }
    ]
  },

  staircase: {
    text: "You climb the creaking stairs carefully. At the top, you find a portrait of a beautiful woman who seems to be watching you. Suddenly, you hear footsteps behind you. You turn around but see nothing. There's a master bedroom ahead and an attic ladder.",
    choices: [
      { text: "Enter the master bedroom", next: "masterBedroom" },
      { text: "Climb to the attic", next: "attic" },
      { text: "Run back downstairs", next: "runDownstairs" }
    ]
  },

  basement: {
    text: "You descend into the basement. The light you saw was just a single candle, but it's enough to reveal an old workshop. Among the tools, you find a diary. As you start reading, you hear the door at the top of the stairs slam shut!",
    choices: [
      { text: "Read the diary to find clues", next: "diary" },
      { text: "Try to break down the door", next: "breakDoor" },
      { text: "Search for another exit", next: "searchExit" }
    ]
  },

  library: {
    text: "The library is filled with ancient books and dusty furniture. You notice a book glowing faintly on a pedestal. As you approach it, you realize it's a spell book. There's also a secret door behind one of the bookshelves.",
    choices: [
      { text: "Read the glowing spell book", next: "spellBook" },
      { text: "Go through the secret door", next: "secretDoor" },
      { text: "Leave the library immediately", next: "leaveLibrary" }
    ]
  },

  musicBox: {
    text: "You wind up the music box and a haunting melody fills the room. Suddenly, you see the ghost of a little girl appear. She looks sad but not threatening. She points toward the window and then fades away, leaving behind a small golden key.",
    choices: [
      { text: "Take the golden key and explore more", next: "goldenKey" },
      { text: "Jump out the window to escape", next: "escapeWindow" }
    ]
  },

  closet: {
    text: "You open the closet door and are immediately grabbed by skeletal hands! You struggle and manage to break free, but you realize these are the remains of previous visitors. You need to get out now!",
    choices: [
      { text: "Fight your way through", next: "fightSkeleton" },
      { text: "Run to the hallway", next: "hallway" }
    ]
  },

  hallway: {
    text: "The hallway is long and lined with portraits. As you walk, their eyes seem to follow you. At the end, you find a locked door with a keyhole shaped like... a golden key. There's also a window you could break through.",
    choices: [
      { text: "Try to pick the lock", next: "pickLock" },
      { text: "Break through the window", next: "breakWindow" },
      { text: "Go back to search for a key", next: "searchKey" }
    ]
  },

  whispers: {
    text: "Following the whispers, you discover they're coming from trapped spirits. They tell you about a curse on the house and how to break it. They say you need to find the original owner's locket in the attic and bury it outside.",
    choices: [
      { text: "Trust the spirits and go to the attic", next: "trustSpirits" },
      { text: "Ignore them and leave immediately", next: "ignoreSpirits" }
    ]
  },

  hiddenPassage: {
    text: "The hidden passage leads you through a network of tunnels. You eventually emerge outside, behind the mansion. You're free! But you hear screaming from inside the house...",
    choices: [
      { text: "Go back to help whoever is inside", next: "goBackHelp" },
      { text: "Run away to safety", next: "endingCoward" }
    ]
  },

  symbols: {
    text: "As you touch the symbols, they begin to glow. Ancient magic fills the room, and you realize you've accidentally activated a protective spell. The evil presence in the house starts to dissipate!",
    choices: [
      { text: "Complete the ritual", next: "endingHeroMagic" }
    ]
  },

  masterBedroom: {
    text: "The master bedroom is frozen in time. On the bed lies a skeleton in a wedding dress, clutching a locket. The moment you enter, the door slams behind you and locks itself!",
    choices: [
      { text: "Take the locket from the skeleton", next: "takeLocket" },
      { text: "Try to break the window", next: "breakBedroomWindow" }
    ]
  },

  attic: {
    text: "The attic is filled with old furniture and boxes. In the corner, you find the same locket the spirits mentioned! But as you grab it, a dark figure materializes and lunges at you!",
    choices: [
      { text: "Dodge and run with the locket", next: "dodgeAndRun" },
      { text: "Stand your ground and fight", next: "fightDarkFigure" }
    ]
  },

  runDownstairs: {
    text: "Panic overtakes you and you rush downstairs, but you trip and tumble down the stairs. Everything goes black...",
    choices: [
      { text: "Wake up...", next: "endingInjured" }
    ]
  },

  diary: {
    text: "The diary reveals that the house belonged to a bride who was left at the altar and cursed the mansion in her grief. To break the curse, you must reunite her locket with her portrait. You hear the spirits guiding you upstairs.",
    choices: [
      { text: "Follow the spirits' guidance", next: "followSpiritsGuide" }
    ]
  },

  breakDoor: {
    text: "You slam against the door repeatedly, but it won't budge. Your shoulder is now badly hurt, and you hear something approaching from the darkness of the basement...",
    choices: [
      { text: "Hide among the tools", next: "hideTools" },
      { text: "Search frantically for a weapon", next: "findWeapon" }
    ]
  },

  searchExit: {
    text: "You find a small ventilation shaft that leads outside! You squeeze through and emerge in the backyard, dirty but free!",
    choices: [
      { text: "Run away and never look back", next: "endingEscape" }
    ]
  },

  spellBook: {
    text: "You read the spell book and learn an ancient banishment spell. With newfound courage, you recite the words. The house begins to shake as the evil is purged!",
    choices: [
      { text: "Complete the spell", next: "endingSpellcaster" }
    ]
  },

  secretDoor: {
    text: "The secret door leads to a treasure room filled with gold and jewels! But the moment you step inside, the floor gives way and you fall into a pit of spikes...",
    choices: [
      { text: "Try to grab the edge", next: "endingGreed" }
    ]
  },

  leaveLibrary: {
    text: "You decide this is too dangerous and try to leave, but the house won't let you go that easily. Doors appear where there were walls, and walls appear where there were doors. You're trapped in an endless maze...",
    choices: [
      { text: "Wander forever...", next: "endingLost" }
    ]
  },

  goldenKey: {
    text: "With the golden key, you search the house and find a locked chest in the basement. Inside is the bride's locket! You take it to her portrait and place it there. The spirits thank you as they are finally freed!",
    choices: [
      { text: "Leave the peaceful house", next: "endingPeacemaker" }
    ]
  },

  escapeWindow: {
    text: "You jump out the window in a panic, but you're on the second floor. You land badly and injure your leg, but you manage to limp away from the cursed house.",
    choices: [
      { text: "Limp to safety", next: "endingInjuredEscape" }
    ]
  },

  fightSkeleton: {
    text: "You fight bravely, but there are too many skeletal hands. They drag you into the closet, and the door slams shut. You become another victim of the cursed house...",
    choices: [
      { text: "The end...", next: "endingVictim" }
    ]
  },

  pickLock: {
    text: "You attempt to pick the lock with a hairpin you found, but you're not skilled enough. You break the pin and alert something in the house to your location. You hear heavy footsteps approaching fast!",
    choices: [
      { text: "Run!", next: "runAway" }
    ]
  },

  breakWindow: {
    text: "You smash through the window and fall into some bushes outside. Bruised and bleeding, you've escaped the mansion!",
    choices: [
      { text: "Get away from this place", next: "endingBruisedEscape" }
    ]
  },

  searchKey: {
    text: "You remember the music box and the little girl ghost! You go back and find the golden key where she left it. With this, you can unlock the door and discover the path to freeing the spirits!",
    choices: [
      { text: "Use the golden key", next: "useGoldenKey" }
    ]
  },

  trustSpirits: {
    text: "You trust the spirits and make your way to the attic. You find the locket and bring it outside to bury it under the moonlight. As you do, you hear peaceful sighs as the spirits are finally freed. The house is cleansed!",
    choices: [
      { text: "Walk away victorious", next: "endingSpiritFriend" }
    ]
  },

  ignoreSpirits: {
    text: "You ignore the spirits and rush out of the house. As you leave, you hear their mournful cries. You escaped, but you'll always wonder what would have happened if you'd helped them...",
    choices: [
      { text: "Leave with guilt", next: "endingGuilty" }
    ]
  },

  goBackHelp: {
    text: "You bravely return to help. Inside, you find other lost souls trapped by the curse. Using the knowledge you gained in the tunnels, you help free them all. You're a hero!",
    choices: [
      { text: "Leave as a hero", next: "endingTrueHero" }
    ]
  },

  takeLocket: {
    text: "As you take the locket, the skeleton crumbles to dust. The locket glows in your hand, showing you visions of the bride's sad story. You feel compelled to give her peace by placing the locket on her portrait downstairs.",
    choices: [
      { text: "Take the locket to the portrait", next: "endingRedemption" }
    ]
  },

  breakBedroomWindow: {
    text: "You grab a chair and smash the window, but as you try to climb out, ghostly hands pull you back in. The bride's ghost appears, furious that you tried to leave without helping her!",
    choices: [
      { text: "Apologize and offer to help", next: "apologize" },
      { text: "Fight to escape", next: "endingCursed" }
    ]
  },

  dodgeAndRun: {
    text: "You dodge the dark figure and sprint downstairs with the locket. You rush outside and bury it in the garden as the spirits instructed. The dark figure screams as it's banished, and the house becomes peaceful!",
    choices: [
      { text: "Enjoy your victory", next: "endingQuickThinker" }
    ]
  },

  fightDarkFigure: {
    text: "You bravely stand your ground, but the dark figure is too powerful. It engulfs you in darkness, and you become part of the house's curse forever...",
    choices: [
      { text: "The end...", next: "endingConsumed" }
    ]
  },

  followSpiritsGuide: {
    text: "The spirits guide you to the portrait of the bride. You place the locket you found in the diary next to her portrait. She appears one last time, smiles peacefully, and the curse is lifted!",
    choices: [
      { text: "Leave the cleansed house", next: "endingDiaryHero" }
    ]
  },

  hideTools: {
    text: "You hide among the tools, holding your breath. A dark shadow passes by but doesn't see you. After what feels like hours, you manage to escape through a small window. You're free, but traumatized.",
    choices: [
      { text: "Escape to safety", next: "endingTraumatized" }
    ]
  },

  findWeapon: {
    text: "You grab a rusty axe and face the approaching horror. It's a malevolent spirit! You swing wildly, and miraculously, the axe passes through it, disrupting its form. You use this chance to run!",
    choices: [
      { text: "Run for your life", next: "endingLuckyEscape" }
    ]
  },

  useGoldenKey: {
    text: "The golden key fits perfectly! The door opens to reveal a shrine to the bride. You place the key on the altar, and suddenly, all the spirits are freed. The bride appears, thanks you, and grants you safe passage!",
    choices: [
      { text: "Leave blessed by the spirits", next: "endingBlessed" }
    ]
  },

  runAway: {
    text: "You run through the twisting halls, heart pounding. Behind you, something crashes and growls. You burst through a window and land outside, running until you can't run anymore. You survived, barely.",
    choices: [
      { text: "Count your blessings", next: "endingBarelySurvived" }
    ]
  },

  apologize: {
    text: "You apologize sincerely and offer to help the bride find peace. Touched by your kindness, she shows you where her locket is and asks you to bury it outside. You do so, and she finally finds peace!",
    choices: [
      { text: "Leave with a peaceful heart", next: "endingCompassion" }
    ]
  },

  // ENDINGS
  endingCoward: {
    text: "🏃 You run away to safety, leaving others behind. You survived, but you'll forever be haunted by the screams you left behind. Sometimes, the ghosts that haunt us are our own choices.",
    ending: "sad",
    endingTitle: "😔 Coward's End",
    rank: 18
  },

  endingHeroMagic: {
    text: "✨ The ancient magic flows through you as you complete the ritual! The evil presence is banished forever, and the trapped spirits are freed. You've saved the mansion and become a legend in the supernatural world!",
    ending: "happy",
    endingTitle: "🌟 Magical Hero!",
    rank: 2
  },

  endingInjured: {
    text: "🤕 You wake up at the bottom of the stairs with a severe concussion. Local teenagers find you the next morning and call for help. You survived, but you'll never remember what happened in that house...",
    ending: "sad",
    endingTitle: "😵 Amnesia Ending",
    rank: 17
  },

  endingEscape: {
    text: "🏃 You successfully escape through the ventilation shaft! Covered in dirt and cobwebs, you run home and vow never to enter a haunted house again. You lived to tell the tale!",
    ending: "happy",
    endingTitle: "🎉 Clean Escape!",
    rank: 12
  },

  endingSpellcaster: {
    text: "🔮 With the ancient spell, you banish all evil from the mansion! The grateful spirits bless you with magical knowledge. You become a renowned ghost hunter, helping spirits find peace wherever you go!",
    ending: "happy",
    endingTitle: "🌟 Master Spellcaster!",
    rank: 3
  },

  endingGreed: {
    text: "💀 Your greed led you to your doom. The treasure was a trap, and you fall into a pit of spikes. The house claims another victim. Greed is a dangerous companion in cursed places...",
    ending: "sad",
    endingTitle: "☠️ Greedy End",
    rank: 21
  },

  endingLost: {
    text: "🌀 You wander the endless maze of shifting rooms forever, unable to find an exit. You become another lost soul in the mansion, warning future visitors to beware... but they never listen.",
    ending: "sad",
    endingTitle: "😱 Lost Forever",
    rank: 22
  },

  endingPeacemaker: {
    text: "🕊️ By helping the little girl's ghost and finding the bride's locket, you've freed all the spirits! They bless you as they ascend to peace. The mansion becomes a peaceful place, and you're hailed as a hero!",
    ending: "happy",
    endingTitle: "👼 The Peacemaker!",
    rank: 4
  },

  endingInjuredEscape: {
    text: "🤕 You escape with a badly injured leg and some bruises. You'll recover, but you'll always limp a little. At least you're alive, and you have quite a story to tell!",
    ending: "happy",
    endingTitle: "🏥 Injured but Alive",
    rank: 14
  },

  endingVictim: {
    text: "💀 The skeletal hands drag you into the darkness of the closet. You become another victim of the cursed house, your bones joining the collection. Perhaps someone will find you someday...",
    ending: "sad",
    endingTitle: "☠️ Another Victim",
    rank: 23
  },

  endingBruisedEscape: {
    text: "🤕 Bruised, bleeding, but alive! You crash through the window and escape the mansion. You'll have scars, but they're proof of your survival. You lived through the devil house!",
    ending: "happy",
    endingTitle: "💪 Bruised but Victorious!",
    rank: 13
  },

  endingSpiritFriend: {
    text: "👻 By trusting the spirits and helping them find peace, you've made powerful allies in the supernatural world. They grant you the ability to see and communicate with spirits. You've gained a gift!",
    ending: "happy",
    endingTitle: "🌟 Friend of Spirits!",
    rank: 5
  },

  endingGuilty: {
    text: "😔 You escaped alive, but the guilt weighs heavily on your soul. You left the spirits trapped and suffering. Every Halloween night, you hear their mournful cries in your dreams...",
    ending: "sad",
    endingTitle: "😢 Guilty Conscience",
    rank: 19
  },

  endingTrueHero: {
    text: "🦸 You risked everything to go back and help others! Your bravery saved multiple souls, both living and dead. You're a true hero, and your courage will be remembered in legends!",
    ending: "happy",
    endingTitle: "🏆 TRUE HERO!",
    rank: 1
  },

  endingRedemption: {
    text: "💝 By taking the bride's locket to her portrait and giving her peace, you've redeemed her tragic story. She blesses you with good fortune, and the mansion becomes a sanctuary for lost souls. You did something truly beautiful!",
    ending: "happy",
    endingTitle: "💖 Redemption!",
    rank: 6
  },

  endingCursed: {
    text: "😱 You try to fight the bride's ghost, but her curse is too powerful! She binds your soul to the mansion, and you become part of the haunting, forever wandering the halls in torment...",
    ending: "sad",
    endingTitle: "👻 Cursed Forever",
    rank: 24
  },

  endingQuickThinker: {
    text: "🧠 Your quick thinking and bravery saved the day! By dodging the dark figure and completing the burial ritual, you've freed all the spirits and banished the evil. You're a natural ghost hunter!",
    ending: "happy",
    endingTitle: "🎯 Quick Thinker!",
    rank: 7
  },

  endingConsumed: {
    text: "🌑 The dark figure consumes your soul, and you become part of the mansion's darkness. You'll spend eternity trying to trap others as you were trapped. The house claims another servant...",
    ending: "sad",
    endingTitle: "😈 Consumed by Darkness",
    rank: 25
  },

  endingDiaryHero: {
    text: "📖 By reading the diary and following its clues, you solved the mystery and freed the bride's spirit! Your intelligence and compassion saved the day. The mansion is finally at peace!",
    ending: "happy",
    endingTitle: "📚 The Detective!",
    rank: 8
  },

  endingTraumatized: {
    text: "😰 You escape alive, but the trauma runs deep. You have nightmares every night and can't walk past old buildings without panicking. You survived, but at what cost?",
    ending: "sad",
    endingTitle: "💔 Traumatized Survivor",
    rank: 20
  },

  endingLuckyEscape: {
    text: "🍀 More by luck than skill, you managed to escape the basement horror! You run out of the mansion and don't stop until you're miles away. Sometimes it's better to be lucky than good!",
    ending: "happy",
    endingTitle: "🎲 Lucky Escape!",
    rank: 11
  },

  endingBlessed: {
    text: "✨ The bride herself blesses you for your kindness and cleverness! You leave the mansion with supernatural protection that will guard you for the rest of your life. What a fortunate outcome!",
    ending: "happy",
    endingTitle: "🙏 Blessed by Spirits!",
    rank: 9
  },

  endingBarelySurvived: {
    text: "😅 Your heart is still pounding as you collapse in the street far from the mansion. You barely survived, and you'll never forget the terror. But hey, you made it out alive!",
    ending: "happy",
    endingTitle: "😰 Barely Made It!",
    rank: 15
  },

  endingCompassion: {
    text: "💕 Your compassion and willingness to help, even when you were in danger, earned the bride's gratitude. You freed her spirit and gained a guardian angel. Kindness truly is powerful!",
    ending: "happy",
    endingTitle: "💝 Compassionate Soul!",
    rank: 10
  }
};

// Game state
let currentPage = 'start';

// Initialize the game
function initGame() {
  currentPage = 'start';
  displayCurrentPage();
}

// Display the current page
function displayCurrentPage() {
  const page = story[currentPage];
  const storyText = document.getElementById('story-text');
  const choicesContainer = document.getElementById('choices-container');
  const endingContainer = document.getElementById('ending-container');

  // Clear previous content
  storyText.innerHTML = '';
  choicesContainer.innerHTML = '';

  // Check if this is an ending
  if (page.ending) {
    // Display ending
    const endingTitle = document.createElement('div');
    endingTitle.className = page.ending === 'happy' ? 'ending-happy' : 'ending-sad';
    endingTitle.textContent = page.endingTitle;
    storyText.appendChild(endingTitle);

    // Display ranking
    if (page.rank) {
      const rankingDiv = document.createElement('div');
      rankingDiv.className = 'ending-rank';

      // Create star rating
      let stars = '';
      let rankText = '';

      if (page.rank === 1) {
        stars = '⭐⭐⭐⭐⭐';
        rankText = 'LEGENDARY';
      } else if (page.rank <= 3) {
        stars = '⭐⭐⭐⭐⭐';
        rankText = 'AMAZING';
      } else if (page.rank <= 7) {
        stars = '⭐⭐⭐⭐';
        rankText = 'GREAT';
      } else if (page.rank <= 12) {
        stars = '⭐⭐⭐';
        rankText = 'GOOD';
      } else if (page.rank <= 17) {
        stars = '⭐⭐';
        rankText = 'OKAY';
      } else {
        stars = '⭐';
        rankText = 'POOR';
      }

      rankingDiv.innerHTML = `${stars}<br>Ending Rank: #${page.rank} - ${rankText}`;
      storyText.appendChild(rankingDiv);
    }

    const endingText = document.createElement('p');
    endingText.textContent = page.text;
    storyText.appendChild(endingText);

    endingContainer.style.display = 'block';
  } else {
    // Display story text
    storyText.textContent = page.text;
    endingContainer.style.display = 'none';

    // Display choices
    page.choices.forEach(choice => {
      const button = document.createElement('button');
      button.className = 'choice-btn';
      button.textContent = choice.text;
      button.addEventListener('click', () => {
        currentPage = choice.next;
        displayCurrentPage();
      });
      choicesContainer.appendChild(button);
    });
  }
}

// Restart button event listener
document.getElementById('restart-btn').addEventListener('click', initGame);

// Start the game when the popup opens
initGame();

