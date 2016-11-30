(function(){
  angular.module('newPost', ['ngMaterial']).controller('newPostController', function($scope){
    $scope.$parent.changeHeader('创建新的时间节点');
    $scope.$parent.changeBack(true);
    $scope.$parent.changeRoute(false);
  });
}).call(this);
