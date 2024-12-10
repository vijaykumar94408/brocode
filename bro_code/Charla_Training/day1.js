
// pre-increment operator
let x=23;
console.log(`this is x value before pre-incremnet:${x} `)
let y=++x;
console.log(`this is x value after pre-incremnet:${x} `)
console.log(`this is y value after pre-incremnet:${y} `)


// post-increment operator
let p=90;
console.log(`this is p value before pre-incremnet:${p} `)
let q=p++;
console.log(`this is p value after pre-incremnet:${p} `)
console.log(`this is q value after pre-incremnet:${q} `)


// what if? variable is not declared in for loop?
for( i=0;i<5; i++){
    console.log(i)
}

// if conditions validations with '0','',' ','null','undefined','NaN','1','[]','{}','string'.

if(0){
    console.log("this is true");
}
else{
    console.log("this is false");// false
}


if(null){
    console.log("this is true");// true
}
else{
    console.log("this is false");
}

if(NaN){
    console.log("this is true");
}
else{
    console.log("this is false");// false
}



if(undefined){
    console.log("this is true");
}
else{
    console.log("this is false");//false
}


if(''){
    console.log("this is true");
}
else{
    console.log("this is false");// false
}



if(123){
    console.log("this is true");// true
}
else{
    console.log("this is false");
}

if([]){
    console.log("this is true");// true
}
else{
    console.log("this is false");
}


if({}){
    console.log("this is true");//true
}
else{
    console.log("this is false");
}

if(-1){
    console.log("this is true");//true
}
else{
    console.log("this is false");
}


// implicts type convertion 
let num='5'+5;
console.log(num);

let num='5'*5;
console.log(num);

let num='5'-5;
console.log(num);

let num='5'/5;
console.log(num);

let num='5'+5+5;
console.log(num);

let num='5'+5*5;
console.log(num);

let num=5/'5'+'string';
console.log(num);

let num='5'+5+true;
console.log(num);

let num=[]+true;
console.log(num);

let num=[]+5;
console.log(num);

let num=' '+[];
console.log(num);

let num=undefined+null;
console.log(num);

let num=NaN+'string';
console.log(num);


// switch without default case 
// if break is not implemented for any case, cases will be print untill the break statemet is encountered

let inputvalue=1;

switch(inputvalue)
{
    case 1:
        console.log(' woned a car');
        break;
        case 2:
            console.log(' woned a bike');
            break;
            case 3:
                console.log(' woned a plane');
                break;
                case 4:
                    console.log(' woned a scooty');
                    break;
                    case 5:
                        console.log(' woned a mobile');
                        break;
                        case 6:
                            console.log(' woned a laptop');
                            break;
                            default:
                                console.log('  woned nothing')
                                break;



}


// what if we push duplicate values into array? 
// what if we push null or undefined into array?
// what if 
const array=[1,2,3,4,5,6];


console.log(array.push(3));
console.log(array);
// push method returns the new length of the array

console.log(...new Set(array));// this will remove duplates from array







// array operation and methods 
let array1=[1,2,3,'vijay','vinod',34,45,'srikar',345,'a','$'];


//push method
 let result=array1.push('ramesh','li','ramesh');// we can also push multiple values at once or one at once
 console.log(array1);// it will add values at the end of array and return the new length of array

 console.log(result);

 //unshift method
 let array1=[1,2,3,'vijay','vinod',34,45,'srikar',345,'a','$'];
let result =array1.unshift('viiju',45);
console.log(result);// add one or more elements at the start of array and return the new length of array
console.log(array1);


//pop method 
let array1=[1,2,3,'vijay','vinod',34,45,'srikar',345,'a','$'];
let result=array1.pop();// remove the last element of array and return which elemenet is removed
console.log(result);

// shift method 
let array1=[1,2,3,'vijay','vinod',34,45,'srikar',345,'a','$'];
let result=array1.shift(2);// removes the first element from array and return which element is removed form array 
console.log(result);







// transforming arrays map/reduce/filter

let array=[1,2,23,34,'vijay','vinod','srikar','$',34,4,56,67];
let result=array.map(varia=>varia**6);
console.log(result);// it will return a array with exponentiation 6 for integer values and shows Nan for non integer values


//changing every string in variable to uppper case with map method
let array=['vijay','vinod','srikar','madhya'];
let result=array.map(str=>str.toUpperCase());
console.log(result);


//filter method 
let array=[1,2,3,4,5,6,7,8,9,10];
let result=array.filter(varia=> varia>5&&varia<10);// filter method with using logical operator
console.log(result);



// reduce method with using callback function
let array=[1,2,3,4,5,6,7,8,9];
let result=array.reduce((acc,element)=> acc+element);
console.log(result);


// for each method 
let array=[2,3,4,5,6,7,8,9];

let result=array.forEach(varia=>console.log(varia*4));


///SEARCHING ARRAYS METHODS

let array=[1,2,3,4,5,6,7,8,9,10];
let result=array.find(varia=> varia>5);// find method return first element which satisfies the condition
//similar to filter but return only first element
console.log(result);

let array=[1,2,3,4,5,6,7,89];
let result=array.findIndex(element=>element>10);
console.log(result);// find index of first element which satisfies the condition


let array=[23,4,'string',4,5,6];
console.log(array.includes(4));// includes returns boolean values true or false

let array=['vijay',343,345,'vinod',4534];
 let result=array.indexOf('vijay');
 console.log(result);// returns index of first occurrence of element in array


 // SORTING ARRAY METHODS

 let array=[23,34,5,45,'vfd','fdgfd','gsd'];
 let result=array.sort((a,b)=>a-b);// method to sort array in ascending order
console.log(result);
// let result1=result.reverse(); method to sort array in descending order
// console.log(result1)


