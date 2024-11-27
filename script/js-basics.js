function createParagraph() {
    let para = document.createElement("p");
    para.textContent = "You clicked the button!";
    document.body.appendChild(para);
  }
  
  const buttons = document.querySelectorAll("button");
  
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", createParagraph);
  }


// Угадай число
var randomNumber = Math.floor(Math.random() * 100) + 1;
console.log (randomNumber);

var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');

var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');

var guessCount = 1;
var resetButton;

function checkGuess() {
    var userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = "Предыдущие попытки: ";
      }
      guesses.textContent += " " + userGuess;

    if (userGuess === randomNumber){
        lastResult.textContent = "Ура! Ты угадал число!"
        lastResult.style.background = "green";
        lastResult.style.color = "white";
        lowOrHi.textContent = "";
        setGameOver();
    } else if (guessCount > 9){
        lastResult.textContent = "!!!КОНЕЦ ИГРЫ!!!";
        lowOrHi.textContent = "";
    setGameOver();
    } else {
        lowOrHi.style.background = "red";
        lowOrHi.style.color = "white";
        if (userGuess < randomNumber) {
            lowOrHi.textContent = "Неверно! Маленькое число, бери больше!";
          } else if (userGuess > randomNumber) {
            lowOrHi.textContent = "Неверно! Большое число, бери меньше!";
          }
        
    }
    guessCount++;
    guessField.value = "";
    guessField.focus();
}

guessSubmit.addEventListener("click", checkGuess);


function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "Начать новую игру";
    document.body.appendChild(resetButton);
    resetButton.addEventListener("click", resetGame);
  }

  function resetGame() {
    guessCount = 1;
  
    var resetParas = document.querySelectorAll(".resultParas p");
    for (var i = 0; i < resetParas.length; i++) {
      resetParas[i].textContent = "";
    }
  
    resetButton.parentNode.removeChild(resetButton);
  
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();
  
    lastResult.style.backgroundColor = "white";
  
    randomNumber = Math.floor(Math.random() * 100) + 1;
  }

// Смена регистра
function changeRegister(){
  let textInput = document.querySelector(".register-text-input").value;
  // document.querySelector(".register-text-input").textContent = textInput;
  console.log(textInput);
  let toUpperRadio = document.querySelector("#toUpper");
  let toLowerRadio = document.querySelector("#toLower");
  if (toUpperRadio.checked == true){
    textInput = textInput.toUpperCase();
    let outputRegister = document.createElement("p");
    outputRegister.textContent = textInput;
    document.getElementsByClassName("correct-register")[0].appendChild(outputRegister);
  }
  else if (toLowerRadio == true){
    textInput = textInput.toLowerCase();
    let outputRegister = document.createElement("p");
    outputRegister.textContent = textInput;
    document.getElementsByClassName("correct-register")[0].appendChild(outputRegister);
  }
  else if (toUpperRadio.checked == false && toUpperRadio.checked == false) {
    let outputRegister = document.createElement("p");
    outputRegister.textContent = "Вы не выбрали как преобразовать текст";
    document.getElementsByClassName("correct-register")[0].appendChild(outputRegister);
  }
}

function radioButtonChecked(){

}

let changeRegisterButton = document.querySelector(".register-submit");
changeRegisterButton.addEventListener("click", changeRegister)
