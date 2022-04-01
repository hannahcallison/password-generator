//Length Prompt//
function lengthPrompt (){
  if (length >= 8 && length<=128){
  lowercase ();
} else {
  alert("Please choose a number between 8 and 128");
  generatePassword();
}
}

// Lowercase Prompt//
function lowercase () {
  if (lc == true){
    selectionIndex.push("Lowercase")
    uppercase();
  } else {
    uppercase();
  }
}

// Uppercase Prompt//
function uppercase () {
  if (uc == true){
    selectionIndex.push("Uppercase");
    numbers();
  } else {
    numbers();
  }
}

// Numbers Prompt//
function numbers () {
  if (numeric == true){
    selectionIndex.push("Numerical Values");
    specialCharacters();
  } else {
    specialCharacters();
  }
}

// Special Characters Prompt//
function specialCharacters () {
  if (speChar == true){
    selectionIndex.push("Special Characters");
    validInput();
  } else {
    validInput();
  }
}

// Confirming Selections//
function validInput () {
  var valid = confirm(selectionIndex)
  if (valid == true){
    console.log("confirm success")
  } else {
    generatePassword();
  }
}