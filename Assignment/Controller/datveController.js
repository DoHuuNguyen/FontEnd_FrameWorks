window.datveController = function ($scope, $http, $location) {
  $scope.title = "Đặt vé";
  var apiURL = "http://localhost:3000/datve";
  var apiChuyenBay = "http://localhost:3000/chuyenbay";
  var apiHttt = "http://localhost:3000/hinhthucthanhtoan";

  $http.get(apiChuyenBay).then(function (response) {
    $scope.dschuyenbay = response.data;
  });
  $http.get(apiHttt).then(function (response) {
    $scope.dshttt = response.data;
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
    chuyenbay: false,
    httt: false,
  };
  $scope.setText = function () {
    $scope.inputValue = {
      hovaten: "",
      cccd: "",
      email: "",
      sdt: "",
      gioitinh: "nam",
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
    $scope.kiemtradulieu.chuyenbay = false;
    $scope.kiemtradulieu.httt = false;
  };
  $scope.setText();
  //them
  $scope.Dat = function () {
    console.log($scope.chuyenbayOp);

    if (!$scope.inputValue || !$scope.inputValue.hovaten) {
      $scope.kiemtradulieu.hovaten = true;
    } else if (!$scope.inputValue || !$scope.inputValue.cccd) {
      $scope.kiemtradulieu.hovaten = false;
      $scope.kiemtradulieu.cccd = true;
    } else if (!$scope.inputValue || !$scope.inputValue.email) {
      $scope.kiemtradulieu.cccd = false;
      $scope.kiemtradulieu.email = true;
    } else if (!$scope.inputValue || !$scope.inputValue.sdt) {
      $scope.kiemtradulieu.email = false;
      $scope.kiemtradulieu.sdt = true;
    } else if (!$scope.inputValue || !$scope.inputValue.ngaysinh) {
      $scope.kiemtradulieu.sdt = false;
      $scope.kiemtradulieu.ngaysinh = true;
    } else if (!$scope.inputValue || !$scope.inputValue.hanhly) {
      $scope.kiemtradulieu.ngaysinh = false;
      $scope.kiemtradulieu.hanhly = true;
    } else if (!$scope.chuyenbayOp) {
      $scope.kiemtradulieu.hanhly = false;
      $scope.kiemtradulieu.chuyenbay = true;
    } else if (!$scope.httt) {
      $scope.kiemtradulieu.chuyenbay = false;
      $scope.kiemtradulieu.httt = true;
    } else {
      //them
      var newItem = {
        hovaten: $scope.inputValue.hovaten,
        cccd: $scope.inputValue.cccd,
        email: $scope.inputValue.email,
        gioitinh: $scope.inputValue.gioitinh,
        sdt: $scope.inputValue.sdt,
        chuyenbay: $scope.chuyenbayOp.name,
        hanhly: $scope.inputValue.hanhly,
        hinhthucthanhtoan: $scope.htttOp.name,
      };
      $http.post(apiURL, newItem).then(function (response) {
        $location.path("datve");
        $scope.getData();
      });
      swal("Đặt thành công", "", "success");
      $scope.setText();
    }
  };
  $scope.reset = function () {
    location.setText();
  };
};
