// Assignment code here

function promptMe(){
  var PWLength = parseInt(window.prompt("Please enter length of password between 8-128:"));
  var PWLength = String(window.confirm("Do you want to include lowercase?"));
  var PWLength = String(window.confirm("Do you want to include uppercase?"));
  var PWLength = parseInt(window.confirm("Do you want to include numeric characters?"));
  var PWLength = symbol(window.confirm("Do you want to include special characters?"));

  if (PWLength) {
    if (PWLength > 128){

    }
    console.log("Your number (" + number + ") is matches requirements", "");
  }  
else {
    parseInt(prompt("Your number (" + number + ") is above 128. Please enter a number from 8 to 100", ""));
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






//DOM elements
const resultEl = document.getElementByID('result');
const lengthtEl = document.getElementByID('length');
const numbersEl = document.getElementByID('numbers');
const uppercaseEl = document.getElementByID('uppercase');
const lowercaseEl = document.getElementByID('lowercase');
const symbolsEl = document.getElementByID('symbols');
const generateEl = document.getElementByID('generate');






const randomFunc = {
  lower: getRandonLower,
  upper: getRandonUpper,
  number: getRandonNumber,
  symbol: getRandonSymbol

};






//Random functions

function getRandonLower(){
  return String.fromCharCode(Math.floor(Math.random() * 26)  + 97);
}

function getRandonUpper(){
  return String.fromCharCode(Math.floor(Math.random() * 26)  + 65);
}
function getRandonNumber(){
  return String.fromCharCode(Math.floor(Math.random() * 10)  + 48);
}

function getRandonSymbol(){
  const symbol = ''
  return String[Math.floor(Math.random() * symbols.length)];
}
