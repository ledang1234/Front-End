class SinhVien{
    public hoTen: string;
    public lop:string;

    constructor(hoTen: string , lop: string){
        this.hoTen = hoTen;
        this.lop =  lop;
    }

    public getHoTen() {
        return this.hoTen;
    }
    public setHoTen(value: string){
        this.hoTen  = value;
    }

    public  XuatThongTin(){
        console.log(`Ho ten ${this.hoTen} lop: ${this.lop}`);
    }

}

const sv =  new SinhVien("Gia Le" ,"FE37");

console.log(`ten cu: ${sv.getHoTen()}`)
sv.setHoTen("Minh Tri");
console.log(`ten moi:  ${sv.getHoTen()}`);
// console.log(sv.XuatThongTin());