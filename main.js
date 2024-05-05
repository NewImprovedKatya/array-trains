// Game global variables
let myTracks = [];
let level = 0;
let points = 0;

// This Array contains the level instructions
const levelInfo = [
  {
    hint: false,
    car: "track",
    info: `In JavaScript, an array is a special type of object that contains a collection of items. Array items are always aligned within square brackets, kind of like how train cars are aligned on a track.`,
    challenge: `Type the following code to establish your empty array and lay down the tracks:`,
    answer: `const myTracks = [];`,
    action: () => {
      const rail = document.createElement("img");
      rail.src = "/img/track.svg";
      rail.className = 'track';
      trainArea.appendChild(rail);
    },
  },
  {
    hint: false,
    info: "To add an item to an array, you can use a method called PUSH.",
    challenge: "Add an engine to your tracks by typing in the following code:",
    answer: "myTracks.push('engine');",
    action: () => {
      myTracks.push('engine');
    },
  },
  {
    hint: false,
    car: "boxcar",
    info: "Fantastic! Let’s add a boxcar. The push method always adds the item to the end of the array.",
    challenge:
      "Type the following code to add a boxcar to the end of your train:",
    answer: `myTracks.push('boxcar');`,
    action: function () {
      myTracks.push('boxcar');
    },
  },
  {
    hint: false,
    info: "Now let’s add a passenger car.",
    challenge: "Type the code to add a passenger car:",
    answer: `myTracks.push('passenger-car');`,
    action: () => {
      myTracks.push('passenger-car');
    },
  },
  {
    hint: true,
    info: "Challenge time!",
    challenge: "Can you add a caboose without looking at the hint?",
    answer: `myTracks.push('caboose');`,
    action: function () {
      myTracks.push('caboose');
    },
  },
  {
    hint: false,
    info: "Well done! Let’s add a tanker car.",
    challenge: "Type the code to add a tanker car:",
    answer: `myTracks.push('tanker-car');`,
    action: function () {
      myTracks.push('tanker-car');
    },
  },
  {
    hint: false,
    info: "Hm, the caboose should be on the end. Let’s use the POP method to pop the tanker off the end of the array.",
    challenge: "Type the following code to remove the last item in the array:",
    answer: `myTracks.pop();`,
    action: function () {
      myTracks.pop();
    },
  },
  {
    hint: false,
    info: "Now do the same thing to the caboose.",
    challenge: "Type the code to remove the last item in the array:",
    answer: `myTracks.pop();`,
    action: function () {
      myTracks.pop();
    },
  },
  {
    hint: true,
    info: "Let's add them back on in the correct order.",
    challenge: "Use the push method to add a tanker car.",
    answer: `myTracks.push('tanker-car');`,
    action: function () {
      myTracks.push('tanker-car');
    },
  },
  {
    hint: true,
    info: "Perfect! Now we can reinstall the caboose.",
    challenge: "Use the push method to add a caboose.",
    answer: `myTracks.push('caboose');`,
    action: function () {
      myTracks.push('caboose');
    },
  },
  {
    hint: false,
    info: "Push and pop are great, but what if we want to remove an item at the other end of the array? For that, we can use the SHIFT method.",
    challenge: "Type the code to remove the first item in the array:",
    answer: `myTracks.shift();`,
    action: function () {
      myTracks.shift();
    },
  },
  {
    hint: false,
    info: "Great! Now we can use the UNSHIFT method to add an item to the front.",
    challenge: "Type the code to add a flatcar to the front of the array;",
    answer: `myTracks.unshift('flatcar');`,
    action: function () {
      myTracks.unshift('flatcar');
    },
  },
  {
    hint: false,
    info: "Our train won’t get far without an engine!",
    challenge: "Type the code to add an engine to the front of the array:",
    answer: `myTracks.unshift('engine');`,
    action: function () {
      myTracks.unshift('engine');
    },
  },
  {
    hint: false,
    info: "Most array methods have a return value in addition to their primary action. SHIFT’s return value is the item it removed. This allows us to take an item from the front and put it somewhere else.",
    challenge: "Type the code to move the engine to the back of the array:",
    answer: `myTracks.push(myTracks.shift());`,
    action: function () {
      myTracks.push(myTracks.shift());
    },
  },
  {
    hint: false,
    info: "The POP method also returns the item it removes.",
    challenge:
      "Type the code to remove the engine from the back and place it in the front.",
    answer: `myTracks.unshift(myTracks.pop());`,
    action: function () {
      myTracks.unshift(myTracks.pop());
    },
  },
  {
    hint: false,
    info: "Every item in an array is given an index number starting from 0. You can use this index number to target an item anywhere in the array.",
    challenge:
      "Type the following code to target the engine and turn it into a tanker car:",
    answer: `myTracks[0] = 'tanker-car';`,
    action: function () {
      myTracks[0] = 'tanker-car';
    },
  },
  {
    hint: false,
    info: "Let’s practice using the array index.",
    challenge:
      "Type the code to replace the item in position 1 with the item in position 3:",
    answer: `myTracks[1] = myTracks[3];`,
    action: function () {
      myTracks[1] = myTracks[3];
    },
  },
  {
    hint: false,
    info: "Now that we know how the index works, we can use the SPLICE method. Splice can be used to remove items in an array. We can specify a starting index and splice will remove that item and all following items.",
    challenge:
      "Type the following code to remove all items starting at index 3:",
    answer: `myTracks.splice(3);`,
    action: function () {
      myTracks.splice(3);
    },
  },
  {
    hint: false,
    info: "You can also specify how many items you want splice to remove.",
    challenge:
      "Type the following code to remove two items starting at index 0:",
    answer: `myTracks.splice(0, 2);`,
    action: function () {
      myTracks.splice(0, 2);
    },
  },
  {
    hint: false,
    info: "Splice can also add items.",
    challenge:
      "Type the following code to remove one item starting at index 0 and add a caboose:",
    answer: `myTracks.splice(0, 1, 'caboose');`,
    action: function () {
      myTracks.splice(0, 1, 'caboose');
    },
  },
  {
    hint: false,
    info: "Splice can add more than one item at a time.",
    challenge:
      "Type the following code to remove one item starting at index 0 and add a passenger car and tanker car:",
    answer: `myTracks.splice(0, 1, 'passenger-car', 'tanker-car');`,
    action: function () {
      myTracks.splice(0, 1, 'passenger-car', 'tanker-car');
    },
  },
  {
    hint: false,
    info: "If you don't want to remove any items, you can input zero as the number of items to be removed",
    challenge:
      "Type the following code to remove zero items starting at index 0 and add an engine and flatcar:",
    answer: `myTracks.splice(0, 0, 'engine', 'flatcar');`,
    action: function () {
      myTracks.splice(0, 0, 'engine', 'flatcar');
    },
  },
  {
    hint: false,
    info: "Let's practice!",
    challenge:
      "Type the following code to add a caboose:",
    answer: `myTracks.splice(4, 0, 'caboose');`,
    action: function () {
      myTracks.splice(4, 0, 'caboose');
    },
  },
  {
    hint: true,
    info: "Can you use splice without looking?",
    challenge:
      "Use splice to add a boxcar at index position 2 without removing any items:",
    answer: `myTracks.splice(2, 0, 'boxcar');`,
    action: function () {
      myTracks.splice(2, 0, 'boxcar');
    },
  },
  /* {
    hint: true,
    info: "Well done! Have the energy for one more??",
    challenge:
      "Use splice to remove the flatcar, boxcar, and passenger car. Do not add any new items:",
    answer: `myTracks.splice(1, 3);`,
    action: function () {
      myTracks.splice(1, 3);
    },
  }, */
];

