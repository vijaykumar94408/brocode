
function timer() {
    const date = new Date();
    const minutes = date.getMinutes(); // Add parentheses
    const hours = date.getHours(); 
    const seconds=date.getSeconds();   // Add parentheses
    const resi = `${minutes}: ${hours}:${seconds}`;     // Compute the result
    document.getElementById('timer').textContent = resi; // Update the content
}

// Call the timer function every second to keep it updated
setInterval(timer, 1000);

// Initial call to set content immediately on page load
timer();




// setTimeout(final,1000);

let  varo=[2,3,4,5,6]
let varia=varo.map(addition);
function addition (element){
    return element**2;
 
}
console.log(varia);