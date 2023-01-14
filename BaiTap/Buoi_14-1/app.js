function myDemo($scope) {
  $scope.welcome = "hello world";
}
//sử dụng anguler js
//định nghĩa angular js
var app = angular.module("myapp", []);
app.controller("demoController", myDemo);
