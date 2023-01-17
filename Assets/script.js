var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialSymbols = ["!", "$", "~", "?", "#", "%"];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(){
  var password = generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


var generatePassword = function (){
  var charcSelect = [];
  var isUppercase = window.confirm ("Do you want to include Uppercase letters in your password?")
  console.log(isUppercase);
  if (isUppercase) {
    for (var i of upperCase) {
        charcSelect.push(i)
    };
    console.log(charcSelect);
  }


  // var pwLength = window.prompt ("How many characters between 8 and 128 do you want to have in your password?")
  // var pwLower = window.prompt ("Do you want lowercase letters, yes or no?")
  // var pwUpper = window.prompt ("Do you want Uppercase letters, yes or no?")
  // var pwNumber = window.prompt ("Do you want numbers, yes or no?")
  // var pwSpecial = window.prompt ("Do you want Special Characters, yes or no?")

  // if (pwLower == "yes"){

  // }
}