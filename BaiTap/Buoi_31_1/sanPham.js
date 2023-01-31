var sanPham = angular.module("a", []);
sanPham.controller("SanPhamCtrl", function ($scope) {
  $scope.mySp = [
    {
      ten: "Quần Áo",
      gia: "200.000đ",
      colorSp: "Đen ánh đỏ fomula",
      km: "không có",
    },
    {
      ten: "Tivi",
      gia: "20m vnđ",
      colorSp: "đen",
      km: "có",
    },
    {
      ten: "Ô tô",
      gia: "200 trịu vnđ",
      colorSp: "Xanh dương",
      km: "có",
    },
  ];
});
