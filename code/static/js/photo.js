(function(){
  angular.module('photo', ['ngMaterial']).controller('photoController', function($location, $scope){
    var pictureId, getDateOfPicture, this$ = this;
    pictureId = $location.url();
    pictureId = pictureId.substr(7, pictureId.length - 7);
    getDateOfPicture = function(id){
      return '2016年8月16日';
    };
    $scope.$parent.changeHeader(getDateOfPicture(pictureId));
    $scope.$parent.changeBack(true);
    $scope.$parent.changeRoute(false);
  });
}).call(this);
