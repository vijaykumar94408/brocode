while(true){
    alert(`enter your name here `);
    let name=prompt('enter your name');
    
    if (!name){
       alert('enter a name ');
       continue;
    }
        let confirm_name=confirm(`are you ${name}?`)
        // alert(`${confirm_name}`);
    
    
    if(confirm_name){
        alert(`Thank YOU ${name}`)
        break;
        
    
    }
    
}