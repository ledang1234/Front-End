//lơp doi tuong chua nhung phung thuc giao tiep vs  backend api

function QuanLyKhoaHocService(){
    this.layDanhSachKhoaHoc = function(){
        return axios({
            url: 'http://svcy.myclass.vn/api/QuanLyTrungTam/DanhSachKhoaHoc',
            method: 'GET'
        });
    },
    this.taoKhoaHoc = function(khoaHoc){
        return axios({
            url:'http://svcy.myclass.vn/api/QuanLyTrungTam/DanhSachKhoaHoc'
        })
    }
    this.xoaKhoaHoc =  function (maKhoaHoc){
        return axios ({
            url: 'http://sv.myclass.vn/api/QuanLyTrungTam/XoaKhoaHoc/'

        })
    }
}