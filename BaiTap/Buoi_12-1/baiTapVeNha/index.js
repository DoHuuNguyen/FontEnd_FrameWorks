//tao form sau :
//hoten (Text)
//gioitinh (select)
//namsinh (text)
//tao 1 nut kiem tra
//khi an vao nut kiem tra hop thoai se hien len thong tin nhu sau:
// Ong/Ba nguyen van a co/khong du dieu kien di nghia vu quan su
//ong/ba phu thuoc vao gioi tinh minh chon
//tuoi = namhientai - namsinh (get current year in javascript
//tuoi >=18 va tuoi <=27 =>du dieu kien di nvqs
// nguoc lai ko du dieu kien di nvqs
function clickHere() {
  let namsinh = document.getElementById("NamSinh").value;
  var dateObj = new Date();
  let year = dateObj.getFullYear();
  let tuoi = year - namsinh;
  let hovaten = document.getElementById("hovaten").value;
  if (namsinh == "") {
    swal("Xin lỗi", "Bạn chưa nhập Năm sinh", "error");
  } else if (hovaten == "") {
    swal("Xin lỗi", "Bạn chưa nhập họ và tên", "error");
  } else {
    if (tuoi >= 18 && tuoi <= 27) {
      let gt = document.getElementById("gender").value;

      if (gt === "0") {
        swal("Chúc Mừng Ong" + hovaten, "Đã đăng ký thành công", "success");
      } else {
        swal("Xin lỗi Ba " + hovaten, "Bạn phải là nam", "error");
      }
    } else {
      swal("Xin lỗi", "Bạn chưa đủ tuổi", "error");
    }
  }
}
