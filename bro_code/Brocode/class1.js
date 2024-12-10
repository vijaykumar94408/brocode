// // let variable;
// // document.getElementById('button').addEventListener('click',greeting);
// // function greeting(){
// //     let variable =document.getElementById('input').value.trim();
// //     if (variable===''){
// //         alert('enter a value');
// //     }
// //     document.getElementById('h1').textContent=`Hello ${variable}`;
// //     document.getElementById('input').value='';


// // // }
// // let username='';


// // while(username===''||username===null||username===' '){
// //     username=window.prompt('enter user number');


// // };
// // console.log(username);

// // let logined=false;
// // let username;
// // let password;
// // while(!logined){
// //     username=window.prompt('enter user number');
// //     password=window.prompt('enter a password');
// //     if(username==='admin'&&password==='123'){
// //         logined=true
// //         console.log('your are logined!')



// //     }
// //     else{
// //         console.log('you are not logined');
// //     }
// // };


// // let logined=false;
// // let username;
// // let password;
// // while(!logined){
// //     username=window.prompt('enter user number');
// //     password=window.prompt('enter password');
// //     if(username==='admin'&&password==='123'){
// //         console.log('user logined successfully');
// //         logined=true;
// // }
// // else{
// //     console.log('you are not loged in');

// // }
// // };
// //  let arrray_var=[2,3,4,5,67,];

// //  result =arrray_var.map(exponentiation);
// //  console.log(result);


// //  function exponentiation(element){
// //      return Math.pow(element,3)
// //  }
// // function calculate_area(radius){
// //     if (radius < 0){
// //         return "Invalid radius";
// //     }
// //     let area = 3.14 * radius * radius;
// //     return area;
    
// // };
// // console.log(calculate_area(5));


// //filter method 
// // let age=[223,12,4,56,15,19];
// // let adults_list=age.filter(adults);
// //  console.log(adults_list);


// // function adults(element){


// //     return element>=18;
// // }

// // let numbers = [1, 2, 3, 4, 5, 6,];

// // let summedvalue=numbers.reduce(sum);
// // console.log(summedvalue);
// // function sum(accumulator,element){
// //     return accumulator+element;
// // }


// // let var1=[3,5,6,8,9];
 
// //  let var2=Math.max[...var1];
// // console.log(var1);
// // let theme = "dark"; // Global variable

// // function setTheme(newTheme) {
// //   theme = newTheme; // Modify global variable
// //   console.log(newTheme);
// // }
// // setTheme('vinod');

// // function getTheme() {
// //   console.log(`Current theme is: ${theme}`); // Access global variable
// // }

// // setTheme("light");
// // getTheme(); // Output: Current theme is: light

// // function add(a,b){
// //   console.log(a+b);
// // }
// // function adds(add){
  
// //   add(2,3);


// // }
// // adds(add);
// // function add(a,b){
// //   ret= a+b/(b*a);
// //   console.log(ret);
  
// // }

// // add(2,3);

// // function console_print(callback){
// //   console.log(add(2,3));
// //   callback();
// // }
// // console_print(add);

// // addition(display,23,34);

// // function addition(callback,a,b){
// //    result=a+b;
// //    callback(result);

// // }
// // function display(result){
// //   console.log(result);
// // }

// // function totalscoregrading(callback,test1,test2){
// //   let total=test1+test2;
// //   callback(total);
// // }
// // function display(total){
// //   if(total>=50){
// //     console.log('pass');
// //   }else{
// //     console.log('fail');
// //   }


// // }

// // totalscoregrading(display,34,0);

// // let fruits = ['apple', 'banana', 'orange'];
// // for( let i=0;i<fruits.length;i++){
// // console.log(fruits[i]);
// // }
// // let fruits = ['apple', 'banana', 'orange'];
// // for(let fruit in fruits){
// //   console.log(fruit);
// // }
// // let num=[3,4,5,6];

// //  let result=num.map(exp);
// // console.log(result);

// // function exp(element){
// //     return Math.pow(element**3);
// // }

// // function addformu(callback,a,b){
// //     result= a+b;
// //     callback(result);
// // }

