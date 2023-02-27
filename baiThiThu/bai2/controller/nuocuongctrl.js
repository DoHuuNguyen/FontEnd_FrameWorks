window.nuocuongctrl = function ($scope, $http, $location) {
  var apiUrl = "http://localhost:3000/nuocuong";
  $scope.getData = function () {
    $http.get(apiUrl).then(function (response) {
      $scope.dsnuoc = response.data;
    });
  };
  $scope.kiemtra = {
    ten: false,
    danhmuc: false,
    hang: false,
    gia: false,
    giacheck: false,
    giaso: false,
  };
  $scope.settext = function () {
    $scope.input = {
      ten: "",
      danhmuc: "",
      gia: "",
      hang: "",
    };
    $scope.kiemtra = {
      ten: false,
      danhmuc: false,
      hang: false,
      gia: false,
      giacheck: false,
      giaso: false,
    };
    $scope.editId = 0;
  };
  $scope.getData();
  $scope.settext();
  $scope.add = function () {
    if (!$scope.input || !$scope.input.ten) {
      $scope.kiemtra.ten = true;
    } else if (!$scope.input || !$scope.input.danhmuc) {
      $scope.kiemtra.ten = false;
      $scope.kiemtra.danhmuc = true;
    } else if (!$scope.input || !$scope.input.hang) {
      $scope.kiemtra.danhmuc = false;
      $scope.kiemtra.hang = true;
    } else if (!$scope.input || !$scope.input.gia) {
      $scope.kiemtra.hang = false;
      $scope.kiemtra.gia = true;
    } else if (isNaN($scope.input.gia)) {
      $scope.kiemtra.gia = false;
      $scope.kiemtra.giaso = true;
    } else if (Number($scope.input.gia) <= 0) {
      $scope.kiemtra.giaso = false;
      $scope.kiemtra.giacheck = true;
    } else {
      var newItem = {
        ten: $scope.input.ten,
        danhmuc: $scope.input.danhmuc,
        hang: $scope.input.hang,
        gia: $scope.input.gia,
      };
      $http.post(apiUrl, newItem).then(function (response) {
        $location.path("");
        $scope.getData();
      });
      swal("Thêm thàn công", "", "success");
      $scope.settext();
    }
  };
  $scope.update = function () {
    var editId = $scope.editId;
    if (editId) {
      var updateItem = {
        ten: $scope.input.ten,
        danhmuc: $scope.input.danhmuc,
        hang: $scope.input.hang,
        gia: $scope.input.gia,
      };
      $http.put(`${apiUrl}/${editId}`, updateItem).then(function (response) {
        $location.path("");
        $scope.getData();
      });
      swal("Sửa thành công", "", "success");
      $scope.settext();
    } else {
      swal("Sửa thất bại", "Bạn chưa chọn", "warning");
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
