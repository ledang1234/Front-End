//Lấy thông tin người dùng nhâp vào khi nguoi dung click btn
var nhanVien = {
    maNhanvien: '',
    tenNhanVien: '',
    chucVu:'',
    heSoChucVu: '',
    luongCanBan: '',
    gioLamTrongThang:'',
    tinhTongLuong: function(){

    },
    xepLoaiNhanVien: function(){

    }
}
document.getElementById('btnHienThiThongTin').onclick = function(){
    ///Lấy thông tin người dùng nhâp vào khi nguoi dung click btn
    nhanVien.maNhanvien = document.querySelector('MaNhanVien').value;
    nhanVien.tenNhanVien  = document.querySelector('TenNhanVien').value;
    nhanVien.chucVu =  document.querySelector('ChucVu').value;

    //lay innerHTML tu thẻ option dc chọn
     nhanVien.chucVu = document.querySelector('chucVu option:checked')
    //Dom dến dac thẻ span append nội dung vào
    document.querySelector('txtMaNhanVien').innerHTML = nhanVien.maNhanvien;
    document.querySelector('txtTenNhanVien').innerHTML =  nhanVien.tenNhanVien ;
    document.querySelector('txtChucVu').innerHTML = nhanVien.chucVu;
}
