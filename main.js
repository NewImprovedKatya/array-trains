
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
    challenge: "purple",
    answer: `const myTracks = [];`,
    action: () => {
      const rail = document.createElement("img");
      rail.src = "/img/track.svg";
      train.appendChild(rail);
    },
  },
  {
    hint: false,
    challenge:
      "Next, let’s add the train’s engine. To add something to an array, we can use a method called push. Type the following code to push an engine onto your array tracks:",
    answer: "myTracks.push(‘engine’);",
    action: () => {
      myTracks.push("engine");
      const slotOneImage = document.createElement("img");
      slotOneImage.src = "/img/engine.svg";

      slotOne.appendChild(slotOneImage);
    },
  },
  {
    hint: false,
    challenge: "Now, let’s do the same thing to add a boxcar:",
    answer: "myTracks.push(‘boxcar’);",
    action: () => {
      myTracks.push("boxcar");
      const slotTwoImage = document.createElement("img");
      slotTwoImage.src = "/img/boxcar.svg";

      slotTwo.appendChild(slotTwoImage);
    },
  },
  {
    hint: true,
    challenge:
      "Every train needs a caboose! Use the push method to add a caboose:",
    answer: "myTracks.push(‘caboose’);",
    action: () => {
      myTracks.push("caboose");
      const slotThreeImage = document.createElement("img");
      slotThreeImage.src = "/img/caboose.svg";

      slotThree.appendChild(slotThreeImage);
    },
  },
  {
    hint: false,
    challenge:
      "Let’s make the train longer. Push a passenger car onto the array:",
    answer: "myTracks.push(‘passenger car’);",
    action: () => {
      myTracks.push("passenger car");
      const slotFourImage = document.createElement("img");
      slotFourImage.src = "/img/passenger car.svg";

      slotFour.appendChild(slotFourImage);
    },
  },
  {
    hint: false,
    challenge:
      "Hm, we probably should move the caboose to the end. Let’s remove the last item in an array, we can use the pop() method. Type the following code to pop the passenger car off the end of the array.",
    answer: "myTracks.pop();",
    action: () => {
      myTracks.pop();

      slotFour.removeChild(slotFour.firstElementChild);
    },
  },
  {
    hint: false,
    challenge: "Now pop the caboose off the end as well.",
    answer: "myTracks.pop();",
    action: () => {
      myTracks.pop();

      slotThree.removeChild(slotThree.firstElementChild);
    },
  },
  {
    hint: true,
    challenge: "Ok, now add the passenger car back on with the push method.",
    answer: "myTracks.push(‘passenger car’);",
    action: () => {
      myTracks.push("passenger car");
      const slotThreeImage = document.createElement("img");
      slotThreeImage.src = "/img/passenger car.svg";

      slotThree.appendChild(slotThreeImage);
    },
  },
  {
    hint: false,
    challenge: "Add the caboose:",
    answer: "myTracks.push(‘caboose’);",
    action: () => {
      myTracks.push("caboose");
      const slotFourImage = document.createElement("img");
      slotFourImage.src = "/img/caboose.svg";

      slotFour.appendChild(slotFourImage);
    },
  },
  {
    hint: false,
    challenge: "Now we know how to add and remove things to the end of an array, but what if we want to change something in the front? We can use the shift method to remove the first item in the array:",
    answer: "myTracks.shift();",
    action: () => {
      myTracks.shift();

      slotOne.remove();
    },
  },
  {
    hint: false,
    challenge:
      "That worked, but our train won’t get anywhere without an engine. We can use the method unshift to put an engine in the front.",
    answer: "myTracks.unshift(‘engine’);",
    action: () => {
      myTracks.unshift("engine");
      const slotOne = document.createElement("div");
      slotOne.id = "slot1";
      trainWrapper.insertBefore(slotOne, trainWrapper.firstChild);
      const slotOneImage = document.createElement("img");
      slotOneImage.src = "/img/engine.svg";

      slotOne.appendChild(slotOneImage);
    },
  },
];
