window.sinhvienctrl = function ($scope, $location, $http) {
  var apiUrl = "http://localhost:3000/sinhVien";
  $scope.getData = function () {
    $http.get(apiUrl).then(function (response) {
      $scope.dssv = response.data;
    });
  };
  $scope.getData();
  $scope.kiemtra = {
    ten: false,
    namsinh: false,
    namsinhCheck: false,
    chuyennganh: false,
    diachi: false,
  };
  $scope.settext = function () {
    $scope.input = {
      ten: "",
      namsinh: "",
      gioitinh: "Nam",
      chuyennganh: "",
      diachi: "",
    };
    $scope.kiemtra = false;
  };
  $scope.settext();
  $scope.add = function () {
    var y = new Date();
    if (!$scope.input || !$scope.input.ten) {
      $scope.kiemtra.ten = true;
    } else if (!$scope.input || !$scope.input.namsinh) {
      $scope.kiemtra.ten = false;
      $scope.kiemtra.namsinh = true;
    } else if (
      isNaN($scope.input.namsinh) == true ||
      y.getFullYear() - Number($scope.input.namsinh) < 18
    ) {
      $scope.kiemtra.namsinh = false;
      $scope.kiemtra.namsinhCheck = true;
    } else if (!$scope.input || !$scope.input.chuyennganh) {
      $scope.kiemtra.namsinhCheck = false;
      $scope.kiemtra.chuyennganh = true;
    } else if (!$scope.input || !$scope.input.diachi) {
      $scope.kiemtra.chuyennganh = false;
      $scope.kiemtra.diachi = true;
    } else {
      var newItem = {
        ten: $scope.input.ten,
        namsinh: $scope.input.namsinh,
        gioitinh: $scope.input.gioitinh,
        chuyennganh: $scope.input.chuyennganh,
        diachi: $scope.input.diachi,
      };
      $http.post(apiUrl, newItem).then(function (response) {
        $location.path("");
        $scope.getData();
      });
      swal("Thêm thành công", "", "success");
      $scope.settext();
    }
  };
  $scope.update = function () {
    var editId = $scope.editId;
    if (editId) {
      var updateItem = {
        ten: $scope.input.ten,
        namsinh: $scope.input.namsinh,
        gioitinh: $scope.input.gioitinh,
        chuyennganh: $scope.input.chuyennganh,
        diachi: $scope.input.diachi,
      };
      $http.put(`${apiUrl}/${editId}`, updateItem).then(function (response) {
        $location.path("");
        $scope.getData();
      });
      swal("Sửa thành công", "", "success");
      $scope.settext();
    } else {
      swal("Sửa Thất Bại", "Bạn chưa chọn sinh viên muốn sửa", "warning");
    }
  };
  $scope.chon = function (editId) {
    $scope.editId = editId;
    $http.get(`${apiUrl}/${editId}`).then(function (response) {
      if (response.status == 200) {
        $scope.input = response.data;
      }
    });
  };
};
