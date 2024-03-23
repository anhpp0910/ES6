class NhanVien {
  maNV;
  tenNV;
  constructor(manv, tennv) {
    this.maNV = manv;
    this.tenNV = tennv;
  }
  tinhLuong() {
    return 1000;
  }
}

class NhanVien123 {
  maNV;
  tenNV;
  constructor(manv, tennv) {
    this.maNV = manv;
    this.tenNV = tennv;
  }
  tinhLuong() {
    return 2000;
  }
}

export default NhanVien;
