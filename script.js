// Assignment Code
var generateBtn = document.querySelector("#generate");

// arrays neeed for project

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lCase = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uCase = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K','L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '/', '{', '}', '[', ']', '|'];                             

                                                                                                                                                                                                                                                                                           
// variables for functions                                                                                                                       
var inputAnswer = '';
var upCaseRslt = '';
var lcase = '';
var numAnsr = '';
var symbolAnswer = '';
var everythingOk = false;
var i = 0 ;
var finish = '';
var answer = '';
c = '';

 


function houseKeeping () {
  i = 0;
  goodAnswer = false;
  everythingOk = false;
}

// function to input and check length

function inputLength( ){   
   
 while(goodAnswer === false){
      var lanswer = prompt("please enter length between 8 and 128 characters"); 
      var truNum = isNaN(lanswer);            
      if(lanswer < 8 || lanswer > 128 || lanswer === null || lanswer === ''){
        alert("answer must be greather than or equal to 8 or less than or equal to 128");
      }else if(truNum) {
          alert("input must be nuneric");
      }else{
         goodAnswer = true;
         return lanswer;
         break;
      }
    }      
  }


    
 // function to get uppercase option  

function upCase() {
    var upperCase = confirm("do you want to include upper case option\n ok = yes  cancel = no");
   return upperCase;                                                                                        
 }                                                                                               

 // function to get lowercase option 

function lowCase() {
   var lowerCase = confirm("do you want to include lower case option\n ok = yes  cancel = no");
  return lowerCase;                                                                                                                                                                                
}   

// function to get number option 

function numOpt() {
  var numOption = confirm("do you want to include number case option\n ok = yes  cancel = no");
  return numOption;                                                                            
}

// function to get symbol option 

function simbl() {
   symbol = confirm("do you want to include symbol case option\n ok = yes  cancel = no");
  return symbol;                                                                                    
} 

// function to collect userr input 


function userInput(){ 
 everythingOk = false; 
 while(everythingOk === false){
 //  answer = inputLength();  
     upCaseRslt = upCase();
     lcase = lowCase();                                                                                                                                      
     numAnsr = numOpt();
     symbolAnswer = simbl(); 
     if(upCaseRslt === false && lcase === false && numAnsr === false && symbolAnswer === false){
         alert("at least one option must be checked in order to create password");                
       }else{                                                                                         
         everythingOk = true;                                                                                                                                                                                                                                                   
       }        
     } 
  }     


// function for uppercase

function upperCase(){       
    var upCaseResult = Math.floor(Math.random() * 26);
     c = c + uCase[parseInt(upCaseResult)];
    }
   
   // function for lower case

 function lowerCase() {
    var lowerCase = Math.floor(Math.random() * 26);
    c = c + lCase[parseInt(lowerCase)]; 
    }  
  
// function for numbers

function numbrs(){
     numAnsrRslt = Math.floor(Math.random() * 10);
     c = c + numbers[parseInt(numAnsrRslt)];
     } 

// function for symbols

 function getNum(){  
    var symbol = Math.floor(Math.random() * 20);
     c = c + symbols[parseInt(symbol)];
    } 

// process function uses user input length and true / false answer to questions regarding 
// password generation . if user answered yes to all input options or less than all options
// function is designed to only respond to selections that are true ( user cliced "ok" when deciding)


function process() {
  while(parseInt(i) <= parseInt(answer)) { 
    if(upCaseRslt === true) {
      upperCase();
      i += 1;
      if( parseInt(i) === parseInt(answer)){
          break;
      }
      }

    if(lcase === true) {
      lowerCase();
      i += 1;
      if( parseInt(i) === parseInt(answer)){
        break;
      }
      }

    if(numAnsr === true) {
       numbrs();
      i += 1;
      if( parseInt(i) === parseInt(answer)){
        break;
      }
      }  

    if(symbolAnswer === true) {
      getNum();
     i += 1;
     if( parseInt(i) === parseInt(answer)){
       break;
     }
     }

}
}  
// where all functions are executed


function generatePassword() {
  houseKeeping();
  answer = inputLength(); 
  userInput()
  process();
  passwordResult = c;
  c = '';
  return passwordResult; 
  
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  //
  

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





