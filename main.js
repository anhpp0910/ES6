// var iNum = 5;

// if (true) {
//   var iNum = 10;
// }

// console.log(iNum);

// let iNum = 5;

// if (true) {
//   let iNum = 10;
//   console.log(iNum);
// }

// console.log(iNum);

// const pi = 3.14;
// pi = 5;
// console.log(pi);

const object = { hoTen: "AnhPP", tuoi: 24 };
object.hoTen = "ThienNT";
// object = { hoTen: "ThienNT", tuoi: 23 };
console.log(object);

var mangButton = document.getElementsByTagName("button");
for (let i = 0; i < 3; i++) {
  mangButton[i].onclick = function () {
    alert(i);
  };
}

// Arrow Function

// var hoTen = "ThienNT";
// // window.hoTen = "ThienNT"

// let hocVien = {
//   hoTen: "AnhPP",
//   lop: "BC58",
//   layThongTinHocVien: function () {
//     function hienThiThongTin() {
//       console.log("Họ tên: " + this.hoTen + " - Lớp: " + this.lop);
//     }
//     hienThiThongTin();
//   },
// };

// hocVien.layThongTinHocVien();

// let hocVien = {
//   hoTen: "AnhPP",
//   lop: "BC58",
//   layThongTinHocVien: function () {
//     let hienThiThongTin = () => {
//       console.log("Họ tên: " + this.hoTen + " - Lớp: " + this.lop);
//     };
//     hienThiThongTin();
//   },
// };

// hocVien.layThongTinHocVien();

// function tinhTong(a, b) {
//   console.log(a + b);
// }

// function tinhTong(...resParam) {
//   let tong = 0;
//   for (let i = 0; i < resParam.length; i++) {
//     tong += resParam[i];
//   }
//   console.log(tong);
//   return tong;
// }

// tinhTong(1, 2);
// tinhTong(1, 2, 3);
// tinhTong(1, 2, 3, 4, 5, 6);

let mangHocVien = [
  {
    maHocVien: 1,
    tenHocVien: "AnhPP",
  },
  {
    maHocVien: 2,
    tenHocVien: "ThienNT",
  },
];

function xuLyMangHocVien(...resParam) {
  if (resParam.length === 2) {
    resParam[1].push(resParam[0]);
    console.log(resParam[1]);
  } else if (resParam.length > 2) {
    switch (resParam[2]) {
      case "Delete":
        {
          let index = resParam[1].findIndex(
            (hv) => hv.maHocVien === resParam[0].maHocVien
          );
          resParam[1].splice(index, 1);
          console.log(resParam[1]);
        }
        break;
      case "Update": {
        let index = resParam[1].findIndex(
          (hv) => hv.maHocVien === resParam[0].maHocVien
        );
        resParam[1][index].tenHocVien = "ThuyHH";
        console.log(resParam[1]);
      }
    }
  } else {
    console.log(resParam[0]);
  }
}

let hv = {
  maHocVien: 3,
  tenHocVien: "NhuTT",
};

// Spread Operator
// let a = 5;
// let b = a;
// b = 10;
// console.log(a);
// console.log(b);

let mangA = [1, 2, 3, 4];
let mangB = [...mangA];
mangA.push(7, 8);
mangB.push(5, 6);
console.log(mangA);
console.log(mangB);

let hs1 = { maHS: 1, tenHS: "AnhPP" };
let hs2 = { ...hs1, lop: "BC58" };
hs2.tenHS = "ThienNT";
console.log(hs1);
console.log(hs2);

function tinhTong(a = 10, b = 10, c = a + b) {
  console.log(a + b + c);
  return a + b;
}
tinhTong(100, 100, 100);

// for in
let arrName = [
  { name: "Tony", age: 18 },
  { name: "Lin", age: 19 },
  { name: "Tammy", age: 20 },
];
for (let [i, v] of arrName.entries()) {
  console.log(i, v);
}

// Object Destructuring
let pet = {
  name: "Gâu Đần",
  age: 3,
  breed: "Golden Retriever",
  size: {
    weight: "30kg",
    height: "56cm",
  },
};

// Lấy thuộc tính bằng ES5
// var name = pet.name;
// var age = pet.age;
// var size = pet.size;
// console.log(name, age, size);

// ES6 - destructuring
// let { name, age } = pet;
// let { weight, height } = pet.size;
// console.log(name, age);
// console.log(weight, height);

// // Đặt tên mới cho biến
// let { weight: w, height: h } = pet.size;
// console.log(w, h);

// Array Destructuring
let topProgrammingLang = ["Javascript", "Python", "Java"];
let [first, second, third] = topProgrammingLang;
console.log(first);
console.log(second);
console.log(third);

// Object Literal
let name = "ten";
let myObj = {
  [name]: "A Phủ",
  sayHi() {
    console.log("Hi, my name is " + this.ten);
  },
};

myObj.sayHi();
