// Assignment code here

function promptMe(){
  var Length = parseInt(window.prompt("Please enter length of password between 8-128:"));

  if (isNaN(Length)){
    window.alert("Please enter a valid Number between 8 to 128.")
    return
  }

  if (Length < 8 || Length > 128){
    window.alert("Password length must be between 8 to 128.")
    return
  }

  var Lower = String(window.confirm("Do you want to include lowercase?"));
  var Upper = String(window.confirm("Do you want to include uppercase?"));
  var Number = parseInt(window.confirm("Do you want to include numeric characters?"));
  var Symbol = Symbol(window.confirm("Do you want to include special characters?"));

  if(PWLower === false && PWLNumber === false && PWUpper === false && PWSymbol === false){
    console.log("Atleast one character type should be selected. Please try again. ")
    return

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
const resultEl = document.getElementById('result');
const lengthtEl = document.getElementById('length');
const numbersEl = document.getElementById('numbers');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');



const randomFunc = {
  lower: getRandonLower,
  upper: getRandonUpper,
  number: getRandonNumber,
  symbol: getRandonSymbol

};
//Generate event listener
generateEl.addEventListener('click', () =>{
  const length = +lengthtEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbercaseEl.checked;
  const hasSymbol = symbolcaseEl.checked;

  
resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);

});

//generat password function
function generatePassword(lower, upper, number, symbol, length){

  let generatePassword = '';
  const typesCount = lower + upper + number + symbol;
  
  const typesArr = [{lower}, {upper}, {number}, {symbol}].filter
  (item => Object.values(item)[0]);

  if(typesCount === 0){
    return '';
  }

  for(let i=0; i< length; i += typesCount){
    typesArr.forEach(type =>{
      const funcName = Object.keys(type)[0];

      generatePassword  += randomFunc[funcName]();
    });
  }
  const finalPassword = generatePassword.slice(0, length);
  return finalPassword;
}




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
