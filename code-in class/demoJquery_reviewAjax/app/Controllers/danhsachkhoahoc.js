//File thực hiện các thao tác DOM trên giao diện Views (dánhsachkhoahoc.html)
// console.log(axios)

 //axios là thư viên kết nối đến BE lấy dât về
 
//  var objectAjax = {
//      url: 'http://svcy.myclass.vn/api/QuanLyTrungTam/DanhSachKhoaHoc',
//      method: 'GET'
//  }

// axios(objectAjax).then(function 
// (result) {
//      console.log(result.data)
//  }).catch(function (error) {
//      console.log(error)
//  })

//Khoi tao doi tuong sẻrvice

<script src="../Services/QuanLyKhoaHocService.js"></script>

var quanLyKhoaHocService = new QuanLyKhoaHocService();

//Dùng đối tượng này gọi api
quanLyKhoaHocService.layDanhSachKhoaHoc().then(function(result){
    console.log(result.data)
}).catch(function(error){
    console.log(error)

});
//render khoá học dựa vào dữ liệu api
var renderKhoaHoc = function (mangKhoaHoc){
    var noiDungKhoaHoc  = '';
    for (var i = 0; i< mangKhoaHoc.length; i++){
        var khoaHoc = mangKhoaHoc[i];
        noiDungKhoaHoc+=`
                <tr>
                    <td></td>
                    <td>${khoaHoc.MaKhoaHoc}</td>
                    <td>${khoaHoc.TenKhoaHoc}</td>
                    <td>${khoaHoc.MoTa}</td>
                    <td><img src="${khoaHoc.HinhAnh}" width="300" height= "150"</td>
                    <td>${khoaHoc.LuotXem}</td>
                    <td>${khoaHoc.MaKhoaHoc}</td>
                    <td><button class = "btn btn-danger" onclick="xoaKhoaHoc('${khoaHoc.MaKhoaHoc}')>Xoá khoá học</button></td>
                </tr>
           
  `;
};
//Dom den tbody gioa dien add noi dung vao
document.querySelector('#tblDanhSachKhoaHoc').innerHTML = noiDungKhoaHoc;
}

//viet ham xoa khoa hoc
var  xoaKhoaHoc = function(MaKhoaHoc){
    quanLyKhoaHocService.xoaKhoaHoc(maKhoaHoc).then(function(ressult){
        console.log(result.data);
        //Load lạo khoa học sau khi xoá
        layDanhSachKhoaHoc();
    })
}
//Viet su kien  cho ut btnThemKhoaHoc click bat pop up
document.querySelector('#btnThemKhoaHoc').onclick =  function(){
    //Tạo title
    document.querySelector('.model-title').innerHTML = 'Thêm khoá học'

    //Tạo button
    var buttonThemKhoaHoc  =`
        <button id= "btnTaoKhoaHoc" class="btn btn-success" >Tạo khoá học</button>
    `;
    document.querySelector('.model-title').innerHTML = buttonThemKhoaHoc;
}

//su dung ajax load dropdown người tạo
var nguoiDungService = new QuanLyNguoiDungService();
nguoiDungService.layDanhSachNguoiDung().then(function(result){
    console.log(result.data)
}).catch(function(){
    console.log(error)
})

var renderDropdown = function (mangNguoidung){
    var noiDungNguoiTao = '';
    for (var i = 0; i < mangNguoiDung.length; i++){
        var nguoiDung  = mangNguoidung[i];
        noiDungNguoiTao += `
            <option value='$nguoiDung.TaiKhoan'>${nguoiDung.HoTen}</option>
        `;  
    }
    document.querySelector('#NguoiTao').innerHTML = noiDungNguoiTao;
}

//thuc hiẹn nghiep vu thme khoa hoc
var taoKhoaHoc = function(){
    //Lay thong tin tu nguoi dung nhap vao tạo ra objec mdel backend yeu cau
    var khoaHoc = {
        MaKhoaHoc: document.querySelector('#MaKhoaHoc').value,
        TenKhoaHoc: document.querySelector('#TenKhoaHoc').value,
        MoTa: document.querySelector('#MoTa').value,
        HinhAnh: document.querySelector('#HinhAnh').value,
        LuotXem: document.querySelector('#LuotXem').value,
        NguoiTao: document.querySelector('#NguoiTao').value,
    }
    console.log(khoaHoc)
    //Gui qua backend thong qua api
    quanLyKhoaHocServicel.taoKhoaHoc(khoaHoc).then(function(result){
        console.log(result.data);
        //Goi lai ham lay dnah sach khoa hoc load lai table
        layDanhSachKhoaHoc();
    }).catch(function(err){
        console.log(err)
    })
}