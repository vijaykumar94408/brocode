
// // use strict : 
// it is set of strict rule for writing javascript code
// ex: it throws error if we use undeclared variable or function
// 0 cant be used for prefixed
// cant use same name parameters in a function
// cant use keyword for variable declaration 
// throws error for non writable prperties like freezed objects

// scope of function:

// global variable :
// it can be accessed in anywhere in the code like if we declare a variable outside function it wil be accessible throught the  code and inside function. 

// local variable:
// can only be accessed in the function and cant be accessed outside function and block.

// block scoped:
// can only be accessed in the block and cant be accessed outside block


const name2 = "this is global scope";
console.log(name2);
 function vijay(){
    console.log(name2)
    let name1 = "this is function scope";
    console.log(name1);
    let x=345;

    if(x<1000){
        let name3 = "this is block scope";
        console.log(name3)
        let blockscope='this is blockscope';
        console.log(blockscope);
        console.log(name1);
    }

 }
 vijay();




//  array of objects methods 


 const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 },
    { name: 'Diana', age: 28 }
  ];
  
  let result=people.reduce((a,b)=>{
      return a.age>b.age?a:b;
  
  })
  console.log(result);



//   //// adding a new  property to object, and getting the property values of
//    object with index and freeze the object with object.freeze.objectname method
  const books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 }
];

// books.forEach(a=>{
//     console.log(a.title+" "+a.author+" "+a.year);
// })


// console.log(books[1]['author']);
// books.push({title: "gjdfhftgj", author: "Harpgthtter Lee", year: 196087 });


// console.log(books);

// here used delete method to delete a property from object
let deleted_result=delete books[1];
console.log(books);

// to freeze a object form manipulation we can use :--Object.freeze(object_namehere)---




// counting the occurence of each item with reduce method 
const items = [
    { name: 'apple' },
    { name: 'banana' },
    { name: 'apple' },
    { name: 'orange' },
    { name: 'banana' },
    { name: 'apple' }
  ];
  let count=0
 let result=items.reduce((a,b)=>{
     return count=count+1;
    
 });
 console.log(result);
 


// 'this'keyword scope in function declaration, function expresion, and function declaration


//this keyword scope in function declaration results in global scope, window in browser and global in nodejs
function vijay(){

    console.log(this);
}
vijay();


// when used in functin expression same as fucntion declaration
const vijay=function(){
    console.log(this);
}
vijay();

// when used in arrow function , it returning empty object 
const arrowfunction=()=>{
    console.log(this);
}
arrowfunction();



// converting objects into arrays to use more method like sort , map, filter etc

const cart = {
    apple: 3,
    banana: 2,
    orange: 4,
    mango: 1,

};
// to convert both keys and values into arrays we can use object.entries method 
let result=Object.entries(cart);
console.log(result);
console.log( Array.isArray(result))


// to conver only keys into array we can use object.keys method

const cart = {
    apple: 3,
    banana: 2,
    orange: 4,
    mango: 1,

};
let result=Object.keys(cart);
console.log(result)

// to convert only vaues into array we can use object.values method
const cart = {
    apple: 3,
    banana: 2,
    orange: 4,
    mango: 1,

};
let result = Object.values(cart);
console.log(result);
//

// sorted array from object using sort method for ascending order:(a,b)=>(a-b), for descending order:(a,b)=>(b-a)

const cart = {
    apple: 3,
    banana: 2,
    orange: 4,
    mango: 1,

};

let result=Object.entries(cart).sort((a,b)=>a[1]-b[1])
console.log(result) ;


// for in 
const cart = {
    apple: 3,
    banana: 2,
    orange: 4,
    mango: 1,

};
for(let x in cart){
    console.log(`the product:${x}:${cart[x]}`)
}

// with for in ,printed all keys and values of object 
const cart = {
    apple: 3,
    banana: 2,
    orange: 4,
    mango: 1,

};

 for(let x in cart){
    console.log(`key is ${x}:${cart[x]}`);
 }



 // shallow copy and deep copy:copied_variable=Object.assign({},original_copy_variable);
 // structuredClone(deep copy):
 // after structed copy method, if we make any changes to modified one , it doesnt affect the original object. they share different memeory location 
 // but of shallow copy if we make any changes 


// spread operator: it will unpack the elements in array/ objects and create a new array with shallow copy for iteration 

let varia=['mango','apple','banana','carrot'];
let varia1=['carrot','brijanl','ladysfingers'];
let copied_variable=[...varia1,...varia,'orange','grapes']
console.log(copied_variable);
// rest operator
function restoperator(...cart_list){
    console.log(cart_list);
}
const cart_list3=['apple','banana','orange','mango'];
const cart_list1=['carrot','brijanl','ladysfinger']
restoperator(...cart_list1,...cart_list3)




function varai(a,c,...b){
    console.log(a,b,c);
  

}
varai(1,2,3,4,5,5,6);




//
let user={
    name:'john',
    surname:'smith',

}
user.name='pete';
console.log(user);
delete user.name;
console.log(user)

let  salaries={
    'John': 1000,
    'vijay':22000,
    'vinod':20000,
}
// let result=Object.values(salaries)
// // console.log(result);
// let final=result.reduce((a,b)=>{
//     return a+b
// })
// console.log(final);
sum=0;
for (let x in salaries){

    sum+=salaries[x];
   

}
console.log(sum)


let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
function multiplynumbers(menu){
  for(let x in menu){
    if(typeof menu[x]=='number'){
          let result=menu[x]*=2;
         console.log(result)
    }
    
  }

}
multiplynumbers(menu);




// converting arrays into objects and objects into arrays with methods 
// converting arrays into objects 
let product_names=['mouse','keyboard','cpu','monitor',['parse','jin','martin', 'namun']];
let final_fdd=product_names.flat();

let result=Object.assign({},final_fdd);
console.log(result);


// converting objects into arrays
let product_names1={
    'mouse':1000,
    'keyboard':5000,
    'cpu':20000,
    'monitor':3000,
    nestedobject:{
        'mouse':1000,
        'keyboard':5000,
        'cpu':20000,
        'monitor':3000
    }

};
let objdfsf=product_names1.flat();
let final_result=Object.assign([],objdfsf)

console.log(final_result)



// converting list of nested lists into objects 
const keyValueArray = [['name', 'Alice'], ['age', 30], ['city', 'New York']];
let result=Object.fromEntries(keyValueArray);
console.log(result);


let product_names1={
    'mouse':1000,
    'keyboard':5000,
    'cpu':20000,
    'monitor':3000,
  

};
let result=Object.entries(product_names1)
console.log(result)

'use strict'
let product_names1={
    'mouse':1000,
    'keyboard':5000,
    'cpu':20000,
    'monitor':3000,
  

};
 Object.freeze(product_names1);
product_names1['name']='vijay';
console.log(product_names1);
console.log(Object.isFrozen(product_names1));




let product_names1={
    'mouse':1000,
    'keyboard':5000,
    'cpu':20000,
    'monitor':4,
  

};
let product_names21={
    'cafgd':13000,
    'gd':500350,
    'dgsdfg':20000,
    'dfgsd':30050,
    'monitor':3,
  

};
result=Object.assign(product_names21,product_names1)
console.log(result)



























