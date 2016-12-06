(function(){
  angular.module('photo', ['ngMaterial']).controller('photoController', function($location, $scope){
    var pictureId, getDateOfPicture, this$ = this;
    pictureId = $location.url();
    pictureId = pictureId.substr(7, pictureId.length - 7);
    getDateOfPicture = function(id){
      return '2016年8月16日';
    };
    $scope.$parent.changeHeader('照片详情');
    $scope.$parent.changeBack(true);
    $scope.$parent.changeRoute(false);
    $scope.imagePath = '../img/demo/' + (pictureId % 8 + 1) + '.jpg';
    $scope.getFavorite = '../svg/favoriteBorder.svg';
    $scope.date = '2016年8月16日';
    $scope.descriptions = ["冬天的阳光给了我所有的温暖", "所有温暖抱着我讲了所有的故事", "每一个故事里都有一个美好的梦"];
    $scope.username = 'Ferret';
    $scope.changeFavorite = function(){
      if ($scope.getFavorite === '../svg/favorite.svg') {
        $scope.getFavorite = '../svg/favoriteBorder.svg';
      } else {
        $scope.getFavorite = '../svg/favorite.svg';
      }
    };
  });
}).call(this);
