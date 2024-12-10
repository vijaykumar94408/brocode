const inputvalue =document.getElementById('input');
const button =document.getElementById('button');
const list=document.getElementById('tasklist');

button.addEventListener('click',addTASK);

// WRITING METHOD TO CALL WHEN CLICKED ADD BUTTON 
function addTASK(){
    const taskvalue=inputvalue.value.trim();
    if(taskvalue===''){
        alert('Please enter a task');
        return;
    }
      const taskitem=document.createElement('li');
      taskitem.textContent=taskvalue;

       const removebutton=document.createElement('button');
        removebutton.textContent="Remove";
       
        removebutton.addEventListener('click',()=>taskitem.remove());
    




list.appendChild(taskitem);
taskitem.appendChild(removebutton);
inputvalue.value='';

}