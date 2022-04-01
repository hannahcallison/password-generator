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

  //Validate length choice//
  //if invalid length, return empty string//
  if (lengthInt < 8 || lengthInt  > 128 || isNaN(lengthInt)){
    alert("Please choose a number between 8 and 128")
    return "";
  }

  var lc = confirm("Lowercase?")
  var uc = confirm("Uppercase?")
  var numeric = confirm("Numeric Values?")
  var spChar = confirm("Special Characters?")
  var options = "";
  var selectionIndex = [];
  selectionIndex.push(length)

  //If user selects lowercase add lowercase string to options//
  //If lowercase undesired, do not add lowercase string to options//
  if (lc == true){
    options += lcChar
    selectionIndex.push("Lowercase")
  } else {
    options += ""
  }
  //If user selects uppercase add uppercase string to options//
  //If uppercase undesired, do not add uppercase string to options//
  if (uc == true){
    options += upChar
    selectionIndex.push("Uppercase")
  }else {
    options += ""
  }
  //If user selects numbers add numbers array to options//
  //If numbers undesired, do not add numbers string to options//
  if (numeric == true){
    options += numChar
    selectionIndex.push("Numbers") 
  } else {
    options += ""
  }
  //If user selects special characters add special characters array to options//
  //If special characters undesired, do not add special characters string to options//
  if (spChar == true){
    options += speChar
    selectionIndex.push("Special Characters")
  } else {
    options += ""
  }
  // To verify at least one criteria (ex. length) was chosen, otherwise null//
  if (options == ""){
    alert("Please choose at least one criteria, not including length.");
    return null;
  }

  // Confirming user selection, otherwise null//
  selectionIndex = "Your Selections: " + selectionIndex.join(", ")
  if (confirm(selectionIndex) === false){
    return null;
  }

  //Select a random character based on length//
  //New  string 'options' has user selections so we can generate new string from desired criteria//
  //Randomizes characters in new 'options' string//
  let password = "";
  for (var i=0; i < lengthInt ; i++){
    password += options.charAt(Math.floor(Math.random()  * options.length)
    );
  }
  //Adds new string to password input//
  return password;
}

// Highlights and copies new password to user clipboard//
var passwordSelect = document.querySelector("#password") 
passwordSelect.addEventListener("click", function(){
  passwordSelect.select();
  navigator.clipboard.writeText(passwordSelect.value);
  alert(passwordSelect.value + " copied to the clipboard!")
})

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
