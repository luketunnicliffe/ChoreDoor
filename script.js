
// Javascript test.
const text = document.getElementById('hi');
//text.innerHTML = "Javascript is connected!"

//Images
const botDoorPath = "./images/robot.svg";
const beachDoorPath = "./images/beach.svg";
const spaceDoorPath = "./images/space.svg";
const closedDoorPath = "./images/closed-door.svg";

//Global Variables
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let currentlyPlaying = true;

let score = 0;
let highScore = 0;
let currentStreak = document.getElementById('score-number');
let bestStreak = document.getElementById('high-score-number');
currentStreak.innerHTML = score;
bestStreak.innerHTML = highScore;



const startButton = document.getElementById('start');
const doorImage1 = document.getElementById('door1');
const doorImage2 = document.getElementById('door2');
const doorImage3 = document.getElementById('door3');


doorImage1.onclick = () =>{
    let doorString = doorImage1.src;
    doorString = doorString.replace("http://127.0.0.1:5500", "");
    doorString = "." + doorString;
    //text.innerHTML = doorString;
    //text.innerHTML = "clicked!";
    //text.innerHTML = isClicked(doorString);
    if(!isClicked(doorString) && currentlyPlaying){ 
        //text.innerHTML = "isClicked pressed1";
        //text.innerHTML = openDoor1;

        doorImage1.src = openDoor1;
        //text.innerHTML = "isClicked pressed2";
        isClicked(doorImage1);
        //text.innerHTML = "isClicked pressed3";
        playDoor(doorImage1);
    }
}

doorImage2.onclick = () => {
    let doorString = doorImage2.src;
    doorString = doorString.replace("http://127.0.0.1:5500", "");
    doorString = "." + doorString;
    if(!isClicked(doorString) && currentlyPlaying){
        doorImage2.src = openDoor2;
        isClicked(doorImage2);
        playDoor(doorImage2);
}
}

doorImage3.onclick = () => {
    let doorString = doorImage3.src;
    doorString = doorString.replace("http://127.0.0.1:5500", "");
    doorString = "." + doorString;
    if(!isClicked(doorString) && currentlyPlaying){
        doorImage3.src = openDoor3;
        isClicked(doorImage3);
        playDoor(doorImage3);
    }
}

startButton.onclick = () => {
    //startButton.innerHTML = "Pressed!";
    //startButton.innerHTML = currentlyPlaying;

    if (!currentlyPlaying){
        startButton.innerHTML = "Started!"

        startRound();
        //startButton.innerHTML = "Started!2"

    }
}


const startRound = () => {
    //startButton.innerHTML = "Start Round Initiated!"

    doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath;
    //startButton.innerHTML = "Start Round Initiated2!"

    numClosedDoors = 3;
    startButton.innerHTML = "Start!"
    //startButton.innerHTML = "Start Round Initiated3!"

    currentlyPlaying = true;
    randomChoreDoorGenerator()
    //startButton.innerHTML = "Start Round Initiated4!"

}

const randomChoreDoorGenerator = () => {
    //text.innerHTML = "Function is working!";
    const choreDoor = Math.floor(Math.random() *numClosedDoors);
    //text.innerHTML = choreDoor;

    if (choreDoor === 0){
        openDoor1=botDoorPath;
        openDoor2=beachDoorPath;
        openDoor3=spaceDoorPath;
  }
    else if (choreDoor === 1){
        openDoor1=spaceDoorPath;
        openDoor2=botDoorPath;
        openDoor3= beachDoorPath;
  }
  else if (choreDoor === 2){
        openDoor1= beachDoorPath
        openDoor2= spaceDoorPath;
        openDoor3= botDoorPath;
  }
}

const playDoor = (door) => {
    //text.innerHTML = "playDoor activated";

    numClosedDoors = numClosedDoors - 1;
    //text.innerHTML = numClosedDoors;
    //text.innerHTML = door.src;
    if (numClosedDoors === 0){
        gameOver("win");
    }
    else if (isBot(door)){
        gameOver();
    }
}

const isBot = (door) => {
    doorString = door.src.replace("http://127.0.0.1:5500", "");
    doorString = "." + doorString;
    //text.innerHTML = doorString;
    if (doorString === botDoorPath){
        return true;
    }
    else{
        return false;
    }

}

const isClicked = (door) => {
    //text.innerHTML = "isClicked";
    if (door=== closedDoorPath){
        //text.innerHTML = "isClicked2";
        return false;
    }
    else {
        return true;
    }
}

const gameOver = (status) => {
    if (status === "win"){
        startButton.innerHTML = "You win! Play again?";
        getYourScore();
    }
    else {
        startButton.innerHTML = "Game over! Play again?";
        score = 0;
        currentStreak.innerHTML = score;
    }
    currentlyPlaying = false;
}
//The scoring seems to be a bit broken.
const getYourScore = () => {
    score++;
    currentStreak.innerHTML = score;
    if (score > highScore) {
      highScore = score;
      bestStreak.innerHTML = highScore;
    }
  }
  

startRound();
