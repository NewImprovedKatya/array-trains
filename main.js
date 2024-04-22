
let myTracks = [];
let level = 0;
let points = 0;
const totalLevels = 11;

const offDiv = document.querySelector(".play");
const intro = document.querySelector(".intro");

let message = document.getElementById("message");
let answer = document.getElementById("answer");
let question = document.getElementById("challenge");
let trainArray = document.getElementById("train-array");
const train = document.getElementById("train-yard");
const levelDisplay = document.getElementById("level-display");
const pointsDisplay = document.getElementById("points-display");
const playButton = document.getElementById("play");
const submitButton = document.getElementById("submit");
const hintButton = document.getElementById("hint");
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
    message.textContent = `Congratulations! You've completed every available level. Your total score is ${points} out of ${
      totalLevels * 10
    }!`;
    nextLevelButton.disabled = true;
    submitButton.disabled = true;
  } else {
    level += 1;
    nextLevelButton.disabled = true;

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
    challenge: `In JavaScript, an array is a special type of object that contains a collection of items. Array items are always aligned within square brackets, kind of like how train cars are aligned on a track.`,
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
    challenge: 'Add engine',
    answer: "myTracks.push(‘engine’);",
    action: () => {
      myTracks.push("engine");
      actionPush('engine');
    },
  },
  {
    hint: false,
    car: 'boxcar',
    challenge:
      "Add Boxcar",
    answer: `myTracks.push('boxcar');`,
    action: function() {
      myTracks.push(this.car);
      actionPush('boxcar');
      console.log(this.car);
    },
  },
  {
    hint: false,
    challenge:
      "Add Caboose",
    answer: `myTracks.push('caboose');`,
    action: () => {
      myTracks.push('caboose');
      actionPush('caboose');
    },
  },
  {
    hint: false,
    challenge:
      'Remove Caboose',
    answer: `myTracks.pop('caboose');`,
    action: function() {
      myTracks.pop('caboose');
      actionPop();
    },
  },
  {
    hint: false,
    challenge:
      'Select Caboose',
    answer: `myTracks.pop('caboose');`,
    action: function() {
      indexSelect(1);
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
  trainCar.src = `${src}.svg`;
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
  newItem.src = `${src}.svg`;
  trainWrapper.insertBefore(newItem, trainWrapper.children[index]);
}

function indexSelect(index) {
	trainWrapper.children[index].style.boxShadow = 'inset 0 0 5px #303030';
}

  
  