// // function displayresult(result){
// //     console.log(result);
// // }
// // addformu(displayresult,4,5);

// // let arrray_var=[3,4,5,6];

// // arrray_var.forEach(function(varia,index){
// //     console.log(   `${index} ${varia}`);
// // });



// // let array=[33,2,3,4,5,65];


// // result=array.reduce(multiply);
// // console.log(result)
// // function multiply(accumulator,element){
// //     return Math.max(accumulator,element);
// // }


// // let array=[23,3,45,5,6];
// // const result=array.map((element)=> Math.pow(element,4))
// // console.log(result);
// // const vij={
// //     name: "John Doe", // String
// //     age: 26,         // Number
// //     isMarried: false, // Boolean
// //     hobbies: ["reading", "traveling", "coding"], // Array
// //     address: {       // Nested object
// //       street: "123 Main St",
// //       city: "New York",
// //       zip: "10001"
// //     },
// //     greet: function() { // Function
// //       console.log(`Hello, my name is ${this.name}.`);
// //     },
// //     calculateBirthYear: function(currentYear) { // Function with parameters
// //       return currentYear - this.age;
// //     }
// //   };
// //   console.log(vij.calculateBirthYear(2024));
// //   console.log(vij.isMarried);
   




// //   const egg={
// //     name:"egg",
// //     class:'15',
// //     age:21,
// //     greet:function(gree){console.log(  `${gree}`)},
// //      vijay:{
// //         name: "vijay1",
// //         class:'17',
// //         age:25,
// //         greet1:function(greed){ return `${greed}`}

// //     },
// //     bye:function(bye1){return (`${bye1}`)}
// //   }

// //   let vari=egg.bye('i am egg');
// //   console.log(vari);

// // let aray=[2,3,34,56];
// // let evennumber=[...array].filter(num=>num%2===0 )
// // function fridge(...foods){
// //     console.log(foods)
// // }
// // const food1='biryai';
// // const food2='carrot';
// // const food3='beetroot';
// // fridge(food1,food2,food3);


// // let array=[2,3,4,5,6];
// // //  var result=Math.min(...array);
// // // console.log(result);

// // console.log(array.reduce(dec));
// // function dec(accumulator,element){
// //     return Math.min(accumulator,element);
// // }

// // let input=5;
// // for(i=1;i<=10;i++){
// //     // console.log(`${input} x ${i} = ${input*i}`)
// //     result=input*i;
// //     console.log(`${input} * ${i} = ${result}`);
// // }


// //     function person(a,b,c,d){
// //     this.name=a;
// //     this.age=b;
// //     this.place=c;
// //     this.designation=d;
    
// //     this.greet=function(){
// //         return (`Hello my name is ${this.name} and i am ${this.age} years`)


// //     }
// // }



// // const person1 =new person('vijay',25,'wanparthy','react developer');
// // console.log(person1.name);
// // console.log(person1.greet());


// // class person{
// //     constructor(mobile,cost){
// //         this.mobile=mobile;
// //         this.cost=cost;

// //     }
// //     displayproduct(){
// //         console.log(`product name is${this.mobile} and cost is ${this.cost}`);
// //     }

// // }
// // const obj=new person('apple',20000);
// // obj.displayproduct();
// // const obj1=new person('redmi',20000);
// // obj1.displayproduct();
// // console.log(person.cost);


// // class animal{
// //     animal_alive=true;
// //     walk(){
// //         console.log(`${this.name} will walk`);
// //     }
// //     swim(){
// //         console.log(`${this.name} will swim`);
// //     }
// //     fly(){
// //         console.log(`${this.name} will fly`);
// //     }
// //     kill(){
// //         console.log(`${this.name} will kill`);
// //     }
// // }
// // class eagle extends animal{
// //    name='eagle';
// // }
// // class fox extends animal{
// //     name='eagle';
// //  }
// //  class fish extends animal{
    
// //     name='eagle';
// //  }


// //  const eagle1=new eagle();
// //  eagle1.fly();


