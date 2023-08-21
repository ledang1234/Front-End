function QuanLyNguoiDung() {
    this.layDanhSachNguoiDung = function () {
        return axios({
            url: 'http://svcy.myclass.vn/api/QuanLyTrungTam/ChiTietKhoaHoc/{id}',
            method: 'GET'
        })
    }
}