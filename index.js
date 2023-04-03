var numberOfdrum = document.querySelectorAll(".drum").length;

// Detacting click and get the inner html
for(var i = 0 ; i < numberOfdrum ; i++){
  document.querySelectorAll("button")[i].addEventListener("click", function(){
    
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
    backgroundLight(buttonInnerHTML);

  });
}

// Detacting button press and get the character of the button
document.addEventListener("keydown",function(event){
  makeSound(event.key);

  buttonAnimation(event.key);

  backgroundLight(event.key);
})

// A function which takes a character and play the sound according to the switch statement 
function makeSound(key){
    switch (key) {
      case "a":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

      case "s":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

      case "d":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

      case "f":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

      case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

      case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

      case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;

    default:
      console.log(this.innerHTML);
      break;
  }
}

// function for adding animation to the button

function buttonAnimation(currentkey){
 var activeButton = document.querySelector("." + currentkey);

 activeButton.classList.add("pressed");


 setTimeout(function(){
  activeButton.classList.remove("pressed");
 }, 100);
}

// Function to adding background lighting to the button when pressed

function backgroundLight(character){
  var activeButton = document.querySelector("." + character);

  var arr = ['light1','light2','light3','light4','light5','light6','light7',];

  var idx = Math.floor(Math.random() * arr.length);
  // var randomNumber = Math.floor(Math.random*7) + 1;
  // var randomClass = "light"+ randomNumber;
  var currentClass = arr[idx]; 

  activeButton.classList.add(currentClass);


 setTimeout(function(){
  activeButton.classList.remove(currentClass);
 }, 100);
}
