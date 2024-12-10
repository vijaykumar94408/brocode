// // construtor method to calculate two inputs for sub and addition with accumulator 
// function Constr(){
//     this.acc=function(acc){
//         this.acc=acc;
//     }
//     this.read=function(){
//         this.a = +prompt('enter a value')
//         this.b = +prompt('enter b value')

//     };
//     this.add=function(){
//         return (this.a+this.b)+this.acc;
//     };
//     this.sub=function(){
//         return (this.a-this.b)+this.acc;
//     };

    
// }
// let res =new Constr();

// res.read();
// res.acc(1);
// alert('this is subtraction'+res.sub());
// alert('this is addition'+res.add());
// // alert('enter a value');
// // alert('enter b value');


// used optional-chaining for and nullish operator
const user = {
    name: "Alice",
    profile: {
        email: "alice@example.com",
        preferences: {
            theme: "dark",
        },
    },
    friends: ["Bob", "Charlie"],
};
console.log(user?.profile??'ucdsfg')


// closure method 
function thisIsOuterFunction(){
    let counter = 0;
    function innerFunction(){
        counter++;
        console.log(counter);
    }
    return {innerFunction};
}
let outer=thisIsOuterFunction();
outer.innerFunction();
outer.innerFunction();



// func



function counter(){
    count=0
   
        function incremnet(){
            incre=count++;
            console.log(incre)
        }
        function decrement(){
            decre=count--;
            console.log(decre)
        }
        function reset(){
            reset1=count=0
            console.log(reset1)
        }
        return {incremnet,decrement,reset};
    }
   


    
fina=counter();
fina.incremnet();
fina.decrement();
fina.incremnet();
fina.incremnet();
fina.incremnet();






