var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var NhanVien = /** @class */ (function () {
    function NhanVien(hoTen) {
        this.hoTen = hoTen;
    }
    NhanVien.prototype.tinhLuong = function () {
        return 1000;
    };
    return NhanVien;
}());
var GiamDoc = /** @class */ (function (_super) {
    __extends(GiamDoc, _super);
    function GiamDoc(hoTen, heSoLuong) {
        var _this = _super.call(this, hoTen) || this;
        _this.heSoLuong = heSoLuong;
        return _this;
    }
    GiamDoc.prototype.tinhLuong = function () {
        return _super.prototype.tinhLuong.call(this) * this.heSoLuong;
    };
    return GiamDoc;
}(NhanVien));
var gd = new GiamDoc("Gia Le", 3);
console.log(gd.tinhLuong());
var NhanVienThietKe = /** @class */ (function () {
    function NhanVienThietKe(hoten, tuoi) {
        this.hoTen = hoten;
        this.tuoi = tuoi;
    }
    NhanVienThietKe.prototype.thucHienCongViec = function () {
        console.log("Thiet ke");
    };
    return NhanVienThietKe;
}());
