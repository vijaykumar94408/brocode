let labelcount=document.getElementById('labelcount');
let increasecount=document.getElementById('increase');
let decreasecount=document.getElementById('decrease');
let reset1=document.getElementById('Reset');

let count=0;
increasecount.onclick=function(){
    count+=1;
    labelcount.textContent=count;
}
decreasecount.onclick=function(){
    count-=1;
    labelcount.textContent=count;
}
reset1.onclick=function(){
    count=0;
    labelcount.textContent=count;
}




