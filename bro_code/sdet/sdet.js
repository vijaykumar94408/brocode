

let continueprogram=true;
while(continueprogram){
let number1=parseFloat(prompt("enter first number"));
let number2=parseFloat(prompt("enter second number"));
let validoperators=['+','-','/','*']
 let selectoperator =prompt(" Example +,-,*,/ :")
 while(!validoperators.includes(selectoperator)){
    alert('this is not valid operator');
     selectoperator =prompt(" Example +,-,*,/ :");
 }

 let result;

 if (selectoperator==="+"){
    result=number1+number2;
 }
 else if (selectoperator==="-"){
    result=number1-number2;
 }
 else if (selectoperator==="*"){
    result=number1*number2;
 }
 else if (selectoperator==="/"){
    if (number2!==0){
        result=number1/number2;
    } else{
        result="cant divided by zero";
    }}
 

alert(`the result is: ${result}`);

let userchoice=prompt('do you want to continue the program? enter yes or no ');
if (userchoice!=='yes');
continueprogram=false;
alert('goodbye');

}