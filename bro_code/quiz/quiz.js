// let button=document.getElementById('button');
// let result=document.getElementById('result');

// button.onclick=()=>{
//     let selectedanswer=(document.querySelector('input[name="answer"]:checked'));
    
//     if(selectedanswer){
//         let selectanswervalue=parseInt(selectedanswer.value);


//         if (selectanswervalue===7){
//             result.textContent='Right answer!';


//      }
//         else{
//         result.textContent='Wrong answer, try again!';
//         }
//     }
//     else{
//         result.textContent='your answer is not selected,please select a option!';
//     }
// };



// hello(vijay);
// function hello(callback) {
// console.log('hello');
// callback();

// }
// function vijay(){
//     console.log('vijay');
// }

sum(displayresult,3,4);

function sum(callback,x,y){
    result=x+y;
    callback(result);

}
function displayresult(result){
    console.log(result);
}
