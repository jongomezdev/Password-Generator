// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function randomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function randomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function randomNum() {
  return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function randomSymnbol() {
  let symbols = "!@#$%^&*()?";
  return symbols[Math.floor(Math.random()) * symbols.length];
}

console.log(randomLower());
console.log(randomUpper());
console.log(randomNum());

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
