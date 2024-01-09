// Assignment Code
var generateBtn = document.querySelector("#generate");




function askCriteriaQuestions() {
  var uppercase, lowercase, numbers, specialChars;
  uppercase = confirm('Click OK to include uppercase characters?');
  lowercase = confirm('Click OK to include lowercase characters?');
  numbers = confirm('Click OK include numbers characters?');
  specialChars = confirm('Click OK to include special characters?');

  return {uppercase, lowercase, numbers, specialChars};
}



function generatePassword() {
  var formula = '';
  var generatedPassword = '';


  // validation for the password generator
  var validators = {minLength: 8, maxLength: 128};

  // criteria for generating a password
   var criteria = {
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    numbers: '0123456789',
    specialChars: "!\"#$%&'()*+,-./:;<=>?@[]\^_`{|}~",
  };

  // Get the desired password length from the user
  var passwordLength = prompt('How many characters would you like to include in your password?');

  //If password length is not in range or is not a number, loop over the prompt below until it is in range (8-128)
  while(passwordLength < validators.minLength || passwordLength > validators.maxLength || isNaN(passwordLength)) {
    passwordLength = prompt('Password length must be between 8 and 128 characters');
  }


 /**Get desired criteria from user returning boolean values from confirm */
  var criteriaAnswers = askCriteriaQuestions();

  // if there are no selected criteria, then repeat the process until one is selected
  while(!criteriaAnswers.uppercase && !criteriaAnswers.lowercase && !criteriaAnswers.numbers && !criteriaAnswers.specialChars) {
    alert('Please select at least one criteria for your password');
     criteriaAnswers = askCriteriaQuestions();
  }



  return generatedPassword;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
