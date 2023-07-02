let data = [
  { id: "1", img: "./1.png", group: "0" },
  { id: "2", img: "./2.jpg", group: "0" },
  { id: "3", img: "./3.png", group: "0" },
  { id: "4", img: "./4.png", group: "0" },
  { id: "5", img: "./5.png", group: "0" },
  { id: "6", img: "./6.png", group: "1" },
  { id: "7", img: "./7.jpg", group: "1" },
  { id: "8", img: "./8.jpg", group: "1" },
  { id: "9", img: "./9.jpeg", group: "1" },
  { id: "10", img: "./10.png", group: "1" },
];

const leftData = data.filter((v) => v.group == "0");
const rightData = data.filter((v) => v.group == "1");
var score = 0;
let imageInfo;
var num = 1;
function newFC() {
  num++;
  console.log(num);
  stopGame();
}
function stopGame() {
  setTimeout(newFC, 60000);

  if (num == 1) {
    console.log("hello");
    var box = document.getElementById("start");
    box.innerHTML = "Stop";
    box.style.backgroundColor = "red";
    setInterval(changeImage,2000)
    var randomImage = data[Math.floor(Math.random() * data.length)];
    imageInfo = randomImage.group;
    const imgContainer = document.getElementById("imageContainer");
    imgContainer.setAttribute("src", randomImage.img);
    document.addEventListener("keypress", (event) => {
      if (imageInfo == event.key) {
        score++;
        document.getElementById("userScore").innerHTML = "Score : " + score;
        console.log("Score is", score);
      }
      changeImage();
      console.log("e is", event.key);
      console.log("imageInfo is", imageInfo);
    });
    num++;
  } else {
    var finish = document.getElementById("display");
    document.getElementById("userScore").style.display = "none";
    finish.innerHTML = `<div id ="finalScore">Your Score is ${score}</div>`;
    NewGame();
  }
}

function changeImage() {
  var randomImage = data[Math.floor(Math.random() * data.length)];
  imageInfo = randomImage.group;
  const imgContainer = document.getElementById("imageContainer");
  imgContainer.setAttribute("src", randomImage.img);
}

function NewGame() {
  var box = document.getElementById("start");
    box.innerHTML = "Finished";
    box.style.backgroundColor = "green";
  score = 0;
  num = 1;
}
