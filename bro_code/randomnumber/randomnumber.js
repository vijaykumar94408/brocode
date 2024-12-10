// const max=110;
// let vara =Math.floor(Math.random()*(max-min))+min;
// console.log(vara);
let roll=document.getElementById('start');
let result=document.getElementById('roll');

let min=1;
let max=5;

roll.onclick=function(){
     let ranodmgenerated=Math.floor(Math.random()*max)+min;
    result.textContent=ranodmgenerated;

}