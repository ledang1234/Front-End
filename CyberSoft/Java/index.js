// console.log('hello');

// ///1.Bien
// //khai bao bien la chuoi
// var s = 'hello';
// //xem kieu du lieu cua bien
// console.log("Kieu du lieu",typeof s);

// var namSinh = 2000;
// namSinh = 'alo';
// console.log(typeof namSinh);


// //2.Toan tu va cau truc 
// var number = 10;
// //so sanh ==; so sanh gia tri
// //so sanh === : so sanh gia tri va kieu du lieu
// if (number % 2 == 0){
//     console.log('Even');
// }else{
//     console.log('Odd');
// }

// //kieu du lieu mang va vong lap
// var array = [1,2,3,4,5]
// console.log('array: ', array);
// console.log('index 3 = ', array[3]);

// var mangHocSinh = ["A", "B", "C", "D", "E"];
// console.log(mangHocSinh[3]);

// //Cau truc lap do while
// var array_length = mangHocSinh.length;

// var i = 0;   
// while(i < array_length){
//     console.log(mangHocSinh[i]);
//     i++;
// }

// for (var i = 0; i < array_length;  i++){
//     console.log(mangHocSinh[i])
// }

// // function calSum(x,y){  
// //     console.log(x+y);
// // }

// //co the khai bao 
// var calSum = function(x, y){
//     console.log(x+y);
// }
// var a = '5';
// var b = 10;
// calSum(a,b);


// var calAverage = function(diem1,  diem2,  diem3) {
//     var diemTB = (diem1+ diem2+ diem3) / 3;
//     console.log(diemTB);
//     return diemTB;
// }
// var xepLoai = function(diemTB){  
//     if (diemTB >= 9 && diemTB <= 10){
//         console.log("Xuat sac");
//     }else if (diemTB >= 8 && diemTB < 9){
//         console.log("Gioi");
//     }else if (diemTB >= 7 && diemTB < 8){
//         console.log("Kha");
//     }else if (diemTB >= 6 && diemTB < 7){
//         console.log("TB Kha");
//     }else if (diemTB >= 5 && diemTB < 6){
//         console.log("TB");
//     }else if (diemTB < 5 ){
//         console.log("Yeu");
//     }    

// }

// var Toan  = 9;
// var Ly = 8.75;
// var Anh = 7.75;
// console.log("Diem trung binh");
// var diemTB = calAverage(Toan,Ly,Anh);
// console.log("Xep loai: ");
// xepLoai(diemTB);




/////////////////////



// //DOM dua tren id lay ra innerHTML cua the
// var tagH1 = document.getElementById('textTille');

// //innerHTML: noi dung nam giua hai  the  dong mo html
// console.log("innerHTML",tagH1.innerHTML);
// tagH1.innerHTML = "Hello frontend ";
// console.log("innerText", tagH1.innerText);

// //Tao tac the input
// var tagInput =  document.getElementById('txtTenlop')
// //thuoc tinh the input
// //value
// console.log('Value', tagInput.value)


// tagInput.value = 'cybersoft';
// console.log('Value', tagInput.value);


// //Dinh nghia su kien
// //onclikck
// var buttonChangePicture = document.getElementById('btnChangePicture');
// buttonChangePicture.onclick = function(){
//     var img = document.getElementById('imgGoogle');
//     img.src = 'https://www.facebook.com/images/fb_icon_325x325.png';

// }


//////////////
//////////DOM style js

var fontSize = 13;
document.getElementById('btnTangFontSize').onclick = function(){
    //Dinh nghia si kien khi click vao btnTangFontsize
    fontSize = fontSize + 5;
    document.getElementById('text').style.fontSize = fontSize 
    +'px';

}
//bai 1
document.getElementById('btnGiamFontSize').onclick = function(){
    fontSize = fontSize - 5;
    document.getElementById('text').style.fontSize = fontSize +'px';
}

//bai2
document.getElementById('turnOn').onclick = function(){
    document.getElementById('lighting').src = "/img/pic_bulbon.gif";
    document.getElementById('turnOn').style.borderColor = 'blue';
    document.getElementById('turnOff').style.borderColor = 'none';
}
document.getElementById('turnOff').onclick = function(){
    document.getElementById('lighting').src = "/img/pic_bulboff.gif";
    document.getElementById('turnOn').style.borderColor = 'none';
    document.getElementById('turnOff').style.borderColor = 'blue';
}
//bai3
document.getElementById('editText').onclick = function (){
    document.getElementById('text2').style.display = 'none';
}
document.getElementById('btnLamMo').onclick = function(){
   var opacity = document.getElementById('text2').style.opacity;
   opacity = opacity -0.1;
   document.getElementById('text2').style.opacity = opacity;
}

document.getElementById('Login').onclick = function(){
    var account =  document.getElementById('account').value;
    var password = document.getElementById('pass').value ;
    var login =  document.getElementById('Login');

    if(account === 'giale1234' && password === '1234'){
        login.style.backgroundColor = 'green';
        login.style.color = '#fff';
        login.innerText = 'Login succesfully !!!';
    }else{
        login.style.backgroundColor = 'red';
        login.style.color = '#fff';
        login.innerText = 'Login fail !!!';
        account = '';
        password = '';
        document.getElementById('account').focus();

    }
}

// DOM html dung tagname
var domTagName = function(){
    var mangTagSection = document.getElementById('section');
    var the = document.getElementById('section')[2];
    the.innerText = 'GIA LE';

    // for (var i = 0; i < mangTagSection.clientHeight; i++){
    //     var the = document.getElementById('section')[i];
    //     thee.innerText = 'GIA LE';
    // } 
}
domTagName ();

var domClassName = function(){
    var mangCLassName = document.getElementById('textgreen');
    for(var i = 0; i < mangCLassName.length  ;i++){
        var tag = mangCLassName[i];
        tag.style.color = 'green';
    }
}
domClassName();

var domName = function(){
    var mangName = document.getElementById('bg-black');
    for(var i = 0; i < mangName.length  ;i++){
        var tag = mangName[i];
        tag.style.color = 'black';
    }
}
domName();


// DOM QUERY SELECTOR
var domQuerySelector = function(){
    document.querySelector('.text-danger').innerHTML  = "<span><b>hello</b></span></b>"
}
domQuerySelector();

var domQuerySelectorAll = function(){
    var mangTagSelection = document.domQuerySelectorAll('.text-danger');
    for (var i = 0; i < mangTagSelection;){
        
    }
}