// Assignment Code
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

var lower = randomLower;
var upper = randomUpper;
var number = randomNum;
var symbol = randomSymbol;

function userPassword() {
  passLength = prompt("How many characters would you like to use?");
  if (passLength >= 8 && passLength <= 128) {
    randomLower = confirm("Would you like to include a lowercase letter?");
    randomUpper = confirm("Would you like to include an uppercase letter?");
    randomNum = confirm("Would you like to include a number?");
    randomSymbol = confirm("Would you like to include a symbol?");
    if (randomLower || randomUpper || randomNum || randomSymbol) {
      generatePassword();
    } else {
      alert("You must select at least one option to generate a password.");
    }
  } else {
    alert("Password length must have at least 8 characters, no more than 128");
  }
}

function generatePassword() {
  let password = "";
  const typesCount = lower + upper + number + symbol;
  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );
  if (typesCount === 0) {
    return "";
  }
  // Create Loop
  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      password += randomFunc[funcName]();
    });
  }
  console.log(userPassword);
}

//Write Functions
function randomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function randomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function randomNum() {
  return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function randomSymbol() {
  const symbols = "!@#$%^&*()?=/";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function writePassword() {
  userPassword();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
