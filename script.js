// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialChar = ['!', '#', '$', '%', '&', '(', ')', '*', '+', '-', '"', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~']
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var userChars = []
// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  userChars =[]
  var length = parseInt(prompt("How long would you like your password to be? It must be between 8-128 characters"))
  if (confirm("Would you like speacial characters")) {
    userChars.push(specialChar)
  }
  if (confirm("Would you like  lowercase letters")) {
    userChars.push(lowerCase)
  }
  if (confirm("Would you like uppercase letter")) {
    userChars.push(upperCase)
  }
  if (confirm("Would you like numbers")) {
    userChars.push(nums)
  }
  console.log(userChars)
  if (length < 8 || length > 128) {
    alert("Your password is not between 8 and 128 characters")
    return ""
  } else if (userChars.length === 0) {
    alert("You must select at least one character type")
    return ""
  } else {
    var password = ""
    for (let i = 0; i < length; i++) {
      var randomCharacterType = Math.floor(Math.random()* userChars.length)
      var randomCharacter = Math.floor(Math.random()* userChars[randomCharacterType].length)
      var randomActualCharacter = userChars[randomCharacterType][randomCharacter] 
      password = password + randomActualCharacter
      // [[a,b,c],[1,2,3]]
    }
     console.log(password)
     return password
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
