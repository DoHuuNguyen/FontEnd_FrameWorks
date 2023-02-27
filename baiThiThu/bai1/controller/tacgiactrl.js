window.tacgiactrl = function ($scope, $http, $location) {
  var urltacgia = "http://localhost:3000/TacGia";
  $scope.getData = function () {
    $http.get(urltacgia).then(function (response) {
      $scope.dstg = response.data;
    });
  };
  $scope.getData();
  $scope.kiemtra = {
    ten: false,
    diachi: false,
    tuoi: false,
    tuoicheck: false,
    tuoiso: false,
  };
  $scope.settext = function () {
    $scope.input = {
      ten: "",
      gioitinh: "nam",
      diachi: "",
      tuoi: "",
    };
    $scope.editId = 0;
    $scope.kiemtra = {
      ten: false,
      diachi: false,
      tuoi: false,
      tuoicheck: false,
      tuoiso: false,
    };
  };
  $scope.settext();
  $scope.add = function () {
    if (!$scope.input || !$scope.input.ten) {
      $scope.kiemtra.ten = true;
    } else if (!$scope.input || !$scope.input.diachi) {
      $scope.kiemtra.ten = false;
      $scope.kiemtra.diachi = true;
    } else if (!$scope.input || !$scope.input.tuoi) {
      $scope.kiemtra.diachi = false;
      $scope.kiemtra.tuoi = true;
    } else if (isNaN($scope.input.tuoi) == true) {
      $scope.kiemtra.tuoi = false;
      $scope.kiemtra.tuoicheck = true;
    } else if (Number($scope.input.tuoi) <= 0) {
      $scope.kiemtra.tuoicheck = false;
      $scope.kiemtra.tuoiso = true;
    } else {
      //them
      var newItem = {
        ten: $scope.input.ten,
        gioitinh: $scope.input.gioitinh,
        diachi: $scope.input.diachi,
        tuoi: $scope.input.tuoi,
      };
      console.log(newItem);
      $http.post(urltacgia, newItem).then(function (response) {
        $location.path("");
        $scope.getData();
      });
      swal("Thêm Thành Công", "", "success");
      $scope.settext();
    }
  };
  $scope.update = function () {
    var editId = $scope.editId;
    if (editId) {
      var updateItem = {
        ten: $scope.input.ten,
        gioitinh: $scope.input.gioitinh,
        diachi: $scope.input.diachi,
        tuoi: $scope.input.tuoi,
      };
      $http.put(`${urltacgia}/${editId}`, updateItem).then(function (response) {
        $location.path("");
        $scope.getData();
      });
      swal("Sửa Thành Công", "", "success");
      $scope.settext();
    } else {
      swal("Sửa Thất Bại", "Bạn chưa chọn", "warning");
    }
  };
  $scope.chon = function (editId) {
    $scope.editId = editId;
    $http.get(`${urltacgia}/${editId}`).then(function (response) {
      if (response.status == 200) {
        $scope.input = response.data;
      }
    });
  };
};
