window.khachhang = function ($scope, $http) {
  // $scope.dskh = [
  //   { id: 1, ten: "Đỗ Hữu Nguyện", namsinh: "2003", diachi: "tuyên quang" },
  // ];
  var apiURL = "http://localhost:3000/sinhVien";
  $scope.getData = function () {
    $http.get(apiURL).then(function (response) {
      //sau khi đón được dữ liệu về
      $scope.dskh = response.data;
    });
  };
  $scope.getData();
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
    $scope.editID = 0;
    $scope.kiemtradulieu.ten = false;
    $scope.kiemtradulieu.namsinh = false;
    $scope.kiemtradulieu.diachi = false;
    $scope.kiemtradulieu.namsinhss = false;
  };
  //hàm thêm
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
    } else if (parseInt($scope.inputValue.namsinh) <= 0) {
      $scope.kiemtradulieu.diachi = false;
      $scope.kiemtradulieu.namsinhss = true;
    } else {
      //sửa
      var editID = $scope.editID;
      //nêu như có edit id sẽ sửaa
      if (editID) {
        //sử lý sửa

        console.log(editID);
        for (var i = 0; i < $scope.dskh.length; i++) {
          if ($scope.dskh[i].id == editID) {
            $scope.dskh[i].ten = $scope.inputValue.ten;
            $scope.dskh[i].namsinh = $scope.inputValue.namsinh;
            $scope.dskh[i].diachi = $scope.inputValue.diachi;
          }
        }
        $scope.setText();
        return;
      }
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
  //hàm sửa
  $scope.onEdit = function (editID) {
    $scope.editID = editID;
    var editItem = {
      ten: "",
      namsinh: "",
      diachi: "",
    };
    for (var i = 0; i < $scope.dskh.length; i++) {
      if ($scope.dskh[i].id == editID) {
        editItem.ten = $scope.dskh[i].ten;
        editItem.namsinh = $scope.dskh[i].namsinh;
        editItem.diachi = $scope.dskh[i].diachi;
      }
    }
    //hiển thị lên input
    $scope.inputValue = {
      ten: editItem.ten,
      namsinh: Number(editItem.namsinh),
      diachi: editItem.diachi,
    };
  };
  $scope.onDelete = function (deleteID) {
    var confirm = window.confirm("Bạn có muốn xóa Khum ?");
    if (confirm) {
      $scope.dskh = $scope.dskh.filter(function (item) {
        return item.id !== deleteID;
      });
    }
    for (var i = 0; i < $scope.dskh.length; i++) {
      if ($scope.dskh[i].id == editID) {
        RemoveElementFromObjectArray(editID);
      }
    }
  };
};
