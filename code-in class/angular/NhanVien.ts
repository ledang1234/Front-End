class NhanVien {
    private hoTen: string;

    constructor(hoTen: string) {
        this.hoTen = hoTen;
    }

    public tinhLuong() {
        return 1000;
    }

}

class GiamDoc extends NhanVien {
    private heSoLuong: number;

    constructor(hoTen: string, heSoLuong: number) {
        super(hoTen);
        this.heSoLuong = heSoLuong;

    }
    public tinhLuong() {
        return super.tinhLuong() * this.heSoLuong;
    }
}

const gd = new GiamDoc("Gia Le", 3);
console.log(gd.tinhLuong());

interface INhanVien {
    hoTen: string;
    tuoi?: number;
    thucHienCongViec: () => void;
}

class NhanVienThietKe implements INhanVien {
    hoTen: string;
    tuoi: number;
    constructor(hoten: string , tuoi: number){
        this.hoTen = hoten;
        this.tuoi  = tuoi;
    }
    thucHienCongViec(): void {
        console.log("Thiet ke");
    }

    
}
