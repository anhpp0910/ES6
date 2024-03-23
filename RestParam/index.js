var tinhDTB = function (...subjects) {
  let dtb = 0;
  let tongDiem = 0;
  for (let i = 0; i < subjects.length; i++) {
    tongDiem += subjects[i];
  }
  dtb = tongDiem / subjects.length;
  return dtb;
};

document.getElementById("btn1").onclick = function () {
  var toan = Number(document.getElementById("toan").value);
  var ly = Number(document.getElementById("ly").value);
  var hoa = Number(document.getElementById("hoa").value);
  var dtb = tinhDTB(toan, ly, hoa);
  document.getElementById("result1").innerHTML = dtb;
};

document.getElementById("btn2").onclick = function () {
  var van = Number(document.getElementById("van").value);
  var su = Number(document.getElementById("su").value);
  var dia = Number(document.getElementById("dia").value);
  var tiengAnh = Number(document.getElementById("tiengAnh").value);

  var dtb = tinhDTB(van, su, dia, tiengAnh);
  document.getElementById("result2").innerHTML = dtb;
};
