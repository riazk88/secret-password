// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function generatePassword () {
  var psswrdLength = prompt("How many characters would you like your password to be? (please choose a number between 8 to 128)");
  if (generatePassword < 8 || generatePassword > 128)
  return false;
  alert ("Invalid, please try again.");
  if (generatePassword > 8 || generatePassword < 128)
  return 
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
