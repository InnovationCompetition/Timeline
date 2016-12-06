(function(){
  angular.module('photo', ['ngMaterial', 'pictures']).controller('photoController', function($location, $scope){
    var pictureId, getDateOfPicture, this$ = this;
    pictureId = $location.url();
    pictureId = pictureId.substr(7, pictureId.length - 7);
    getDateOfPicture = function(id){
      return '2016年8月16日';
    };
    $scope.$parent.changeHeader(getDateOfPicture(pictureId));
    $scope.$parent.changeBack(true);
    $scope.$parent.changeRoute(false);
    $scope.imagePath = '../img/demo/' + (pictureId % 8 + 1) + '.jpg';
    $scope.getFavorite = '../svg/favoriteBorder.svg';
    $scope.changeFavorite = function(){
      if ($scope.getFavorite === '../svg/favorite.svg') {
        $scope.getFavorite = '../svg/favoriteBorder.svg';
      } else {
        $scope.getFavorite = '../svg/favorite.svg';
      }
    };
  });
}).call(this);
