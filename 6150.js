const buttons = document.querySelectorAll(".number");
const display = document.querySelector(".display");



const keypadStates = ["AC", "20", "Set to Confirm?", "zone number", "zone type", "partition", "report code 10", "input type 03 RF trans", "activate the sensor!" , "summary (shows blank)" , "alpha(shows blank)"];

let password = "6321";
let input = "";
let state = 0;


function checkPasswordAndIncrementState() {
  if (input === password) {
    setTimeout(function() {
      if (input === password) {
        display.textContent = "Beep!";
      }
    }, 1000);
  } else if (input === password + "800") {
    state = 1;
    display.textContent = keypadStates[state];
    input = "";
  } else if (input === "*56" && state === 1) {
    state = 2;
    display.textContent = keypadStates[state];
    input = "";
  } else if (input === "*" && state === 2) {
    state = 3;
    display.textContent = keypadStates[state];
    input = "";
  }
  if (display.textContent === "zone number" && state === 3) {
    display.textContent += " 00";
  }
  if (state === 3) {
    const numbers = /^\d+\*$/;
    if (numbers.test(input)) {
      state = 4;
      display.textContent = keypadStates[state];
      input = "";
    }
  }
  if (state === 4) {
    const numbers = /^\d+\*$/;
    if (numbers.test(input)) {
      state = 5;
      display.textContent = keypadStates[state];
      input = "";
    }
  }
  if (state === 5) {
    const numbers = /^\d+\*$/;
    if (numbers.test(input)) {
      state = 6;
      display.textContent = keypadStates[state];
      input = "";
    }
  }
  if (state === 6 && input === "*") {
      state = 7;
      display.textContent = keypadStates[state];
      input = ""; 
  }
  if (state === 7 && input === "*") {
    state = 8;
    display.textContent = keypadStates[state];
    input = ""; 
}
if (state === 8 && input === "*") {
  state = 9;
  display.textContent = keypadStates[state];
  input = ""; 
}
if (state === 9 && input === "*") {
  state = 10;
  display.textContent = keypadStates[state];
  input = ""; 
}
if (state === 10 && input === "*") {
  state = 3;
  display.textContent = keypadStates[state];
  input = ""; 
}
}

for (const button of buttons) {
  button.addEventListener("click", function() {
    if (this.textContent === "#") {
      input = input.slice(0, -1);
    } else {
      input += this.textContent;
    }
    display.textContent = input;
    checkPasswordAndIncrementState();
  });
}

