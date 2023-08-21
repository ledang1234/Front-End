class Student {
    constructor(_name){
        this.name  = _name;
    }
}

let student = new Student("GiaLe");
console.log(student.name);

class Mother {
    constructor(name){
        this.name = name;
    }
    colorEye(){
        console.log("Red");
    }
}
class Me extends Mother{
    colorSkin(){
        console.log("Brown");
    }
}

const me  = new Me("Gia Le");
me.colorEye();
me.colorSkin();



class Person {
    constructor(name){
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
// Monkey.prototype.getName = function (){
//     return this.name;
// }


class Monkey extends Person{
    getName(){
        return "Hello "+this.name;
    }
}
let monkey =  new Monkey("Khi");
console.log(monkey.getName());





class People {
    constructor(name, age){
        this.name  = name;
        this.age = age;
    }
    getInfo(){
        console.log(`Ten: ${this.name} - lop:  ${this.age}`)
    }
}
class Monkey2 extends People {
    constructor (name, age, eat){
        super (name, age);
        this.eat = eat ; 
    }
    getInfo(){
        super.getInfo();
        console.log(`An: ${this.eat}`)
    }
}
 let monkey2 = new Monkey2("Khi", 5, "Chuoi");
 monkey2.getInfo();