import { getListProduct, deleteProduct, getProductById, updateProduct,addProduct, callapi} from "./utils/calllapi.js"
import SanPham from "./models/SanPham.js";

const renderHTML = () => {
    let contentHTML = `
    <div class="card text-white bg-dark">
        <div class="card-body">
        <h4 class="card-title">Danh sách sản phẩm</h4>
        <div class='container'>
            <div class="row">
            <div class="col-md-3">
                <input id="maSP" class="form-control" placeholder="Mã SP" disabled />
            </div>
            <div class="col-md-3">
                <input id="tenSP" class="form-control" placeholder="Tên SP" />
            </div>
            <div class="col-md-3">
                <input id="gia" class="form-control" placeholder="Giá" />
            </div>
            <div class="col-md-3">
                <input id="hinhAnh" class="form-control" placeholder="Link hình" />
            </div>
            </div>
            <br />
            <button id="btnThem" class="btn btn-success">Thêm sản phẩm</button>
            <button id="btnCapNhat" class="btn btn-success" >Cap nhat</button>
        </div>
        </div>
    </div>
    <div class="container">
        <table class="table">
        <thead>
            <tr>
            <th>Mã SP</th>
            <th>Tên SP</th>
            <th>Giá </th>
            <th>Hình ảnh</th>
            <th></th>
            </tr>
        </thead>
        <tbody id="tblDanhSachSanPham">

        </tbody>
        </table>
    </div>
    `;
    document.getElementById("root").innerHTML = contentHTML;
};
renderHTML();

const renderTable = () => {
    callapi("SanPham","GET",null)
        .then((result) => {
            console.log(result.data);
            let  contentTable = '';
            result.data.map((product) => {
                contentTable += `
                 <tr>
                    <td>${product.id}</td>
                    <td>${product.tenSP}</td>
                    <td>${product.gia}</td>
                    <td>
                        <img  src="${product.hinhAnh}" width="50" />
                    </td>
                    <td>
                    <button class="btn btn-info" onclick="suaSP(${product.id})">Sua</button>
                    <button class="btn btn-danger" onclick="xoaSP(${product.id})">Xoa</button>
                    </td>
                 </tr>
                `
            })
            document.getElementById("tblDanhSachSanPham").innerHTML = contentTable;
        })
        .catch((err) => {
            console.log(err);
        })
};
renderTable();

/**
 * Xoá sản phẩm
 */

window.xoaSP = xoaSP;


function xoaSP(id) {
    callapi(`SanPham/${id}`, "DELETE", null)
        .then((result)=>{
            console.log(result);
            alert("Xoá thành công");
            renderTable();
        })
        .catch((err)=>{
            console.log(err);
        });
}

/**
 * Sửa sản phẩm
 */

 window.suaSP = suaSP;
 function suaSP(id){
     getProductById(id)
        .then((result)=>{
            // console.log(result.data);
            document.getElementById("maSP").value = result.data.id;
            document.getElementById("tenSP").value = result.data.tenSP;
            document.getElementById("gia").value = result.data.gia;
            document.getElementById("hinhAnh").value = result.data.hinhAnh;

        })
        .catch((err)=>{
            console.log(err);
        })
 }

 /**
  * Cap nhat san pham
  */

 document.getElementById("btnCapNhat").addEventListener( "click",function(){
    let maSP = document.getElementById("maSP").value ;
    let tenSP = document.getElementById("tenSP").value ;
    let gia = document.getElementById("gia").value ;
    let hinhAnh = document.getElementById("hinhAnh").value;

    let sanPham  = new SanPham(maSP, tenSP, gia, hinhAnh);

    updateProduct(sanPham)
        .then((result)=>{
            alert("Cap nhat thanh cong");
            console.log(result);
            renderTable();
        })
        .catch((err)=> {
            console.log(err);
        })
 });
  /**
   * Them san pham
   * 
   */
  document.getElementById("btnThem").addEventListener("click",function(){
    let tenSP = document.getElementById("tenSP").value ;
    let gia = document.getElementById("gia").value ;
    let hinhAnh = document.getElementById("hinhAnh").value;

    let sanPham  = new SanPham("", tenSP, gia, hinhAnh);
    addProduct(sanPham)
        .then(result =>{
            alert("Them thanh cong");
            console.log(result);
            renderTable();
        })
        .catch(err  =>{
            console.log(err)
        })

  });


