let c_to_f=document.getElementById('celsiues to farenheit');
 let f_to_c=document.getElementById('farenheit to celsiues');
 let input1=document.getElementById('input');
  let result1=document.getElementById('result');


document.getElementById('Submit').addEventListener('click',()=>{
     let inputvalueforcalculation=input1.value.trim();
    
   if(c_to_f.checked){
    let resultvalue=Number(inputvalueforcalculation)*9/5+32;
    result1.textContent=resultvalue;
   
    

   }
   else if(f_to_c.checked){
    let resultvalue1=(Number(inputvalueforcalculation)-32)*5/9;
    result1.textContent=resultvalue1;
    
   }
   else{
    result1.textContent="Please select the unit";
    
   }











});