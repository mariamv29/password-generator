// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", generatePassword);

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

//Password variable declaration
var passwordText = document.querySelector("#password");

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

  //Different password criterias
  var confirmNumericCharacters = confirm(
    "select OK to include numeric characters"
  );

  var confirmSymbolsCharacters = confirm(
    "Select OK to include symbol characters"
  );

  var confirmupperCaseCharacters = confirm(
    "Select OK to include upper case characters"
  );

  var confirmlowerCaseCharacers = confirm(
    "Select OK to include lower case characters"
  );
  //variable to contain users selections
  var userSelectionOptions = {
    length: confirmLength,
    symbols: confirmSymbolsCharacters,
    numbers: confirmNumericCharacters,
    upperCase: confirmupperCaseCharacters,
    lowerCase: confirmlowerCaseCharacers,
  };

  return userSelectionOptions;
}

//if in the user selection options, symbols is true then push symbols array, if boolean is true then add global symbols array into a new array

function writePassword() {
  var userSelectionOptions = generatePassword();
  var combinedArray = [];
  if (userSelectionOptions.symbols) {
    combinedArray = combinedArray.concat(userSelectionOptions.symbols);
  }
  if (userSelectionOptions.numbers) {
    combinedArray = combinedArray.concat(userSelectionOptions.numbers);
  }
  if (userSelectionOptions.upperCase) {
    combinedArray = combinedArray.concat(userSelectionOptions.upperCase);
  }
  if (userSelectionOptions.lowerCase) {
    combinedArray = combinedArray.concat(userSelectionOptions.lowerCase);
  }
  if (userSelectionOptions.length) {
    combinedArray = combinedArray.concat(userSelectionOptions.length);
  }
  writePassword();
  // loop over based on number on length

  for (var i = 0; i < combinedArray.length; i++) {
    if (!userSelectionOptions[i].combinedArray) {
      window.alert("Your password has been created: combinedArray.concat[i]");
    }
  }
}
// save to its own var then print to DOM element

passwordText.value = password;
