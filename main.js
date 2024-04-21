
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
let slotOne = document.getElementById("slot1");
let slotTwo = document.getElementById("slot2");
let slotThree = document.getElementById("slot3");
let slotFour = document.getElementById("slot4");
let slotFive = document.getElementById("slot5");

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
    challenge: "Add tracks",
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
    action: () => {
      myTracks.push(this.car);
      actionPush('boxcar');
    },
  },
];

function actionPush(src) {
	const trainCar = document.createElement('img');
  trainCar.src = `img/${src}.svg`;
  trainCar.className = 'slot';
  trainWrapper.appendChild(trainCar);

}

