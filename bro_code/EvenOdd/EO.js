document.getElementById('button').addEventListener('click',evenodd);
function evenodd(){
// above after click the function will be called


//let inputvalue =document.getElementById('inputnumber').value;
let inputvalue = parseInt(document.getElementById('inputnumber').value);
// if enter value is negative 
if(inputvalue<0){
    alert('Negative values are not accepted!')
    
}
else if(inputvalue%2==0)// if the number is even
{
    document.getElementById('result').innerHTML='Even Number';
} 
else { // if the number is odd
    document.getElementById('result').innerHTML='Odd Number';
}



}