function myInfo($scope) {
  $scope.ten = "Đỗ Hữuu Nguyện";
  $scope.tuoi = "19";
  $scope.email = "nguyen@gmail.com";
  $scope.sdt = "01231231";
  $scope.nganh = "Ứng dụng phần mềm";
}

// function sonDauBuoi($scope) {
//   $scope.ngu = "Chuc mung nam's moi";
// }
var info = angular.module("a", []);
info.controller("infome", myInfo);
// viet tat
info.controller("sonDauBuoiController", function ($scope) {
  $scope.ngu = "chuc mung nam's moi";
  $scope.infoo = {
    ten: "Son dau buoi",
    tuoi: "18",
    email: "sondaubuoi@gmail.com",
    sdt: "01231231",
    nganh: "NGu",
  };
});
//
