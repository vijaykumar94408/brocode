class A{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    display()
{
console.log(`my name is ${this.name}, and i am ${this.age} years old`);
}
}
class B extends A{
    constructor(name,age,place){
        super(name,age);
        this.place=place;

    }
    display(){
        super.display();
        console.log(`i am ${this.name}, i am ${this.age}, i am from ${this.place}`);
    }
}
 const obj =new B('vijay',25,'wanparthy');
obj.display()