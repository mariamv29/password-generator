// Get references to the #generate element- assignment code here
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
///Define characters that the password can contain
var upperCaseCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowerCaseCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbolsCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];
//Generate password function
function generatePassword() {
  var confirmLength = prompt(
    "How many characters would you like our password to contain?"
  );
  // validate prompt answer
  while (confirmLength <= 8 || confirmLength >= 128) {
    alert(
      "Password must contain between 8 to 128 characters! Please try again!"
    );
    return;
  }
  var passwordArray = userSelectionOptions();
  var randomPassword = generateRandomPassword(passwordArray, confirmLength);
  return randomPassword;
}
//if in the user selection options, symbols is true then push symbols array, if boolean is true then add global symbols array into a new array
function userSelectionOptions() {
  var combinedArray = [];
  var confirmNumericCharacters = confirm(
    "select OK to include numeric characters"
  );
  var confirmSymbolsCharacters = confirm(
    "Select OK to include symbol characters"
  );
  var confirmUpperCaseCharacters = confirm(
    "Select OK to include upper case characters"
  );
  var confirmLowerCaseCharacters = confirm(
    "Select OK to include lower case characters"
  );
  if (confirmNumericCharacters === true) {
    for (x of numericCharacters) {
      combinedArray.push(x);
    }
  }
  if (confirmSymbolsCharacters === true) {
    for (x of symbolsCharacters) {
      combinedArray.push(x);
    }
  }
  if (confirmUpperCaseCharacters === true)
    for (x of upperCaseCharacters) {
      combinedArray.push(x);
    }
  if (confirmLowerCaseCharacters === true)
    for (x of lowerCaseCharacters) {
      combinedArray.push(x);
    }
  return combinedArray;
}
function generateRandomPassword(array, length) {
  var selections = "";
  for (var index = 0; index < length; index++) {
    var result = array[Math.floor(Math.random() * array.length)];
    selections += result;
  }
  return selections;
}

//   userSelectionOptions.push(selections);
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
