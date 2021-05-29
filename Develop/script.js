// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

///Define characters that the password can contain

var upperCase = [
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
var lowerCasedCharacters = [
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
  // console.log(
  //   "this is the numbers parameter inside our object",
  //   userSelectionOptions.numbers
  // );
  return userSelectionOptions;
}
generateBtn.addEventListener("click", generatePassword);

// Write password to the #password input
function writePassword() {
  var userSelectionOptions = generatePassword();
  var combinedArray = [];
  if (userSelectionOptions.symbols) {
    combinedArray = combinedArray.concat(symbols);
  }
  //   if (userSelectionOptions.numbers) {
  //     combinedArray = combinedArray.concat(numbers);
  //   }
  //   if (userSelectionOptions.upperCase) {
  //     combinedArray = combinedArray.concat(upperCase);
  //   }
  //   if (userSelectionOptions.lowerCase) {
  //     combinedArray = combinedArray.contact(lowerCase);
  //   }
  //   if (userSelectionOptions.length) {
  //     combinedArray = combinedArray.concat(length);
  //   }
  //   console.log(userSelectionOptions);
  //if in the user selection options, symbols is true then push symbols array, if boolean is true then add global symbols array into a new array

  // loop over based on number on length

  // save to its own var then print to DOM element
}
passwordText.value = password;

writePassword();
