

function datetimer(){
let D=new Date();

let date = D.getDate();
let month = D.getMonth()+1;
let year = D.getFullYear();
let h = D.getHours();
let minutes = D.getMinutes();
let seconds = D.getSeconds();
let Session='AM';
if (h>12){
    h=h-12;
     Session='PM'
}

let di =date+" "+month+" "+year+" "+" "+h+":"+minutes+":"+seconds+' '+Session;
document.getElementById("result").innerHTML=di;
setTimeout(datetimer,1000);


}
datetimer();    