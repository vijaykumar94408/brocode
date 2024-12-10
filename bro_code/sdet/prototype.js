
class A{
constructor(name,email){
    this.name=name;
    this.email=email;
}
}
A.prototype.age=45;
obj=new A('vijay','vijay@gmail.com');

console.log(obj.name,obj.email,obj.age);
