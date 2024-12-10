console.log(`this is alert`)
//window.alert(`this is alert`)
document.getElementById(`submit`).onclick=FileUpload;
function FileUpload(){
    document.getElementById("form successful").innerHTML=`submitted successfully `
}