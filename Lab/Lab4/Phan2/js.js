var b = angular.module("a", []);
b.controller("myCtrl", function ($scope) {
  $scope.tinh = function () {
    $scope.dientich = $scope.dai + $scope.rong;
    $scope.ChuVi = ($scope.dai + $scope.rong) * 2;
  };
});
