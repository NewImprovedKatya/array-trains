
let myTracks = [];
let level = 0;
let points = 0;
const totalLevels = 15;

const offDiv = document.querySelector(".play");
const intro = document.querySelector(".intro");

let message = document.getElementById("message");
let answer = document.getElementById("hint");
let question = document.getElementById("challenge");
const info = document.getElementById("info");
let trainArray = document.getElementById("train-array");
const train = document.getElementById("train-yard");
const levelDisplay = document.getElementById("level-display");
const pointsDisplay = document.getElementById("points-display");
const playButton = document.getElementById("play");
const submitButton = document.getElementById("submit");
const hintButton = document.getElementById("hint-button");
const progress = document.querySelector(".progress");
const nextLevelButton = document.getElementById("next-level");

const trainWrapper = document.getElementById("train");

playButton.addEventListener("click", play);

function play() {
  offDiv.style.display = "block";
  intro.style.display = "none";
  nextLevelButton.disabled = true;
}

submitButton.addEventListener("click", submitAnswer);

function submitAnswer() {
  event.preventDefault(); //Research this later
  let userInput = document.getElementById("input").value;
  usurInput = userInput.replace(/smartquoteChars/g, "'");

  if (userInput === levelInfo[level].answer) {
    message.textContent = "Success!";
    nextLevelButton.disabled = false;

    points += 10;
    submitButton.disabled = true;
    levelInfo[level].action();

    trainArray.textContent = `const myTracks = [${myTracks.join(", ")}];`;
  } else {
    message.textContent = "try again";
    points -= 1;
  }

  pointsDisplay.textContent = "Points: " + points;
}

hintButton.addEventListener("click", revealHint);

function revealHint() {
  answer.textContent = levelInfo[level].answer;
  points -= 2;
  hintButton.disabled = true;
}

nextLevelButton.addEventListener("click", nextLevel);

function nextLevel() {
  if (level === totalLevels - 1) {
    message.textContent = "Congratulations! You've completed every available level.";
    challenge.textContent = `Your total score is ${points} out of ${
      totalLevels * 10
    }!`;
    nextLevelButton.disabled = true;
    submitButton.disabled = true;
  } else {
    level += 1;
    nextLevelButton.disabled = true;
    info.textContent = levelInfo[level].info;
    challenge.textContent = levelInfo[level].challenge;
    submitButton.disabled = false;
    message.textContent = "Ready?";
    document.getElementById("form").reset();
    levelDisplay.textContent = "Level: " + level;
    progress.style.width = Math.round((level / totalLevels) * 100) + "%";
    if (levelInfo[level].hint) {
      answer.textContent = "";
      hintButton.disabled = false;
    } else {
      answer.textContent = levelInfo[level].answer;
    }
  }
}