// Interface Global variables
const offDiv = document.querySelector(".play");
const intro = document.querySelector(".intro");
const message = document.getElementById("message");
const answer = document.getElementById("hint");
const question = document.getElementById("challenge");
const info = document.getElementById("info");
const trainArray = document.getElementById("train-array");
const train = document.getElementById("train-yard");
const levelDisplay = document.getElementById("level-display");
const pointsDisplay = document.getElementById("points-display");
const playButton = document.getElementById("play");
const submitButton = document.getElementById("submit");
const hintButton = document.getElementById("hint-button");
const progress = document.querySelector(".progress");
const nextLevelButton = document.getElementById("next-level");
const prevLevelButton = document.getElementById("prev-level");
const trainWrapper = document.getElementById("train");
const trainArea = document.getElementById("train-area");

// This removes the splash screen and loads the game
playButton.addEventListener("click", play);
function play() {
  offDiv.style.display = "block";
  intro.style.display = "none";
  levelDisplay.textContent = `Level: ${level + 1} / ${levelInfo.length}`;
}

// Submit Button
submitButton.addEventListener("click", submitAnswer);
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    submitButton.click();
  }
});

// Checks to see if the answer is correct
function submitAnswer() {
  const removeSpacesAndSemicolons = /[\s;]/g;
  let userInput = document.getElementById("input").value;

  let middleInput = userInput.replace(/["\u2018\u2019]/g, "'");
  let finalInput = middleInput.replace(removeSpacesAndSemicolons, "");

  const finalAnswer = levelInfo[level].answer.replace(
    removeSpacesAndSemicolons,
    ""
  );
  if (finalInput === finalAnswer) {
    message.textContent = "Success!";
    message.style.color = '#82b740';
    nextLevelButton.disabled = false;
    points += 10;
    submitButton.disabled = true;
    refreshTrain();
    levelInfo[level].action();
    console.log(myTracks);

     for (const car of myTracks) {
      const trainCar = document.createElement("img");
      trainCar.src = `img/${car}.svg`;
      trainCar.className = "slot";
      trainWrapper.appendChild(trainCar);
    } 

    trainArray.textContent = `const myTracks = [${myTracks.join(", ")}];`;
  } else {
    message.textContent = "Try Again";
    points -= 1;
  }
}

// Removes the train cars in between levels
function refreshTrain() {
  while(trainWrapper.firstChild) {
      trainWrapper.removeChild(trainWrapper.firstChild);
  }
}

// Loads next Level
nextLevelButton.addEventListener("click", nextLevel);
function prevLevel() {
  level -= 1;
  levelButton();
}

// Loads previous level
prevLevelButton.addEventListener("click", prevLevel);
function nextLevel() {
  if (level === (levelInfo.length - 1)) {
    message.textContent =
      "Congratulations!";
    challenge.textContent = `You've completed every available level.`;
    info.textContent = "Our team is working hard to bring you more levels. Come back often to see what's new!"
    submitButton.disabled = true;
  } else {
    level += 1;
    levelButton();
  }
}

function levelButton() {
    message.style.color = '';
    info.textContent = levelInfo[level].info;
    challenge.textContent = levelInfo[level].challenge;
    submitButton.disabled = false;
    message.textContent = "Ready?";
    document.getElementById("form").reset();
    levelDisplay.textContent = `Level: ${level + 1} / ${levelInfo.length}`;
    answer.textContent = levelInfo[level].answer;
    hintDisplay();
}

hintButton.addEventListener('click', revealHint);

function hintDisplay() {
  console.log(level);
  if (levelInfo[level].hint === true) {
    hintButton.style.display = 'block';
    answer.style.display = 'none';
  } else {
    hintButton.style.display = 'none';
    answer.style.display = 'block';
  }
}

function revealHint() {
  hintButton.style.display = 'none';
  answer.style.display = 'block';
}
