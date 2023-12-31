import React, { Component } from "react";
import DanhSachSanPham from "./danh-sach-san-pham";
import Modal from "./modal";

export default class ShoppingCart extends Component {
  mangSanPham = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: 'AMOLED, 6.2", Full HD+',
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg"
    },

    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg"
    },

    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: 'OLED, 6.5", 1242 x 2688 Pixels',
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg"
    }
  ];

  constructor(props) {
    super(props);
    this.state = {
      mangSanPham: this.mangSanPham,
      detailProduct: this.mangSanPham[0],
      mangGioHang: []
    };
  }

  handleDetail = product => {
    this.setState({
      detailProduct: product
    });
  };

  // tim vi  tri
  timViTri = id => {
    return this.state.mangGioHang.findIndex(sanPham => {
      return sanPham.maSP === id;
    })
  }
  // Them 
  handleGioHang = product => {
    const addProduct = {
      maSP: product.maSP,
      tenSP: product.tenSP,
      hinhAnh: product.hinhAnh,
      soLuong: 1,
      giaBan: product.giaBan
    };
    /*
    0 : tim vi tri fildIndex()
    1: neu  index != -1 => tim thay => update 
    2: Nguoc lai => ko tim thay => add
    */
    let mangGioHang = [...this.state.mangGioHang, addProduct];
    let index = this.timViTri(addProduct.maSP);

    if (index !== -1) {
      mangGioHang[index].soLuong += 1;
      
    } else {
      mangGioHang = [...this.state.mangGioHang, addProduct];
      
    }
    // let mangGioHang = [...this.state.mangGioHang, addProduct];
    this.setState({
      mangGioHang
    });
  };

  // DELETE
  handleDelete = product => {
    /*
    0 : tao mang copy tu mang gio hang
    1 : tim vi tri fildIndex()
    2: neu  tim thay => xoa splice (index, 1)
    3: cap nhat state
    */
    let mangGioHang = [...this.state.mangGioHang];
    let index = this.timViTri(product.maSP);

      if (index !== -1) {
      mangGioHang.splice(index,1)
      this.setState({
        mangGioHang
      });
    } else {
      mangGioHang = [...this.state.mangGioHang];
    }
  }

  // Tang Giam SL
  handleTangGiamSL =  (product, status) => {
    let mangGioHang = [...this.state.mangGioHang];
    let index = this.timViTri(product.maSP);
    if (status){
      mangGioHang[index].soLuong += 1;
    }else{
      if (mangGioHang[index].soLuong  > 1){
        mangGioHang[index].soLuong -= 1;
      }
    }
    this.setState({
        mangGioHang
      });
  }

  /**
   * Tong SL Gio hang
   */
  tongSL  = () => {
    /**
     * 0. Tao bien tich luy
     * 1. Duyet mang mangGioHang
     * 2. Cong don so luong vao bien tong
     * 3. return tong
     */
    // let tong = 0;
    // this.state.mangGioHang.map(sanPham =>{
    //   tong += sanPham.soLuong
    // });
    // return tong;

    return this.state.mangGioHang.reduce((tong , sanPham)=>{
      return tong+= sanPham.soLuong
    }, 0)

  }


  render() {
    const { detailProduct } = this.state;

    return (
      <div>
        <h3 className="title">Bài tập giỏ hàng</h3>
        <div className="container">
          <button
            className="btn btn-danger"
            data-toggle="modal"
            data-target="#modelId"
          >
            Giỏ hàng ({this.tongSL})
          </button>
        </div>
        <DanhSachSanPham
          listProduct={this.state.mangSanPham}
          detailProduct={this.handleDetail}
          gioHang={this.handleGioHang}
        />
        <Modal 
          gioHang={this.state.mangGioHang} 
          delete={this.handleDelete} 
          tangGiamSL={this.handleTangGiamSL}
            />
        <div className="row">
          <div className="col-sm-5">
            <img className="img-fluid" src={detailProduct.hinhAnh} alt="" />
          </div>
          <div className="col-sm-7">
            <h3>Thông số kỹ thuật</h3>
            <table className="table">
              <tbody>
                <tr>
                  <td>Màn hình</td>
                  <td>{detailProduct.manHinh}</td>
                </tr>
                <tr>
                  <td>Hệ điều hành</td>
                  <td>{detailProduct.heDieuHanh}</td>
                </tr>
                <tr>
                  <td>Camera trước</td>
                  <td>{detailProduct.cameraTruoc}</td>
                </tr>
                <tr>
                  <td>Camera sau</td>
                  <td>{detailProduct.cameraSau}</td>
                </tr>
                <tr>
                  <td>RAM</td>
                  <td>{detailProduct.ram}</td>
                </tr>
                <tr>
                  <td>ROM</td>
                  <td>{detailProduct.rom}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
