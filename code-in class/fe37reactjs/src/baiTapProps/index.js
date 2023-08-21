import React, { Component } from "react";
import DanhSachSanPham from "./danh-sach-san-pham"

export default class BaiTapProps extends Component {
    render() {
        return (
            <div>
                <h3 className="title">*BaiTapProps</h3>
                <DanhSachSanPham />
            </div>

        );
    }
}