let userGuess = document.getElementById("user_number-guess");
let submit = document.getElementById("submit");
let attempts_Count = document.getElementById("attempts_Count");
let guess_between = document.getElementById("guess_between");
let show_result = document.getElementById("show_result");
// console.log(submit);

let liste = [1];
let liste2 = [100];

let random = Math.ceil(Math.random() * 100);
let count = 0;
submit.addEventListener("click", (e) => {
  count++;
  attempts_Count.innerText = `Number of Attempts: ${count}`;

  e.preventDefault();

  if (random == userGuess.value) {
    show_result.innerText = "CONGRULATIONS THİS NUMBER İS RİGHT!!";
    setTimeout(() => {
      window.location.reload(true);
    }, 5000);
    setTimeout(() => {
      show_result.innerText = "Play Again";
    }, 3000);
  } else if (userGuess.value > 100) {
    show_result.innerText = "CHOOSE BETWEEN 1-100 NUMBERS!!";
    setTimeout(() => {
      window.location.reload(true);
    }, 3000);
  } else if (random > userGuess.value) {
    liste.push(userGuess.value);
    show_result.innerText = "PLEASE HIGHER";
    guess_between.innerText =  ` ${liste[liste.length - 1]} - ${
        liste2[liste2.length - 1]}` ;
  } else {
    liste2.push(userGuess.value);

    show_result.innerText = "PLEASE LOWER";
    guess_between.innerText = ` ${liste[liste.length - 1]} - ${
      liste2[liste2.length - 1]}  `;
  }
});