let array=[434,545,45,46,5];
result=array.push(array.shift());// to reverse array with push and pop methods
console.log(array);


// reversed array method with while loop with push and pop methods
let array=[434,545,45,46,5];
let emptyarray=[];
while(array.length>0){
  emptyarray.push( array.pop());
 
}
console.log(emptyarray);


let array=[3,3,4,5,6,7,8,9];
let result=array.splice(2,3,3,5,6);// to remove elements from array
console.log(result);
console.log(array);


let array=[3,3,4,5,6,7,8,9];
let result=array.slice(2,5);// to remove elements from array
console.log(result);
console.log(array);




// removing first and last element with for loop 

let array=[3,3,4,5,6,7,8,9];

for( let i=1;i<=array.length-2;i++){
    console.log(array[i]);
   
}

//reversing an array  with while loop with unshift and shift methods 
let array=[3543,453,4,3445,634,454,3];
let array1=[];
while(array.length>0){
    array1.unshift(array.shift());
}
console.log(array1);




// filtering an array for even or odd numbers 
let array=[2,3,4,5,6,7,8,911,12,13,14,15];
let even_array=[];
let odd_array=[];
for(let i=0; i<array.length-1;i++){
    if(array[i]%2===0){
       even_array.push(array[i]);
    }
    else{
        odd_array.push(array[i]);
    }
  
}
console.log(even_array);
console.log(odd_array);

//reversing an array with for loop 

let array=[3,4,5,6,7,8,9];
empty=[];
for(j =array.length-1;j>=0;j--){
    empty.push(array[j]);
}
console.log(empty);


let array=[3,4,5,6,7,8,9];
console.log(array.length)


let numbers = [5, 10, 15];
let sum = 0;
for (let num of numbers) {
    sum += num;
}
console.log(sum); 

// 
let numbers=[34,445,65,76,7];
numbers.forEach((element)=>{
    return (element*2);
} );


let array=[0,1,2,3,4,5,6,7,8];
array.splice(3,0,'via','fhhdf','dfgdf');
console.log(array);




// objects methods 
// iterating key in objects 



let person = {
    name: "Alice",
    age: 30,
    address: {
        street: "456 Oak St",
        city: "Wonderland"
    },
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    },
    updateAddress: function(newStreet, newCity) {
        this.address.street = newStreet;
        this.address.city = newCity;
        console.log("Address updated!");
    }
};
// propertycount=0;
// for( let key in person){
//     propertycount++;
// }console.log(propertycount);

person.classidfor='9440082411';
console.log(person.classidfor);



let x=new person();
x.cellnumber;
console.log(x);


// for of methods  
let array=[2,3,4,5,6,7];
for(let value of array){
    console.log(array[value]);
}

































let ind=' ';
let vi=ind ?? 'vij';
console.log(vi);


console.log('5'+5*5*5)



let a=[2,4,6,8,10];
let sri=a.some((num)=>{
     return num%2!==0;
    
});
console.log(sri);




let a=[1,2,3,4,5,6];
let result=a.findIndex(num=> num%2===0);
console.log(result);


let array=[1,2,3,4,5,6,7,8];
let vij =array.map(even);
function even(callback){
    console.log( num%2===0);
    callback();
}

let fruits = ["Apple", "Banana", "Orange", "Grapes", "Mango"];

// Remove 2 elements starting from index 1
let removedFruits = fruits.slice(1, 2);

console.log(fruits); // Output: ["Apple", "Grapes", "Mango"]
console.log(removedFruits); // Output: ["Banana", "Orange"]




let numbers = [1, 5, 8, 2, 9, 4];

let max = numbers.reduce((acc, num) => (num > acc ? num : acc), numbers[5]);

console.log(max); // Output: 9

const url = "https://apis.ccbp.in/jokes/random";

const doNetworkCall = async () => {
  const response = await fetch(url);
  const jsonData = await response.json();
  console.log(jsonData);
};

doNetworkCall();



//TO UPPER STRING MANIPULATION 
let str = "Hello, World!";
let result=str.toLowerCase();
console.log(result); // Output: "HELLO, WORLD!"

let array='dsgdfgdfsgsd'
let result=array.substring();
console.log(result);



// pre increment 
// post increment 


// // pre-incremnet 
// ++a  // preincrement 
// a++ // postincremnet


// let c=8;
// let g=c; 
// console.log(c);
// console.log(g);



let person={
    name:"Rahul",
    age:25,
    address:'5645',
    person1:{
        name:"Rahul",
        age:289,
        address:'5645',
        print: function(){ return `this is ravalis age ${this.age}`}
    },
    greet: ()=>{
        return ("Hello");
    }

}
console.log(person.person1.print());













let array=[2,23,45,87,23,7,9];
let result =array.reduce((a,b)=>{
    return a<b?a:b;
 
});
 
console.log(result);




let array=[1,2,3,4,5,6,7,8,9];
array.forEach(element=>console.log(element*4));








let array=[1,2,3,4,5,6,7,8];
array.forEach(element=>{
    console.log(element*4);
})


let scores = [80, 85, 90];

scores.forEach(element=>{
   console.log( element+=50)});






   const books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 }
];

books.forEach(a=>{
    console.log(a.title+" "+a.author+" "+a.year);
})
Object.freeze(books);

console.log(books[1]['author']);
books.push({title: "gjdfhftgj", author: "Harpgthtter Lee", year: 196087});
books[1].name='vijay';

console.log(books);


const cart = [
    { name: 'Apple', price: 1.2 },
    { name: 'Banana', price: 0.8 },
    { name: 'Orange', price: 1.5 },
    { name: 'Pineapple', price: 2.0 }
  ];
  let final=cart.reduce((a,b)=>{
    return a+b.name;
    
   
  },0);
  console.log(final);





















