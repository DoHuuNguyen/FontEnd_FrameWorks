function myInfo($scope) {
  $scope.ten = "Đỗ Hữuu Nguyện";
  $scope.tuoi = "19";
  $scope.email = "nguyen@gmail.com";
  $scope.sdt = "01231231";
  $scope.nganh = "Ứng dụng phần mềm";
}
var info = angular.module("a", []);
info.controller("infome", myInfo);
