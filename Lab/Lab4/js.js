var hi = angular.module("a", []);
hi.controller("myCtrl", function ($scope) {
  $scope.ten = "Nguyễn Văn Tèo";
  $scope.ngaysinh = "31-1-2023";
  $scope.gt = "nam";
  $scope.diemtb = "8";
  $scope.img = "img/teof.png";
  $scope.sv = [
    {
      img: "img/teof.png",
      ten: "Nguyễn Văn Tèo",
      ngaysinh: "31-1-2023",
      gioitinh: "Nam",
      diemtb: "7.5",
    },
    {
      img: "img/teof.png",
      ten: "Nguyễn Văn Tèo",
      ngaysinh: "31-1-2023",
      gioitinh: "Nam",
      diemtb: "7.5",
    },
    {
      img: "img/teof.png",
      ten: "Nguyễn Văn Tèo",
      ngaysinh: "31-1-2023",
      gioitinh: "Nam",
      diemtb: "7.5",
    },
  ];
});
