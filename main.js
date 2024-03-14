// Number Analyzer

// HTML Elements
let numEl = document.getElementById("numInput");

// Add Event Listener
numEl.addEventListener("change", analyzeNumber);

// Event Function
function analyzeNumber() {
  // Get Number from Input Element
  let numInput = Number(numEl.value);

  // Analyze Number and display results (Some are commented out so you can test your functions individually without errors coming up)
  document.getElementById("sign").innerHTML = getSign(numInput);
  document.getElementById("even-odd").innerHTML = evenOrOdd(numInput);
  document.getElementById("multiple").innerHTML = multipleOf10(numInput);
  document.getElementById("digits").innerHTML = numDigits(numInput);

  //**BONUS**//
  document.getElementById("prime").innerHTML = isPrime(numInput);
}

// Analyze Functions - Add your functions below. These should match the named functions above (e.g. getSign). When ready to test, uncomment the appropriate line in analyzeNumber before running.

function getSign(num) {
  if (num > 0) {
    out = `Pos`;
  } else if (num < 0) {
    out = `Neg`;
  } else {
    out = `Zero`;
  }
  return out;
}

function evenOrOdd(num) {
  even = num % 2;
  if (even == 0) {
    out = `${num} is even`;
  } else if (even == 1) {
    out = `${num} is odd`;
  } else {
    out = "ts dont work";
  }
  return out;
}

function multipleOf10(num) {
  plof10 = num % 10;
  if (plof10 == 0) {
    out = true;
  } else {
    out = false;
  }
  return out;
}

function numDigits(num) {
  return num.toString().length;
}
function isPrime(num) {
  i = Math.floor(Math.sqrt(num));
  i >= 2;
  i--;
  if (i == 0) {
    out = true;
  } else if (i == 1) {
    out = false;
  }
  return out;
}
