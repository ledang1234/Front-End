var SinhVien = /** @class */ (function () {
    function SinhVien(hoTen, lop) {
        this.hoTen = hoTen;
        this.lop = lop;
    }
    SinhVien.prototype.getHoTen = function () {
        return this.hoTen;
    };
    SinhVien.prototype.setHoTen = function (value) {
        this.hoTen = value;
    };
    SinhVien.prototype.XuatThongTin = function () {
        console.log("Ho ten " + this.hoTen + " lop: " + this.lop);
    };
    return SinhVien;
}());
var sv = new SinhVien("Gia Le", "FE37");
console.log("ten cu: " + sv.getHoTen());
sv.setHoTen("Minh Tri");
console.log("ten moi:  " + sv.getHoTen());
// console.log(sv.XuatThongTin());
