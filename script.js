var symbolsArr = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

var numbersArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var lowercaseArr = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

var uppercaseArr = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
]

function generatePassword() {
  var passwordLength = Number(prompt("How many characters would you like your password to be? (please choose a number between 8 to 128)"));

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128)
  passwordLength = Number (prompt("Invalid, please try again."));

  var lowercase = confirm("Do you want lowercase characters?");
  var uppercase = confirm("Do you want uppercase characters?");
  var numbers = confirm("Do you want numbers?");
  var symbols = confirm("Do you want special characters?");

  if (!(lowercase || uppercase || numbers || symbols)) {
    alert ("Please pick at least one character type.");
    lowercase = confirm("Do you want lowercase characters?");
    uppercase = confirm("Do you want uppercase characters?");
    numbers = confirm("Do you want numbers?");
    symbols = confirm("Do you want special characters?");
  }
  var passwordOptions = {
    length: passwordLength,
    hasSpecialCharacters: symbols,
    hasNumericCharacters: numbers,
    hasLowerCasedCharacters: lowercase,
    hasUpperCasedCharacters: uppercase,
  };

  return passwordOptions;
}

function generate() {
    var passwordOptions=generatePassword();
    var passwordChar=[];
    var lowercaseChar=[];

    // console.log(passwordOptions);

    if (passwordOptions.hasLowerCasedCharacters) {
      for (var i=0; i < passwordOptions.length; i++) {
        var lowercaseChar = lowercaseArr[Math.floor(Math.random() * passwordOptions.length)];
        passwordChar.push(lowercaseChar);
        // console.log(`passwordChar = ${passwordChar}`);
      }
    }
    var uppercaseChar=[];
    if (passwordOptions.hasUpperCasedCharacters) {
      for (var i=0; i < passwordOptions.length; i++) {
        var uppercaseChar = uppercaseArr[Math.floor(Math.random() * passwordOptions.length)];
        passwordChar.push(uppercaseChar);
        // console.log(`passwordChar = ${passwordChar}`);
      }
    }
    var numbersChar=[];
    if (passwordOptions.hasNumericCharacters) {
      for (var i=0; i < passwordOptions.length; i++) {
        var numbersChar = numbersArr[Math.floor(Math.random() * passwordOptions.length)];
        passwordChar.push(numbersChar);
        // console.log(`passwordChar = ${passwordChar}`);
      }
    }
    var symbolsChar=[];
    if (passwordOptions.hasSpecialCharacters) {
      for (var i=0; i < passwordOptions.length; i++) {
        var symbolsChar = symbolsArr[Math.floor(Math.random() * passwordOptions.length)];
        passwordChar.push(symbolsChar);
        // console.log(`passwordChar = ${passwordChar}`);
      }
    }

    var finalPasswordValue = [];
    for (var i=0; i < passwordOptions.length; i++) {
      var finalPassword = passwordChar[Math.floor(Math.random() * passwordChar.length)];
      finalPasswordValue.push(finalPassword);
      console.log(`finalPassword = ${finalPasswordValue}`);
    }

    return finalPasswordValue.join('');



    // var finalChar=passwordChar[Math.floor(Math.random() * passwordOptions.length)];

  // function generate () {
  //   userPassword = "";
  //   passwordCharSet = "";
  //   if (lowercaseInput) {
  //     passwordCharSet += lowercase;
  //   }
  //   if (uppercaseInput) {
  //     passwordCharSet += uppercase;
  //   }
  //   if (numbersInput) {
  //     passwordCharSet += numbers;
  //   }
  //   if (symbolsInput) {
  //     passwordCharSet += symbols;
  //   }

  //   passwordLength = Number(passwordLengthInput);

  //   var lowercase = 'abcdefghijklmnopqrstuvwxyz';
  //   var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  //   var numbers = '0123456789';
  //   var symbols = '!@#$%^&*(){}[]=<>/,.';
  //   lowercaseInput = document.getElementById("lowercase");
  //   uppercaseInput = document.getElementById("uppercase");
  //   numbersInput = document.getElementById("numbers");
  //   symbolsInput = document.getElementById("symbols");
  //   passwordLengthInput = document.getElementById("passwordLength")

  //   for (i = 0; i < passwordLength; i ++) {
  //     userPassword += passwordCharSet.charAt(Math.floor(Math.random() * passwordCharSet.passwordLength));
  //   }

  //   return password;
  // }
}

// Write password to the #password input
function writePassword() {
  var password = generate();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);