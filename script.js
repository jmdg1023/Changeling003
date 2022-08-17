// Assignment code here
var inputLength = 8;
var choiceArr = [];
var lowerArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numbersArr =  ['0','1','2','3','4','5','6','7','8','9'];
var symbolsArr = ['!','@','#','$','%','^','&','*','(',')','-','+','=','<','>','?','/'];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var confirmPrompt = promptMe(); //T or  F
  var passwordText = document.querySelector("#password");
  
  if(confirmPrompt){
    var password = generatePassword();
    passwordText.value = password;
  } else{
    passwordText.value = "";
  }
}

//generat password function
function generatePassword(){

  var generatePassword = '';

  for(var i=0; i < inputLength; i++){
    var randomGP = Math.floor(Math.random() * inputLength);
    generatePassword = generatePassword + choiceArr[randomGP];
  }
  return generatePassword;
}

function promptMe(){
  choiceArr = [];
  inputLength = parseInt(prompt("Please enter length of password between 8-128:"));

  
  if (isNaN(inputLength) || inputLength < 8 || inputLength > 128){
    window.alert("Please enter a valid Number. Length must be between 8 to 128.");
   return false;
  }
  // var Lower = String(window.confirm("Do you want to include lowercase in your password?"));
  // var Upper = String(window.confirm("Do you want to include uppercase in your password?"));
  // var Number = parseInt(window.confirm("Do you want to include numbers in your password?"));
  // var Symbol = String(window.confirm("Do you want to include symbols characters?"));

  if (confirm("Do you want to include lowercase in your password?")){
    choiceArr = choiceArr.concat(lowerArr);
  }
  if (confirm("Do you want to include uppercase in your password?")){
    choiceArr = choiceArr.concat(upperArr);
  
  }
  if (confirm("Do you want to include numbers in your password?")){
    choiceArr = choiceArr.concat(numbersArr);
  
  }
  if (confirm("Do you want to include symbols characters?")){
    choiceArr = choiceArr.concat(symbolsArr);
  }
  return true;

  // if(Lower === false && Number === false && Upper === false && Symbol === false){
  //   console.log("Atleast one character type should be selected. Please try again. ")    
  //   return

  // }
 
}