// // const person = {
// //     name: "John Doe",
// //     age: 35,
// //     address: {
// //         street: "123 Main St",
// //         city: "New York",
// //         state: "NY",
// //         country: "USA",
// //         getFullAddress: function () {
// //             return `${street}, ${this.city}, ${this.state}, ${this.country}`;
// //         }
// //     },
// //     job: {
// //         title: "Software Engineer",
// //         company: "TechCorp",
// //         yearsOfExperience: 10,
// //         getJobDescription: function () {
// //             return `${this.title} at ${this.company} with ${this.yearsOfExperience} years of experience.`;
// //         }
// //     },
// //     greet: function () {
// //         return `Hi, I'm ${this.name} and I live in ${this.address.city}.`;
// //     }
// // };

// // // console.log(person.greet()); // Outputs: Hi, I'm John Doe and I live in New York.
// // // console.log(person.address.getFullAddress()); // Outputs: 123 Main St, New York, NY, USA
// // // console.log(person.job.getJobDescription()); // Outputs: Software Engineer at TechCorp with 10 years of experience.

// // console.log(person.address.getFullAddress());


// // class Person{
// //     constructor(walk,run,swim){
// //         this.walk=walk;
// //         this.run=run;   
// //         this.swim=swim;
// //     }
    

// // }
// // class vijay extends Person{
// //     constructor(walk,run,swim,name,age){
// //         super(walk,run,swim);
// //         this.name=name;
// //         this.age=age;
// //     }
// // }
// // class vinod extends Person{
// //     constructor(walk,run,swim,name,age){
// //         super( walk,run,swim);
// //         this.name=name;
// //         this.age=age;
// // }
// // }

// // const obj1=new vinod('yes','no','yes','vinod',50);
// // console.log(obj1.swim);
// // const obj2=new vijay('yes','no','yes','vijay',50);
// // console.log(obj2.walk);



// // class personDetails{
// //     constructor(name,age,city,country){
// //         this.name=name;
// //         this.age=age;
// //         this.city=city;
// //         this.country=country;

        
// // }
// // set name(newname){
// //         if(typeof newname==='string' && newname.length>0){
// //             this._name=newname;
  
// // }
// // else{
// //     console.log('input must be a  non empty string');
// // }

// // }
// // set age(newage){
// //     if(typeof newage==='number' && newage>0 && newage<100){
// //         this._age=newage;
// // }
// // else{
// //     console.log('number must be a non empty integer');
// // }}
// // set country(newcountry ){
// //     if(typeof newcountry==='string' && newcountry.length>0){
// //         this._country=newcountry;
// // }
// // else{
// //     console.log('number must be a non empty integer');
// // }}
// // set city(newcity){
// //     if(typeof newcity==='string' && newcity.length>0){
// //         this._city=newcity;
// // }
// // else{
// //     console.log('number must be a non empty integer');
// // }}




 
// // get name(){
// //     return this._name;
// // }
// // get age(){
// //     return this._age;
// // }
// // get country(){
// //     return this._country;
// // }
// // get city(){
// //     return this._city;
// // }
// // }

// // const obj1=new personDetails('vijay',25,'hyderabad','india');
// // console.log(obj1.age);
// // console.log(obj1.name);
// // console.log(obj1.city);
// // console.log(obj1.country);


// // let a=23;
// // let b=45;

// // [a,b]=[b,a]
// // console.log(a);
// // console.log(b);

// let colors=['red','green','black','white'];
// // [colors[0],colors[3]]=[colors[3],colors[0]]
// // console.log(colors);

// // const [firstcolor,secondcolor,...extracolors]=colors;
// // console.log(firstcolor);
// // console.log(secondcolor);
// // console.log(...extracolors);


// // const person={
// //     name1:'vijay',
// //     age:25,
// //     country:'india',
// //     city:'hyderabad'


// // }
// // const person1={
// //     name1:'vinod',
// //     age:23,
// //     country:'india',
// //     city:'hyderabad'


// // }
// // function displayfunction({name1,age,country,city}){
// // console.log(name1);
// // console.log(age);
// // console.log(country);
// // console.log(city);

// // }
// // displayfunction(person1);


