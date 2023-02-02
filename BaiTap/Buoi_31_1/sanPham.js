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
  $scope.count = 0;
  $scope.myFunc = function () {
    $scope.count++;
  };
  $scope.sayHello = function () {
    $scope.hi = $scope.test;
  };
  $scope.Cong = function () {
    $scope.kq = $scope.Num1 + $scope.Num2;
  };
  $scope.Tru = function () {
    $scope.kq = $scope.Num1 - $scope.Num2;
  };
  $scope.Nhan = function () {
    $scope.kq = $scope.Num1 * $scope.Num2;
  };
  $scope.Chia = function () {
    $scope.kq = $scope.Num1 / $scope.Num2;
  };
});
