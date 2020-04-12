//global variables
//DOM objects
let doorImage1 = document.getElementById("door1");
let doorImage2 = document.getElementById("door2");
let doorImage3 = document.getElementById("door3");
//start button
let startButton = document.getElementById("start");
//door paths
let openDoor1;
let openDoor2;
let openDoor3;
const closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";
let botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
let beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
let spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
//other variables
//number of closed doors
let numClosedDoors = 3;
let currentlyPlaying = true;


//functions
const isBot = (door) => {
    if(door.src === botDoorPath){
        return true;
    }else{
        return false;
    }
}
//check if door is open or closed
const isClicked = (door) => {
  if(door.src === closedDoorPath){
    return false;
  }else{
    return true;
  }
}
//decrease open doors and check for wins
const playDoor = (door) => {
  numClosedDoors--;
  if(numClosedDoors === 0){
    gameOver("win");
  }else if(isBot(door)){
    gameOver();
  }
}
//randomize doors
const randomChoreDoorGenerator = () => {
  const choreDoor = Math.floor(Math.random() * numClosedDoors);
  if(choreDoor === 0){
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  }else if(choreDoor === 1){
    openDoor1 = spaceDoorPath;
    openDoor2 = botDoorPath;
    openDoor3 = beachDoorPath;
  }else{(choreDoor === 2)
    openDoor1 = beachDoorPath;
    openDoor2 = spaceDoorPath;
    openDoor3 = botDoorPath;
  }
}


//onclick functions
doorImage1.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage1)){
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
  }
};
doorImage2.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage2)){
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
  }
};
doorImage3.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage3)){
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  }
};
startButton.onclick = () => {
    if(!currentlyPlaying){
        startRound();
    }
};

//starts a new round and reset vales
const startRound = () => {
    doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath;
    numClosedDoors = 3;
    currentlyPlaying = true;
    startButton.innerHTML = "Good luck!";
    randomChoreDoorGenerator();
};
//game over
const gameOver = (status) => {
  if(status === "win"){
    startButton.innerHTML = "You win! Play again?";
  }else{
      startButton.innerHTML = "Game over! Play again?";
  }
  currentlyPlaying = false;
}

startRound();
