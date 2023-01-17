function myInfo($scope) {
  $scope.ten = "Đỗ Hữuu Nguyện";
  $scope.tuoi = "19";
  $scope.email = "nguyen@gmail.com";
  $scope.sdt = "01231231";
  $scope.nganh = "Ứng dụng phần mềm";
}
var info = angular.module("a", []);
info.controller("infome", myInfo);

function yourInfo($scope) {
  $scope.students = [
    {
      hovaten: "Van Dinh Son ",
      age: "20",
      sex: "Nam",
      gmail: "sondt@gmail.com",
      phone: "83742083",
      chuyenNganh: "Ung dung phan mem",
    },
  ];
  var your = angular.module("a", []);
  your.controller("infome", yourInfo);
}
