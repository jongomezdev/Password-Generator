// Assignment Code
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(passwordText.value);



// function createPass() {
//   passLength = prompt("How many characters would you like to use?");
//   if (passLength >= 8 && passLength <= 128) {
//     randomLower = confirm("Would you like to include a lowercase letter?");
//     randomUpper = confirm("Would you like to include an uppercase letter?");
//     randomNum = confirm("Would you like to include a number?");
//     randomSymbol = confirm("Would you like to include a symbol?");
//     if (randomLower || randomUpper || randNum || randomSymbol) {
//       generatePassword();
//     } else {
//       alert("You must select at least one option to generate a password.");
//     }
//   } else {
//     alert("Password length must have at least 8 characters, no more than 128");
//   }
// }

// function generatePassword() {}

// function writePassword() {
//   createPass();
// }
// console.log(writePassword());

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
