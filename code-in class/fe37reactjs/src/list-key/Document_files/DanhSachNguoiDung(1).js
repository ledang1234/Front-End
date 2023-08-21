
////////      MAU JQUERY
$(document).ready(function () {

    var danhSachNguoiDung = new DanhSachNguoiDung();
    //Xu ly tac vu them nguoi dung
    $("#btnThemNguoiDung").click(function () {
        //Tao modal title
        var modelTitle = "Them nguoi dung";

        //Tao button
        var modelFooter = `
        <button id="btnThem"  class="btn btn-success" data-dismiss="modal">Them nguoi dung </button>
        <button id="btnDong" class="btn btn-danger" data-dismiss="modal" >Dong</button>
    `
        $(".modal-title").html(modelTitle)
        $(".modal-footer").html(modelFooter)

        // $("#btnModal").trigger("click")
    })


    $("body").delegate("#btnThem", "click", function () {
        var TaiKhoan = $("#TaiKhoan").val();
        var MatKhau = $("#MatKhau").val();
        var HoTen = $("#HoTen").val();
        var Email = $("#Email").val();
        var SoDT = $("#SoDT").val();
        var nguoiDung = new NguoiDung(TaiKhoan, MatKhau, HoTen, Email, SoDT);
        console.log(nguoiDung);
        danhSachNguoiDung.themNguoiDung(nguoiDung);

        //Hien thi sweetalert
        swal("OK", "Them nguoi dung thanh cong", "success");

        //Load du lieu nguoi dung ta database khi them
        layDanhSachNguoiDung(danhSachNguoiDung.mangNguoiDung)
        ///////// $("#btnDong").trigger("click"); //them thanh cong dong form (nhung ko can vi co data-dismiss roi)

        //Luu vao storage
        LuuStorage();

        //Clear form
        $(".clear").val("");
    })


    var layDanhSachNguoiDung = function (mangNguoiDung) {
        var noiDungNguoiDung = "";
        for (var i = 0; i < mangNguoiDung.length; i++) {
            var nguoiDung = mangNguoiDung[i];

            noiDungNguoiDung += `
            <tr 
         
           
            >
                <td><input class="checkBox" type="checkbox" value="${nguoiDung.TaiKhoan}"></td>
                <td>${nguoiDung.TaiKhoan}</td>
                <td>${nguoiDung.MatKhau}</td>
                <td>${nguoiDung.HoTen}</td>
                <td>${nguoiDung.Email}</td>
                <td>${nguoiDung.SoDT}</td>
                <td><button class="btn btn-danger">Xoa</button></td>
            </tr>
            `
        }
        document.querySelector("#tblDanhSachNguoiDung").innerHTML = noiDungNguoiDung;
    }

    //Xu ly su kien cho nut dong  (ko can vi co data-dismiss  roi)
    $("body").delegate("#btnDong", "click", function () {
        $("#btnDongForm").trigger("click");
    })






    //Xu ly su kien tim kiem
    // $("#txtTuKhoa").keyup(function () {
    //     var tuKhoa = $("#txtTuKhoa").val();
    //     console.log(tuKhoa);
    //     var danhSachNguoiDungKQ = danhSachNguoiDung.timKiemNguoiDung(tuKhoa);
    //     layDanhSachNguoiDung(danhSachNguoiDungKQ.mangNguoiDung); // coi chung thieu cai mang 
    // })

    //Xu ly xoa nguoi dung
    // $("#btnXoaNguoiDung").click(function(){
    //     $(".checkBox").each(function(){
    //         if($(this).is(":checked")){
    //             var taiKhoan = $(this).val();
    //             danhSachNguoiDung.xoaNguoiDung(taiKhoan);
    //         }
    //     })
    //     layDanhSachNguoiDung(danhSachNguoiDung.mangNguoiDung);
    //     LuuStorage();
    // })




    // Xu ly luu  va truy xuat voi localstorage
    function LuuStorage() {
        //luu mang nguoi dung
        var danhSachNguoiDungJSON = JSON.stringify(danhSachNguoiDung.mangNguoiDung)
        localStorage.setItem("danhSachNguoiDung", danhSachNguoiDungJSON);
    }

    function layStorage() {
        var danhSachNguoiDungJSON = localStorage.getItem("danhSachNguoiDung");
        danhSachNguoiDung.mangNguoiDung = JSON.parse(danhSachNguoiDungJSON);
        layDanhSachNguoiDung(danhSachNguoiDung.mangNguoiDung);
    }
    layStorage();
})







