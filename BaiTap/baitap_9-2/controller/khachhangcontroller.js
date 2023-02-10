window.khachhang = function ($scope) {
  $scope.dskh = [
    { id: 1, ten: "Đỗ Hữu Nguyện", namsinh: "2003", diachi: "tuyên quang" },
  ];
  $scope.kiemtradulieu = {
    ten: false,
    namsinh: false,
    namsinhss: false,
    diachi: false,
  };
  $scope.setText = function () {
    $scope.inputValue = {
      ten: "",
      namsinh: "",
      diachi: "",
    };
    $scope.kiemtradulieu.ten = false;
    $scope.kiemtradulieu.namsinh = false;
    $scope.kiemtradulieu.diachi = false;
    $scope.kiemtradulieu.namsinhss = false;
  };
  $scope.add = function () {
    //để trống

    if (!$scope.inputValue || !$scope.inputValue.ten) {
      $scope.kiemtradulieu.ten = true;
    } else if (!$scope.inputValue || !$scope.inputValue.namsinh) {
      $scope.kiemtradulieu.ten = false;
      $scope.kiemtradulieu.namsinh = true;
    } else if (!$scope.inputValue || !$scope.inputValue.diachi) {
      $scope.kiemtradulieu.namsinh = false;
      $scope.kiemtradulieu.diachi = true;
    } else if ($scope.inputValue.namsinh <= 0) {
      $scope.kiemtradulieu.diachi = false;
      $scope.kiemtradulieu.namsinhss = true;
    } else {
      //thêm mới
      var ds = $scope.dskh;
      var newId = ds.length > 0 ? ds[ds.length - 1].id + 1 : 1;
      var newItem = {
        id: newId,
        ten: $scope.inputValue.ten,
        namsinh: $scope.inputValue.namsinh,
        diachi: $scope.inputValue.diachi,
      };
      swal("Thêm thành công", "", "success");
      $scope.dskh.push(newItem);
      $scope.setText();
    }
  };
  $scope.clear = function () {
    $scope.setText();
  };
};
