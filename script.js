// Assignment Code
var generateBtn = document.querySelector('#generate');

// generate a random index from the length of the formula string
// return the formula character at random index
function getRandomChar(formula) {
  var randomIndex = Math.floor(Math.random() * formula.length + 1);
  return formula.charAt(randomIndex);
}

// loop over the criteria keys and check if criteria answer is true,
// if it is true then append that criteria string to the formula
function createFormula(criteriaAnswers, criteria) {
  var formula = '';

  var keys = Object.keys(criteria);

  for (var i = 0; i < keys.length; i++) {
    if (criteriaAnswers[keys[i]]) {
      formula += criteria[keys[i]];
    }
  }
  return formula;
}

function askCriteriaQuestions() {
  var uppercase, lowercase, numbers, specialChars;
  uppercase = confirm('Click OK to include uppercase characters?');
  lowercase = confirm('Click OK to include lowercase characters?');
  numbers = confirm('Click OK include numbers characters?');
  specialChars = confirm('Click OK to include special characters?');

  return { uppercase, lowercase, numbers, specialChars };
}

function generatePassword() {
  var generatedPassword = '';

  // validation for the password generator
  var validators = { minLength: 8, maxLength: 128 };

  // criteria for generating a password
  var criteria = {
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    numbers: '0123456789',
    specialChars: '!"#$%&\'()*+,-./:;<=>?@[]^_`{|}~',
  };

  // Get the desired password length from the user
  var passwordLength = prompt(
    'How many characters would you like to include in your password?'
  );

  //If password length is not in range or is not a number, loop over the prompt below until it is in range (8-128)
  while (
    passwordLength < validators.minLength ||
    passwordLength > validators.maxLength ||
    isNaN(passwordLength)
  ) {
    passwordLength = prompt('Password length must be between 8 and 128 characters');
  }

  /**Get desired criteria from user returning boolean values from confirm */
  var criteriaAnswers = askCriteriaQuestions();

  // if there are no selected criteria, then repeat the process until one is selected
  while (
    !criteriaAnswers.uppercase &&
    !criteriaAnswers.lowercase &&
    !criteriaAnswers.numbers &&
    !criteriaAnswers.specialChars
  ) {
    alert('Please select at least one criteria for your password');
    criteriaAnswers = askCriteriaQuestions();
  }

  var formula = createFormula(criteriaAnswers, criteria);

  // loop over the password length until i is no longer less than the password length
  for (var i = 0; i < passwordLength; i++) {
    generatedPassword += getRandomChar(formula);
  }

  return generatedPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
