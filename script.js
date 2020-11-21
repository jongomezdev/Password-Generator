// Assignment Code
const generateBtn = document.querySelector("#generate");

function generatePassword() {
  //
  const totalLength = prompt(
    "How many characters should your new password be?"
  );
  if (totalLength >= 8 && totalLength <= 128) {
    alert(`Your new password will be ${totalLength} characters long.`);
    // Prompt user for password criteria
    let upper = confirm("Would you like to include upper case letters?");
    let lower = confirm("Would you like to include lower case letters?");
    let symbol = confirm("Would you like to include special characters?");
    let number = confirm("Would you like to include numbers?");

    let allChars = "";
    let password = "";
    //Validate user input
    if (upper) {
      allChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (lower) {
      allChars += "abcdefghijklmnopqrstuvwxyz";
    }
    if (symbol) {
      allChars += "!#$%&()*+,-./:;<=>?@^[\\]^_`{|}~";
    }
    if (number) {
      allChars += "0123456789";
    }
    //Generate password that matches the selected criteria
    for (i = 0; i < totalLength; i++) {
      password += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }
    return password;
  } else {
    alert("Your password must be 8-128 characters!!");
  }
}

// Write generated password to the text area
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// // // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
