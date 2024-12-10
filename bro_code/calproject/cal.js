document.getElementById('button1').onclick=additionOF;
document.getElementById('button2').onclick=subtractionOF;
document.getElementById('button3').onclick=MultiplicationOF;
document.getElementById('button4').onclick=DivisionOF;


// this is addition block
function additionOF(){
let x =document.getElementById('firstnumber').value;
let y =document.getElementById('secondnumber').value;
let add;
add=parseInt(x)+parseInt(y)
document.getElementById('result').innerHTML=add;

}
// this is subtraction block 

function subtractionOF(){
    let x =document.getElementById('firstnumber').value;
    let y =document.getElementById('secondnumber').value;
    let sub;
    sub=parseInt(x)-parseInt(y)
    document.getElementById('result').innerHTML=sub;
    
    }

    // this is multiplication block
function MultiplicationOF(){
        let x =document.getElementById('firstnumber').value;
        let y =document.getElementById('secondnumber').value;
        let mul;
        mul=parseInt(x)*parseInt(y)
        document.getElementById('result').innerHTML=mul;
        
        }

// this is division block
            function DivisionOF(){
                let x =document.getElementById('firstnumber').value;
                let y =document.getElementById('secondnumber').value;
                let div;
                div=parseInt(x)/parseInt(y)
                document.getElementById('result').innerHTML=div;
                }