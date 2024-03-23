import NhanVien from "./NhanVien.js";

class QuanLy extends NhanVien {
  dsPhongBan = [];
  constructor(manv, tennv, mangPhongBan) {
    super(manv, tennv);
    this.dsPhongBan = mangPhongBan;
  }
  tinhLuong() {
    return super.tinhLuong() + 1000;
  }
}

export default QuanLy;
