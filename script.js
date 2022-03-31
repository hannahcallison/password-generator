var lcChar = ["abcdefghijklmnopqrstuvwxyz"];
var upChar = ["]ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var numChar = ["0123456789"];
var speChar = ["!@#$%^&*()"];
// var selectionIndex = passLength;
var length = prompt("Length, between 8 and 128 characters")
// var passLength = length
var lc = confirm("Lowercase?")
var uc = confirm("Uppercase?")
var numeric = confirm("Numeric Values?")
var spChar = confirm("Special Characters?")
var selectionIndex = ["Your Selections: " + length]
var valid = confirm(selectionIndex) 
var selectionIndex = ["Your Selections: " + length]
var valid = confirm(selectionIndex)

console.log(upChar[4])

// Main Function//
function generatePassword(){
  lengthPrompt();
  return "password";
}

//Length Prompt//
function lengthPrompt (){
  if (length >= 8 && length<=128){
  console.log("success");
  // console.log(passLength)
  lowercase ();
} else {
  alert("Please choose a number between 8 and 128");
  generatePassword();
}

// Lowercase Prompt//
function lowercase () {
  if (lc == true){
    uppercase();
  } else {
    uppercase();
  }
}


// Uppercase Prompt//
function uppercase () {
  if (uc == true){
    console.log("uppercase success");
    numbers();
  } else {
    console.log("no uppercase");
    numbers();
  }
}

// Numbers Prompt//
function numbers () {
  if (numeric == true){
    console.log("number success");
    specialCharacters();
  } else {
    console.log("no numbers");
    specialCharacters();
  }
}

// Special Characters Prompt//
function specialCharacters () {
  if (spChar == true){
    console.log("Special Character success")
    validInput();
  } else {
    console.log("no Special Characters")
    validInput();
  }
}

// Confirming Selections//
function validInput () {
  if (valid = true){
    console.log("confirm success")
  } else {
    console.log("confirm not success")
  }
}

// console.log(specialCharacters*numbers*uppercase*lowercase*lengthPrompt)

// Randomizer//
// for (var i=0; i <= passLength; i++) {
  // var newPassword = Math.floor(Math.random() * lowercase * uppercase * numbers * specialCharacters)
  // document.getElementbyId("password").value =password;
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
