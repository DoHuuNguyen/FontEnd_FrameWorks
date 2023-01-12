function TinhToan() {
  let dai = document.getElementById("dai").value;
  let rong = document.getElementById("rong").value;
  if (dai == "") {
    swal("Lỗi", "Chiều dài đang trống", "error");
  } else if (rong == "") {
    swal("Lỗi", "Chiều Rộng đang trống", "error");
  } else {
    swal("Đã Xong", "Diện Tích là " + Number(rong * dai), "success");
  }
}
