import { tinhTong, tinhHieu } from "./test.js";
import NhanViennn from "./NhanVien" // có thể sửa cái tên nếu export default
let tong = tinhTong();
// let hieu = tinhHieu();
console.log("Tong", tong);
console.log("Hieu", tinhHieu());


var d = 2;
var d = 3;

let c = 2;
c = 3;

d = 5;
var d;

// Demo function scope
function test() {
    var c = 12;
}

//Demo block function

function foo() {
    var x = 10;
    //block
    if (true) {
        var x = 20;
        console.log(x); // 20
    }

    console.log(x); // 20
}
foo();

function foo2() {
    let x = 10;
    //block
    if (true) {
        let x = 20;
        console.log(x); // 20
    }

    console.log(x); // 10
}
foo2();


for (var i = 0; i < 4; i++) {
    console.log(i);
}
console.log(i);





function hello(name, lop) {
    console.log("Hello" + name + "lop" + lop);
}
hello("Le", "fe37");

function test1() {
    return 5;
}
test1();

//  2.Arrow  Function
let hello1 = name => {
    console.log("Hello" + name);
}
hello1("Le");

let test2 = () => 5;
test2();


//Xay dung doi tuong tren function es5

let hocVien = {
    hoTen: 'Phuong Gia Le',
    lop: 'FrontEnd37',

    layThongTinHocVien: function () {
        function hienThiThongTin() {
            console.log(`Ho ten: ${hocVien.hoTen} - lop ${hocVien.lop}`)
        }
        hienThiThongTin();
    }
};
hocVien.layThongTinHocVien();

let hocVien2 = {
    hoTen: 'Phuong Gia Le',
    lop: 'FrontEnd37',

    layThongTinHocVien: function () {
        let hienThiThongTin = () => {
            console.log(`Ho ten: ${this.hoTen} - lop ${this.lop}`)
        }
        hienThiThongTin();
    }
};
hocVien2.layThongTinHocVien();

//3.Rest Param
function sum(a, b, c) {
    let total = a + b + c;
    console.log(total);
}
sum(1, 2, 3);

//callback function
// document.getElementById('btn').onclick = function(){

// }
// document.getElementById('btn').addEventListener("click", function()){

// }





function sum_(...numbers) {
    let total = 0;
    // for (let i = 0; i < numbers.length; i++) {
    //     total += numbers[i];
    // }

    numbers.map((item, i) => { // .map ko thay doi mang ban đầu, .forEach ko  thay doi mang ban dau
        total += item;
    })
    console.log(total);
}
sum_(33, 8, 69, 22, 12, 29, 10);


//4.Spread Operator(*)
//thay doi mang , object


// let mangA = [1,2,3];
// let mangB = mangA;

// mangB.push(4);
// mangB.push(5);

// console.log(mangA);
// console.log(mangB);

let mangA = [1, 2, 3];
let mangB = [...mangA, 4, 5]; // chỉ gán mảng copy , ko gán địa chỉ

console.log(mangA);
console.log(mangB);

let people = {
    ten: "Le",
    lop: "fe37"
};

let people2 = { ...people };
people2.tuoi = 18;

console.log(people);
console.log(people2);

//5. Default Params
let getInfo = (ten, lop = "fe37") => console.log(`Ten: ,${ten}, - lop: ${lop}`);

getInfo("Le", "fe35");
getInfo("Le");

// 6. Destructuring(*)
let mang = [1, 2];

let [x, y] = mang;
console.log(x, y);


let obj = {
    ten: "Le",
    lop: "fe37"
}
let { ten, lop } = obj;
console.log(ten, lop);

// Template string

let getName = (name) => {
    let rs = `Hello ${name}`;
    console.log(rs);
}
getName("Le")

//Object literals (*)
let name = "GiaLe";
let lop_ = "Front-End-37"

let student = {
    name, // name: name
    lop_
};
console.log(student);



let propHoTen = "hoTen";
let propLop = "lop"

let student2 = {
    [propHoTen]: "PhuongGiaLe",
    [propLop]: "fe37"
}
console.log(student2);


// For of
// For in

let mangPeople = ["Khoa", "Le", "Tri"]
for (let item of mangPeople) { // lấy giá trị mảng
    console.log(item);
}
for (let i in mangPeople) { // lấy index mảng
    console.log(i);
}

