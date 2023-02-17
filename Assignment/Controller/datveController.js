window.datveController = function ($scope, $http, $location) {
  $scope.title = "Đặt vé";
  var apiURL = "http://localhost:3000/datve";
  var apiChuyenBay = "http://localhost:3000/chuyenbay";

  $http.get(apiChuyenBay).then(function (response) {
    $scope.dschuyenbay = response.data.name;
  });

  $scope.getData = function () {
    $http.get(apiURL).then(function (response) {
      //sau khi đón được dữ liệu về
      $scope.dsve = response.data;
    });
  };
  $scope.getData();
  $scope.kiemtradulieu = {
    hovaten: false,
    cccd: false,
    email: false,
    sdt: false,
    ngaysinh: false,
    hanhly: false,
  };
  $scope.setText = function () {
    $scope.inputValue = {
      hovaten: "",
      cccd: "",
      email: "",
      sdt: "",
      ngaysinh: "",
      hanhly: "",
    };
    $scope.editID = 0;
    $scope.kiemtradulieu.hovaten = false;
    $scope.kiemtradulieu.cccd = false;
    $scope.kiemtradulieu.email = false;
    $scope.kiemtradulieu.sdt = false;
    $scope.kiemtradulieu.ngaysinh = false;
    $scope.kiemtradulieu.hanhly = false;
  };
  //them
  $scope.dat = function () {
    if (!$scope.inputValue || !$scope.inputValue.hovaten) {
      $scope.kiemtradulieu.hovaten = true;
    } else if (!$scope.inputValue || !$scope.inputValue.cccd) {
      $scope.kiemtradulieu.cccd = true;
    } else if (!$scope.inputValue || !$scope.inputValue.email) {
      $scope.kiemtradulieu.email = true;
    } else if (!$scope.inputValue || !$scope.inputValue.sdt) {
      $scope.kiemtradulieu.sdt = true;
    } else if (!$scope.inputValue || !$scope.inputValue.ngaysinh) {
      $scope.kiemtradulieu.ngaysinh = true;
    } else if (!$scope.inputValue || !$scope.inputValue.hanhly) {
      $scope.kiemtradulieu.hanhly = true;
    } else {
      //them
      var newItem = {
        hovaten: $scope.inputValue.hovaten,
        cccd: $scope.inputValue.cccd,
        email: $scope.inputValue.email,
        gioitinh: $scope.inputValue.gioitinh,
        sdt: $scope.inputValue.sdt,
        chuyenbay: $scope.inputValue.chuyenbay,
        hanhly: $scope.inputValue.hanhly,
        hinhthucthanhtoan: $scope.inputValue.hinhthucthanhtoan,
      };
      $http.post(apiURL, newItem).then(function (response) {
        $location.path("datve");
        $scope.getData();
      });
      swal("Đặt thành công", "", "success");
    }
  };
  $scope.reset = function () {
    location.reload();
  };
};