// // const person = {
// //     name: "John Doe",
// //     age: 30,
// //     address: {
// //         street: "123 Main St",
// //         city: "New York",
// //         zipCode: "10001",
// //         country: "USA"
// //     },
// //     hobbies: ["reading", "traveling", "swimming"],
// //     education: {
// //         highSchool: {
// //             name: "Springfield High",
// //             yearGraduated: 2010
// //         },
// //         college: {
// //             name: "State University",
// //             degree: "B.Sc in Computer Science",
// //             yearGraduated: 2014
// //         }
// //     }
// // };


// //  for(const i in person.education.college) {
// //     console.log(person.education.college[i]);
// // }


// // const products = [
// //     {
// //         id: 1,
// //         name: "Laptop",
// //         price: 1500,
// //         brand: "Dell",
// //         category: "Electronics"
// //     },
// //     {
// //         id: 2,
// //         name: "Smartphone",
// //         price: 800,
// //         brand: "Apple",
// //         category: "Electronics"
// //     },
// //     {
// //         id: 3,
// //         name: "Desk Chair",
// //         price: 200,
// //         brand: "IKEA",
// //         category: "Furniture"
// //     },
// //     {
// //         id: 4,
// //         name: "Water Bottle",
// //         price: 20,
// //         brand: "Nalgene",
// //         category: "Outdoors"
// //     }
// // ];
// // // products.forEach(fruit=>console.log(fruit.id));
// // // let result=products.map(element=>element.price);
// // // console.log(result);
// // // let varia=products.filter(element=>element.price>50);
// // // console.log(varia);
// // // let varia3=products.filter(element=>element.category==='Outdoors');
// // // console.log(varia3);
// // let varia4=products.reduce((acc,cur)=>acc+cur.price,0);
// // console.log(varia4);


// //creating closure


// // function outer(){
// //     let countfun=0;
// //     function innerfunction(){
// //         countfun++;
// //         console.log(`the current count of execution is ${countfun}`);
// //     }
// //      return {innerfunction};
// // }
// // const varia=outer();
// // varia.innerfunction();
// // varia.innerfunction();
// // varia.innerfunction();

// // function bankbalance(){
// //     let bankbalance=0;
// //     function depositedamount(amount){
// //         bankbalance+=amount;
// //         console.log(`your current balance is ${bankbalance}`);
// //     }
// //     function withdrawamount(amount){
// //         bankbalance-=amount;
// //         console.log(`your balance after withdrawn amount${bankbalance}`);
// //     }
// //     function bankbalance1(){
// //         return bankbalance;
// //     }
// //     return {depositedamount,withdrawamount,bankbalance1};
// // }
// // const varia=bankbalance(10000);
// // varia.depositedamount(123);
// // varia.withdrawamount(1000);
// // varia.depositedamount(12000);
// // varia.withdrawamount(1000);
// // let result12=varia.bankbalance1();
// // console.log(result12);
// // var x=3;
// // console.log(x);
// // let y=5;
// // console.log(y);
// // const z=3;
// // console.log(z);

// // setTimeout(()=>console.log('this is id'),5000);
// // let array = [3, 4, 5, 6, 7];
// // let result = array.forEach((element) => {
   
// // console.log(element ** 2)});

// // let alert='vijay';
// // [3,4,5].forEach(alert);

// // var name='john';
// // var admin=name;
// // alert(admin);



// while(true){
// alert(`enter your name here `);
// let name=prompt('enter your name');

// if (!name){
//    alert('enter a name ');
//    continue;
// }
//     let confirm_name=confirm(`are you ${name}?`)

// if(confirm_name){
//     confirm(`ok ${name}`);
//     break;
    

// }
// else{
//     alert('enter a name');
// }
// // if{
// // alert(`ok ${name}`);


// }



function outer(){

    points=0;
    function inner(){
        points+=1;
        console.log(points);

    }
    return{inner};
}
resi=outer();
resi.inner();
resi.inner();


let vari;
function setimeout(){
     vari=setTimeout=(()=>window.alert('hello'),3000);
}
 function cleareout(){
    ClearTimeout=(vari);
}





