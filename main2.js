function HocSinh(maHS, hoTen) {
  this.maHS = maHS;
  this.hoTen = hoTen;
  this.xuatThongTin = function () {
    console.log(this.maHS, this.hoTen);
  };
}

let hs = new HocSinh(1, "AnhPP");
console.log(hs);
hs.xuatThongTin();

class HocSinh2 {
  constructor(maHS, tenHS) {
    this.maHS = maHS;
    this.tenHS = tenHS;
  }
  xuatThongTin = () => {
    console.log(this.maHS, this.tenHS);
  };
}
let hs2 = new HocSinh2(2, "ThienNT");
console.log(hs2.tenHS);
hs2.xuatThongTin();
