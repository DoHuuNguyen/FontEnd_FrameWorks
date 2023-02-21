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
    sdtCheck: false,
    ccCheck: false,
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
    $scope.kiemtradulieu.sdtCheck = false;
    $scope.kiemtradulieu.ccCheck = false;
  };
  $scope.setText();
  //them
  $scope.Dat = function () {
    //validate số điện thoại
    var sdtform = /((09|03|07|08|05)+([0-9]{8})\b)/g;
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
    } else if (!$scope.inputValue || !$scope.inputValue.chuyenbayOp) {
      $scope.kiemtradulieu.hanhly = false;
      $scope.kiemtradulieu.chuyenbay = true;
    } else if (!$scope.inputValue || !$scope.inputValue.htttOp) {
      $scope.kiemtradulieu.chuyenbay = false;
      $scope.kiemtradulieu.httt = true;
    } else if (sdtform.test($scope.inputValue.sdt) == false) {
      $scope.kiemtradulieu.httt = false;
      $scope.kiemtradulieu.sdtCheck = true;
    } else if (isNaN($scope.inputValue.cccd) == true) {
      $scope.kiemtradulieu.ccCheck = true;
      $scope.kiemtradulieu.sdtCheck = false;
    } else {
      //sửa
      var editID = $scope.editID;
      if (editID) {
        var updateItem = {
          hovaten: $scope.inputValue.hovaten,
          cccd: $scope.inputValue.cccd,
          email: $scope.inputValue.email,
          gioitinh: $scope.inputValue.gioitinh,
          ngaysinh: $scope.inputValue.ngaysinh,
          sdt: $scope.inputValue.sdt,
          chuyenbay: $scope.inputValue.chuyenbayOp.name,
          hanhly: $scope.inputValue.hanhly,
          hinhthucthanhtoan: $scope.inputValue.htttOp.name,
        };
        $http.put(`${apiURL}/${editID}`, updateItem).then(function (response) {
          if (response.status == 200) {
            $location.path("datve");
            $scope.getData();
          }
        });
        $scope.setText();
        return;
      }

      //them
      var newItem = {
        hovaten: $scope.inputValue.hovaten,
        cccd: $scope.inputValue.cccd,
        email: $scope.inputValue.email,
        gioitinh: $scope.inputValue.gioitinh,
        ngaysinh: $scope.inputValue.ngaysinh,
        sdt: $scope.inputValue.sdt,
        chuyenbay: $scope.inputValue.chuyenbayOp.name,
        hanhly: $scope.inputValue.hanhly,
        hinhthucthanhtoan: $scope.inputValue.htttOp.name,
      };
      $http.post(apiURL, newItem).then(function (response) {
        $location.path("datve");
        $scope.getData();
      });
      swal("Đặt thành công", "", "success");
      $scope.setText();
    }
  };
  $scope.onEdit = function (editID) {
    $scope.editID = editID;
    $http.get(`${apiURL}/${editID}`).then(function (response) {
      if (response.status == 200) {
        $scope.inputValue = response.data;
      }
    });
  };

  $scope.onDelete = function (deleteID) {
    var confirm = window.confirm("Bạn có muốn xóa khumm ?");
    if (confirm) {
      $http.delete(`${apiURL}/${deleteID}`).then(function (response) {
        $location.path("datve");
        $scope.getData();
      });
    }
  };
  $scope.reset = function () {
    $scope.setText();
  };
};
