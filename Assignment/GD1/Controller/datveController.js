window.datveController = function ($scope) {
  $scope.title = "Đặt vé";
  $scope.Dat = function () {
    if ($scope.name === undefined) {
      $scope.nameE = "*Bạn chưa nhập*";
    } else if ($scope.email === undefined) {
      $scope.emailE = "*Bạn chưa nhập*";
    } else if ($scope.cccd === undefined) {
      $scope.cccdE = "*Bạn chưa nhập*";
    } else if ($scope.sdt === undefined) {
      $scope.sdtE = "*Bạn chưa nhập*";
    } else if ($scope.ngaysinh === undefined) {
      $scope.ngaysinhE = "*Bạn chưa nhập*";
    } else if ($scope.hanhly === undefined) {
      $scope.hanhlyE = "*Bạn chưa nhập*";
    } else {
      swal(
        "Đăng ký thành công",
        "Chúng tôi sẽ gửi lại thông báo cho bạn",
        "success"
      );
    }
  };
  $scope.reset = function () {
    location.reload();
  };
};
