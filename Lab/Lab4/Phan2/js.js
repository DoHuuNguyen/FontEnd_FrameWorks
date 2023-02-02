var b = angular.module("a", []);
b.controller("myCtrl", function ($scope) {
  $scope.tinh = function () {
    $scope.dientich = $scope.dai + $scope.rong;
    $scope.ChuVi = ($scope.dai + $scope.rong) * 2;
  };
});
b.controller("myCtrlne", function ($scope) {
  $scope.ten = "Nguyễn Văn Tèo";
  $scope.ngaysinh = "31-1-2023";
  $scope.gt = "nam";
  $scope.diemtb = 5;
  $scope.img = "img/teof.png";
  var diem = parseFloat($scope.diemtb);
  $scope.xeploai = function () {
    if (diem >= 5) {
      // $scope.danhgia = "Đậu";
      swal("Chúc Mừng " + $scope.ten, "Đã Đậu", "success");
    } else {
      // $scope.danhgia = "Rớt";
      swal("Xin lỗi", "Bạn Đã Rớt", "error");
    }
  };
});
