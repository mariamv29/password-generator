// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Assignment code here

//Criteria Arrays
var length = document.querySelector("length");
var symbols = document.querySelector("symbols");
var numbers = document.querySelector("numbers");
var passwordText = document.querySelector("password");
var generateBtn = document.querySelector("generate");

//Password variable declarations
var confirmNumericCharacter;

//Generate password function

function generatePassword() {
  var confirmLength = prompt(
    "How many characters would you like our password to contain?"
  );

  //confirm prompt answer = length of at least 8 character and no more than 128 characters
  while (confirmLength <= 8 || confirmLength >= 128) {
    alert("Password must contain between 8 to 128 characters.");
  }
}

//Different password criterias
var confirmNumericCharacter = confirm(
  "select OK to include numeric characters"
);
// while loop if answer is not one of the criterias
while (confirmNumericCharacter) {
  var confirmNumericCharacter = confirm(
    "Select OK to include numeric characters"
  );
}

//Action
var passwordCharacters = [];

if (confirmNumericCharacter) {
  passwordCharacters = passwordCharacters.concat(number);
}
console.log(passwordCharacters);

var randomPassword = "";

for (var i = 0; i < confirmLength; i++) {
  randomPassword = randomPassword =
    passwordCharacters[Math.floor(Math.random() * passwordCharacters.ength)];
  console.log(randomPassword);
}
return randomPassword;
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
