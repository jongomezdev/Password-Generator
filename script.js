// Assignment Code
const generateBtn = document.querySelector("#generate");

function generatePassword() {
  const totalLength = prompt(
    "How many characters should your new password be?"
  );
  if (totalLength >= 8 && totalLength <= 128) {
    alert(`Your new password will be ${totalLength} characters long.`);

    let upper = confirm("Would you like to include upper case letters?");
    let lower = confirm("Would you like to include lower case letters?");
    let special = confirm("Would you like to include special characters?");
    let number = confirm("Would you like to include numbers?");
  }
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// // // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
