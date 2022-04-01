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




// Global Variables//
var lcChar = "abcdefghijklmnopqrstuvwxyz";
var upChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numChar = "0123456789";
var speChar = "!@#$%^&*()";

// Main Function//
function generatePassword(){
  var length = prompt("Length, between 8 and 128 characters")
  var lengthInt = parseInt(length, 10)
  var lc = confirm("Lowercase?")
  var uc = confirm("Uppercase?")
  var numeric = confirm("Numeric Values?")
  var spChar = confirm("Special Characters?")
  var options = "";


  // Validate Length choice //
  //if invalid length, return empty string//
  if (lengthInt < 8 || lengthInt  > 128 || isNaN(lengthInt)){
    alert("Please choose a number between 8 and 128")
    return "";
  }
  // If user selected lowercase add lowercase to options//
  if (lc == true){
    options += lcChar
  }
  // If user selected uppercase add uppercase to options//
  if (uc == true){
    options += upChar
  }
  // If user selected numbers add numbers to options//
  if (numeric == true){
    options += numChar
  }// If user selected special characters add special characters to options//
  if (spChar == true){
    options += speChar
  }
  // Select a random character based on length//
  for (var i=0; i < lengthInt ; i++){
    var password = options.charAt(Math.floor(Math.random() * options.length))
  }
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


// Debug not processing information//

// Have a last confirmation//