const levelInfo = [
  {
    hint: false,
    car: 'track',
    info: `In JavaScript, an array is a special type of object that contains a collection of items. Array items are always aligned within square brackets, kind of like how train cars are aligned on a track.`,
    challenge: `Type the following code to establish your empty array and lay down the tracks:`,
    answer: `const myTracks = [];`,
    action: () => {
      const rail = document.createElement("img");
      rail.src = "/img/track.svg";
      train.appendChild(rail);
    },
  },
  {
    hint: false,
    car: 'engine',
    info: "To add an item to an array, you can use a method called PUSH.",
    challenge: "Add an engine to your tracks by typing in the following code:",
    answer: "myTracks.push(‘engine’);",
    action: () => {
      myTracks.push("engine");
      actionPush('engine');
    },
  },
  {
    hint: false,
    car: 'boxcar',
    info: "Fantastic! Let’s add a boxcar. The push method always adds the item to the end of the array.",
    challenge:
      "Type the following code to add a boxcar to the end of your train:",
    answer: `myTracks.push('boxcar');`,
    action: function() {
      myTracks.push(this.car);
      actionPush('boxcar');
      console.log(this.car);
    },
  },
  {
    hint: false,
    info: "Now let’s add a passenger car.",
    challenge:
      "Type the code to add a passenger car:",
    answer: `myTracks.push('passenger car');`,
    action: () => {
      myTracks.push('passenger car');
      actionPush('passenger car');
    },
  },
  {
    hint: true,
    info: "Challenge time!",
    challenge:
      "Can you add a caboose without looking at the hint?",
    answer: `myTracks.push('caboose');`,
    action: function() {
      myTracks.push('caboose');
      actionPush('caboose');
    },
  },
  {
    hint: false,
    info: "Well done! Let’s add a tanker car.",
    challenge: "Type the code to add a tanker car:",
    answer: `myTracks.push('tanker car');`,
    action: function() {
      myTracks.push('tanker car');
      actionPush('tanker car');
    },
  },
  {
    hint: false,
    info: "Hm, the caboose should be on the end. Let’s use the POP method to pop the tanker off the end of the array.",
    challenge: "Type the following code to remove the last item in the array:",
    answer: `myTracks.pop();`,
    action: function() {
      myTracks.pop();
      actionPop();
    },
  },
  {
    hint: false,
    info: "Now do the same thing to the caboose.",
    challenge: "Type the code to remove the last item in the array:",
    answer: `myTracks.pop();`,
    action: function() {
      myTracks.pop();
      actionPop();
    },
  },
  {
    hint: true,
    info: "Let's add them back on in the correct order.",
    challenge: "Use the push method to add a tanker car.",
    answer: `myTracks.push(‘tanker car’);`,
    action: function() {
      myTracks.push('tanker car');
      actionPush('tanker car');
    },
  },
  {
    hint: true,
    info: "Perfect! Now we can reinstall the caboose.",
    challenge:
      "Use the push method to add a caboose.",
    answer: `myTracks.push('caboose');`,
    action: function() {
      myTracks.push('caboose');
      actionPush('caboose');
    },
  },
  {
    hint: false,
    info: "Push and pop are great, but what if we want to remove an item at the other end of the array? For that, we can use the SHIFT method.",
    challenge: "Type the code to remove the first item in the array:",
    answer: `myTracks.shift();`,
    action: function() {
      myTracks.shift();
      actionShift();
    },
  },
  {
    hint: false,
    info: "Great! Now we can use the UNSHIFT method to add an item to the front.",
    challenge: "Type the code to add a flatcar to the front of the array;",
    answer: `myTracks.unshift('flatcar');`,
    action: function() {
      myTracks.unshift('flatcar');
      actionUnshift('flatcar');
    },
  },
  {
    hint: false,
    info: "Our train won’t get far without an engine!",
    challenge: "Type the code to add an engine to the front of the array:",
    answer: `myTracks.unshift('engine');`,
    action: function() {
      myTracks.unshift('engine');
      actionUnshift('engine');
    },
  },
  {
    hint: false,
    info: "Most array methods have a return value in addition to their primary action. SHIFT’s return value is the item it removed. This allows us to take an item from the front and put it somewhere else.",
    challenge: "Type the code to move the engine to the back of the array:",
    answer: `myTracks.push(myTracks.shift());`,
    action: function() {
      myTracks.push(myTracks.shift());
      actionShift();
      actionPush('engine');
    },
  },
  {
    hint: false,
    info: "The POP method also returns the item it removes.",
    challenge: "Type the code to remove the engine from the back and place it in the front.",
    answer: `myTracks.unshift(myTracks.pop());`,
    action: function() {
      myTracks.unshift(myTracks.pop());
      actionPop();
      actionUnshift('engine');
    },
  },
  
];

function actionPush(src) {
	const trainCar = document.createElement('img');
  trainCar.src = `img/${src}.svg`;
  trainCar.className = 'slot';
  trainWrapper.appendChild(trainCar);
}

function actionPop() {
  trainWrapper.removeChild(trainWrapper.lastElementChild);
  }
  
function actionShift() {
  trainWrapper.removeChild(trainWrapper.firstElementChild);
  }

function actionUnshift(src) {
	const trainCar = document.createElement('img');
  trainCar.src = `/img/${src}.svg`;
  trainCar.className = 'slot';
trainWrapper.insertBefore(trainCar, trainWrapper.firstChild);
}

function actionRemove(index) {
  const childToRemove = trainWrapper.childNodes[index]; 
  if (childToRemove) {
    trainWrapper.removeChild(childToRemove);
  } else {
    console.log("There is no third child element.");
  }
}

function actionAdd(src, index) {
  alert('why????');
  const newItem = document.createElement('img');
  newItem.src = `/img/${src}.svg`;
  trainWrapper.insertBefore(newItem, trainWrapper.children[index]);
}

function indexSelect(index) {
	trainWrapper.children[index].style.boxShadow = 'inset 0 0 5px #303030';
}

  
  


