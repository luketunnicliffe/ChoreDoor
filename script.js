const doorImage1 = document.getElementById('door1');
const doorImage2 = document.getElementById('door2');
const doorImage3 = document.getElementById('door3');

// Javascript test.
const text = document.getElementById('hi');
text.innerHTML = "Javascript is connected!"


const botDoorPath = "./images/robot.svg";
const beachDoorPath = "./images/beach.svg";
const spaceDoorPath = "./images/space.svg";



doorImage1.onclick = () =>{
doorImage1.src = botDoorPath;
}

doorImage2.onclick = () => {
    doorImage2.src = beachDoorPath;
}

doorImage3.onclick = () => {
    doorImage3.src = spaceDoorPath;
}
