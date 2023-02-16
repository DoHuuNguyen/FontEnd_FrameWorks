window.lienheController = function ($scope) {
  $scope.title = "Liên Hệ";
  $scope.gui = function () {
    // swal("Gửi thành công", "Chúng tôi sẽ phản hồi sớm nhất", "success");
    if ($scope.name === undefined) {
      $scope.nameError = "*Bạn chưa nhập*";
    } else if ($scope.email === undefined) {
      $scope.emailError = "*Bạn chưa nhập*";
    } else if ($scope.tieude === undefined) {
      $scope.tieudeError = "*Bạn chưa nhập*";
    } else if ($scope.noidung === undefined) {
      $scope.noidungError = "*Bạn chưa nhập*";
    } else {
      swal("Gửi thành công", "Chúng tôi sẽ phản hồi sớm nhất", "success");
    }
  };
};
