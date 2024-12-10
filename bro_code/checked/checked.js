let subscirbebutton=document.getElementById('checkbox');
let VISABUTTON=document.getElementById('visa');
let RUPAYBUTTON=document.getElementById('RUPAY');
let OVERSEASBUTTON=document.getElementById('OVERSEAS');
let SUBMITBUTTON=document.getElementById('SUBMITBUTTON');
let resultbox=document.getElementById('resultpage');
let resultbox2=document.getElementById('anotherpage');

SUBMITBUTTON.onclick=()=>{
    if(subscirbebutton.checked){
        resultbox.textContent=`you are subscribed`

    }
    else{
        resultbox.textContent=`you are not subscribed`
    }
    if(VISABUTTON.checked){
        resultbox2.textContent=`you are using visa`
    }
    else if(RUPAYBUTTON.checked){
        resultbox2.textContent=`you are using visa`
    }
    else if(OVERSEASBUTTON.checked){
        resultbox2.textContent=`you are using visa`
    }
    else {
        resultbox2.textContent=`you didn't selected any payment option`
    }
};