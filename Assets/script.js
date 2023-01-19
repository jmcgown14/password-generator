var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialSymbols = ["!", "$", "~", "?", "#", "%", "*", "-", "@"];


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Opens up prompt windows that all you to select what you want your password to look like. 
// Confirm rather than prompt allows for a true/false statment. If cancel is chosen, nothing needs to get logged.
// Push allows us to push that chose variable into the array of CharcSelect to be randomized for password
function generatePassword() {
  var charcSelect = [];

  var pwLength = window.prompt("How many characters between 8 and 128 do you want to have in your password?")

  //Stops user from inputing too few or many characters
  while (pwLength < 8 || pwLength > 128) {
    alert("Password must be between 8 - 128 characters.")
    pwLength = window.prompt("How many characters between 8 and 128 do you want to have in your password?")
  }

  var charUpper = window.confirm("Do you want to include Uppercase letters in your password?")
  console.log(charUpper);
  if (charUpper) {
    for (var i of uppercase) {
      charcSelect.push(i)
    };
    console.log(charcSelect);
  }

  var charLower = window.confirm("Do you want to include Lowercase letters in your password?")
  console.log(charLower);
  if (charLower) {
    for (var i of lowercase) {
      charcSelect.push(i)
    };
    console.log(charcSelect);
  }

  var charSymbol = window.confirm("Do you want to include Special Symbols in your password?")
  console.log(charSymbol);
  if (charSymbol) {
    for (var i of specialSymbols) {
      charcSelect.push(i)
    };
    console.log(charcSelect);
  }

  var charNumber = window.confirm("Do you want to include Numbers in your password?")
  console.log(charNumber);
  if (charNumber) {
    for (var i of numbers) {
      charcSelect.push(i)
    };
    console.log(charcSelect);
  }

  let password = "";
  for (let i = 0; i < pwLength; i++) {
    var index = Math.floor(Math.random() * charcSelect.length);
    console.log(index);
    var computerChoice = charcSelect[index];
    console.log(computerChoice)
    // password = password + computerChoice;
    password += computerChoice
  }

  return password;
}