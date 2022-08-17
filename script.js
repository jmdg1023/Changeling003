// Assignment code here

function promptMe(){
   
  var Length = parseInt(window.prompt("Please enter length of password between 8-128:"));

  if (isNaN(Length)){
    window.alert("Please enter a valid Number between 8 to 128.")
    return
  }

  else if (Length < 8 || Length > 128){
    window.alert("Password length must be between 8 to 128.")
    return
  }
  var choiceArr = []
  //var Lower = String(window.confirm("Do you want to include lowercase?"));
  // var Upper = String(window.confirm("Do you want to include uppercase?"));
  // var Number = parseInt(window.confirm("Do you want to include numeric characters?"));
  // var Symbol = String(window.confirm("Do you want to include special characters?"));

  if (confirm("Do you want to include lowercase in your password?")){
    choiceArr = choiceArr.concat(getRandomLower());
    console.log(choiceArr);
    return
  }
  if (confirm("Do you want to include upperrcase in your password?")){
    choiceArr = choiceArr.concat(getRandomUpper());
    return
  }
  if (confirm("Do you want to include numbers in your password?")){
    choiceArr = choiceArr.concat(getRandomNumber());
    return
  }
  if (confirm("Do you want to include symbols in your password?")){
    choiceArr = choiceArr.concat(getRandomSymbol());
    return
  }


 
 
  if(Lower === false && Number === false && Upper === false && Symbol === false){
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

//Generate event listener---issue
// generateEl.addEventListener('click', () =>{
//   const length = + lengthEl.value;
//   const hasLower = lowercaseEl.true;
//   const hasUpper = uppercaseEl.confirm;
//   const hasNumber = numbercaseEl.confirm;
//   const hasSymbol = symbolcaseEl.confirm;

  
// resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);

// });




//DOM elements
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const numbersEl = document.getElementById('numbers');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');


const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol

};

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

function getRandomLower(){
  return String.fromCharCode(Math.floor(Math.random() * 26)  + 97);
}

function getRandomUpper(){
  return String.fromCharCode(Math.floor(Math.random() * 26)  + 65);
}
function getRandomNumber(){
  return String.fromCharCode(Math.floor(Math.random() * 10)  + 48);
}

function getRandomSymbol(){
  const symbol = ''
  return String[Math.floor(Math.random() * symbols.length)];
}
