function generatePassword () {
  var promptLength = Number(prompt("How many characters would you like your password to be? (please choose a number between 8 to 128)"));
  if (isNaN(promptLength) || promptLength < 8 || promptLength > 128) 
  promptLength = Number (prompt("Invalid, please try again."));

  var lowercase = confirm("Do you want lowercase characters?");
  var uppercase = confirm("Do you want uppercase characters?");
  var numbers = confirm("Do you want numbers?");
  var symbols = confirm("Do you want special characters?");

  if (!(lowercase && uppercase && numbers && symbols)) {
    alert ("Please pick at least one character type.");
    lowercase = confirm("Do you want lowercase characters?");
    uppercase = confirm("Do you want uppercase characters?");
    numbers = confirm("Do you want numbers?");
    symbols = confirm("Do you want special characters?");
  }

  function generatePassword (length = promptLength) {
    var lowercase = 'abcdefghijklmnopqrstuvwxyz';
    var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var numbers = '0123456789';
    var symbols = '!@#$%^&*(){}[]=<>/,.';

    var all = uppercase + lowercase + numbers + symbols;

    var password = '';

    for (i = o; i < promptLength; i ++) {
      result += characters.charAt(Math.floor(Math.random() * promptLength));
    }
    
    return password;
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);