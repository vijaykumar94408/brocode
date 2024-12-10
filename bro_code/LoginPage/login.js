let  login = document.getElementById('login-button').addEventListener('click',()=>{
let logined=false;
let user = document.getElementById('username').value;
let password=document.getElementById('password').value;
let result=document.getElementById('result');
let user1 = "admin";
let password1='123';
if(!logined){
    if(user===user1 && password===password1){
        logined=true;
        result.textContent='Successfully logined with valid credentials';
        setTimeout(()=>{
            window.location.href='Hompage.html';},1000);

        }


else{
    result.textContent='Invalid credentials !';
}


}

});