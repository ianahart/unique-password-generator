// Assignment Code
var generateBtn = document.querySelector("#generate");



function generatePassword() {
  var formula = '';
  var generatePassword = '';


  // validation for the password generator
  var validators = {minLength: 8, maxLength: 128};

  // Get the desired password length from the user
  var passwordLength = prompt('How many characters would you like to include in your password?');

  //If password length is not in range or is not a number, loop over the prompt below until it is in range (8-128)
  while(passwordLength < validators.minLength || passwordLength > validators.maxLength || isNaN(passwordLength)) {
    passwordLength = prompt('Password length must be between 8 and 128 characters');
  }

  return generatePassword;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
