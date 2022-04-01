// Instructions//
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// I  need help with adding a selection index confirmation and debugging when first landing on the page//

//Global Variables//
var lcChar = ("abcdefghijklmnopqrstuvwxyz");
var upChar = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
var numChar = ("0123456789");
var speChar = ("!@#$%^&*_+-=;':<");

//Main Function//
function generatePassword(){
  //Local Variables//
  var length = prompt("Length, between 8 and 128 characters")
  var lengthInt = parseInt(length, 10)
  var lc = confirm("Lowercase?")
  var uc = confirm("Uppercase?")
  var numeric = confirm("Numeric Values?")
  var spChar = confirm("Special Characters?")
  var options = "";

  //Validate Length choice//
  //if invalid length, return empty string//
  if (lengthInt < 8 || lengthInt  > 128 || isNaN(lengthInt)){
    alert("Please choose a number between 8 and 128")
    return "";
  }
  //If user selects lowercase add lowercase string to options//
  //If lowercase undesired, do not add lowercase string to options//
  if (lc == true){
    options += lcChar
  } else {
    options += ""
  }
  //If user selects uppercase add uppercase string to options//
  //If uppercase undesired, do not add uppercase string to options//
  if (uc == true){
    options += upChar
  }else {
    options += ""
  }
  //If user selects numbers add numbers array to options//
  //If numbers undesired, do not add numbers string to options//
  if (numeric == true){
    options += numChar
  } else {
    options += ""
  }
  //If user selects special characters add special characters array to options//
  //If special characters undesired, do not add special characters string to options//
  if (spChar == true){
    options += speChar
  } else {
    options += ""
  }
  //Select a random character based on length//
  //New  string 'options' has user selections so we can generate new string from desired criteria//
  //Randomizes characters in new options string//
  let password = "";
  for (var i=0; i < lengthInt ; i++){
    password += options.charAt(Math.floor(Math.random()  * options.length)
    );
  }
  //Adds new string to password input//
  return password;
}

// Assignment Code, DO NOT EDIT ANTHING  BELOW THIS LINE
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

generatePassword()