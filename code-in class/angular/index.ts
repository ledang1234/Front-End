console.log("Hello 1");

let a: Boolean = true;

let diemToan: Number = 10;

let ten: string = "Gia Le";
//khong the thay doi kiue du lieu nhu javascript

let arr1: Array<number> = [1, 2, 3];
let arr2: string[] = ["a", "b", "c"];

let tupple: [string, number] = ["age", 19];
let tupple1: [string, boolean] = ["visible", false];

enum Color {
    Red = 1,
    Green = 2,
    Blue = 3
}

console.log("color", Color.Red);

let notSure: any = 1;
notSure = "a";
let temp: null = null;
let temp2: undefined;

console.log(typeof temp);
console.log(typeof temp2);

type User = {
    name: string,
    age: number,
    address: string,
    email: string
}

let user: User = {
    name: "Le",
    age: 19,
    address: '123',
    email: "abc"
}
function foo(name: string) {
    console.log("Hello " + name);
}
foo("Gia Le");

const bar = (name: string) => {
    console.log(name);
}

bar("World");

const getParent = () => 10;

const getBonus = (value = 10 + getParent(), num = value + 0.1) => {
    console.log(num)
}

getBonus(50);

const displayColor = (...color: string[]) => {
    for (let i = 0; i < color.length; i++) {
        console.log(color[i]);
    }
    console.log("==================================")
}
displayColor("red", "pink", "white");
displayColor("yellow", "green", "blue");

const arrayColor = ["red", "pink", "blue", "purple"];
displayColor(...arrayColor, "Orange");

const colors = [...arrayColor, "Brown"];

const date = [15, 12, 2020];
// const [day, month, year]  = date;

const obj1: User = {
    name: "Gia Le",
    email: "abc",
    age: 25,
    address: "123"

}

const {address, age, name: fullName, email="le.dang1234@hcmut.edu.vn"}  =  obj1;

console.log(email);

const stirngDemo = "Hello" + fullName + "age:  " +age;
const templateString = `Hello ${fullName} age: ${age}`;
console.log(templateString);


for (let i in colors){
    console.log(colors[i]  + "  "  + i);
}
for (let color  of colors){
    console.log(color);
}

let input = (<HTMLInputElement>document.getElementById("input1")).value;


// (<HTMLButtonElement>document.getElementById("button1")).addEventListener()
console.log(input)