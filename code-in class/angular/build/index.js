var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
console.log("Hello 1");
var a = true;
var diemToan = 10;
var ten = "Gia Le";
//khong the thay doi kiue du lieu nhu javascript
var arr1 = [1, 2, 3];
var arr2 = ["a", "b", "c"];
var tupple = ["age", 19];
var tupple1 = ["visible", false];
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
console.log("color", Color.Red);
var notSure = 1;
notSure = "a";
var temp = null;
var temp2;
console.log(typeof temp);
console.log(typeof temp2);
var user = {
    name: "Le",
    age: 19,
    address: '123',
    email: "abc"
};
function foo(name) {
    console.log("Hello " + name);
}
foo("Gia Le");
var bar = function (name) {
    console.log(name);
};
bar("World");
var getParent = function () { return 10; };
var getBonus = function (value, num) {
    if (value === void 0) { value = 10 + getParent(); }
    if (num === void 0) { num = value + 0.1; }
    console.log(num);
};
getBonus(50);
var displayColor = function () {
    var color = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        color[_i] = arguments[_i];
    }
    for (var i = 0; i < color.length; i++) {
        console.log(color[i]);
    }
    console.log("==================================");
};
displayColor("red", "pink", "white");
displayColor("yellow", "green", "blue");
var arrayColor = ["red", "pink", "blue", "purple"];
displayColor.apply(void 0, __spreadArrays(arrayColor, ["Orange"]));
var colors = __spreadArrays(arrayColor, ["Brown"]);
var date = [15, 12, 2020];
// const [day, month, year]  = date;
var obj1 = {
    name: "Gia Le",
    email: "abc",
    age: 25,
    address: "123"
};
var address = obj1.address, age = obj1.age, fullName = obj1.name, _a = obj1.email, email = _a === void 0 ? "le.dang1234@hcmut.edu.vn" : _a;
console.log(email);
var stirngDemo = "Hello" + fullName + "age:  " + age;
var templateString = "Hello " + fullName + " age: " + age;
console.log(templateString);
for (var i in colors) {
    console.log(colors[i] + "  " + i);
}
for (var _i = 0, colors_1 = colors; _i < colors_1.length; _i++) {
    var color = colors_1[_i];
    console.log(color);
}
var input = document.getElementById("input1").value;
// (<HTMLButtonElement>document.getElementById("button1")).addEventListener()
console.log(input);
