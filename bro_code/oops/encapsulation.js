class vijay{

   constructor(){
    let id,name;
   }
   getid(){
    return  this.id;
   }
   setid(id){
    this.id=id;
    
   }
   getname(){
    return this.name;
   }
   setname(name){
    this.name=name;
   }
}
let obj=new vijay();
obj.setid(15);
obj.setname('rameshkumar');
console.log(obj.getid(),obj.getname());