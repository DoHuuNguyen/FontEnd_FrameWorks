window.tintucController = function ($scope) {
  //   $scope.hihi = "Đây là tin tức";
  $scope.danhsachtintuc = [
    { id: 1, tieude: "ABC", mota: "bcd" },
    { id: 2, tieude: "son dau buoi", mota: "ngu" },
    // { id: 3, tieude: $scope.inputValue.tieude, mota: $scope.inputValue.mota },
  ];
  $scope.kiemtradl = {
    tieude: false,
    mota: false,
  };
  $scope.setText = function () {
    $scope.inputValue = {
      tieude: "",
      mota: "",
    };
  };
  $scope.onSubmit = function () {
    //bỏ trống
    if (!$scope.inputValue || !$scope.inputValue.tieude) {
      $scope.kiemtradl.tieude = true;
    }
    if (!$scope.inputValue || !$scope.inputValue.mota) {
      $scope.kiemtradl.mota = true;
    }
    //theem moi
    var ds = $scope.danhsachtintuc;
    var newID = ds.length > 0 ? ds[ds.length - 1].id + 1 : 1;
    var newItem = {
      id: newID,
      tieude: $scope.inputValue.tieude,
      mota: $scope.inputValue.mota,
    };
    $scope.danhsachtintuc.push(newItem);
    $scope.setText();
  };
};
