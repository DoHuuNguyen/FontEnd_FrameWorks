window.sachCtrl = function ($scope, $location, $http) {
  var apiUrl = "http://localhost:3000/sach";
  $scope.getData = function () {
    $http.get(apiUrl).then(function (response) {
      $scope.ds = response.data;
    });
  };
  $scope.kiemtra = {
    ten: false,
    loai: false,
    tacgia: false,
  };
  $scope.settext = function () {
    $scope.input = "";
    $scope.kiemtra = false;
  };
  $scope.getData();
  $scope.them = function () {
    if (!$scope.input || !$scope.input.ten) {
      $scope.kiemtra.ten = true;
    } else if (!$scope.input || !$scope.input.loai) {
      $scope.kiemtra.ten = false;
      $scope.kiemtra.loai = true;
    } else if (!$scope.input || !$scope.input.tacgia) {
      $scope.kiemtra.loai = false;
      $scope.kiemtra.tacgia = true;
    } else {
      var newItem = {
        ten: $scope.input.ten,
        loai: $scope.input.loai,
        tacgia: $scope.input.tacgia,
      };
      $http.post(apiUrl, newItem).then(function (response) {
        $location.path("");
        $scope.getData();
      });
      swal("them thanh cong", "", "success");
      $scope.settext();
    }
  };
  $scope.sua = function () {
    var editId = $scope.editId;
    if (editId) {
      if (!$scope.input || !$scope.input.ten) {
        $scope.kiemtra.ten = true;
      } else if (!$scope.input || !$scope.input.loai) {
        $scope.kiemtra.ten = false;
        $scope.kiemtra.loai = true;
      } else if (!$scope.input || !$scope.input.tacgia) {
        $scope.kiemtra.loai = false;
        $scope.kiemtra.tacgia = true;
      } else {
        var updateItem = {
          ten: $scope.input.ten,
          loai: $scope.input.loai,
          tacgia: $scope.input.tacgia,
        };
        $http.put(`${apiUrl}/${editId}`, updateItem).then(function (response) {
          $location.path("");
          $scope.getData();
        });
        swal("Sua Thanh Cong", "", "success");
        $scope.settext();
      }
    } else {
      swal("Sua That Bai", "Ban chua chon", "warning");
    }
  };
  $scope.xoa = function (deleteID) {
    $scope.deleteID = deleteID;
    var cf = window.confirm("ban muon xoa that a");
    if (confirm) {
      $http.delete(`${apiUrl}/${deleteID}`).then(function (response) {
        $location.path("");
        $scope.getData();
      });
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
