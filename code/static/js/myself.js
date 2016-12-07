(function(){
  angular.module('myself', ['ngMaterial']).config(function($stateProvider){
    $stateProvider.state('photo', {
      url: '/photo/{id}',
      templateUrl: '../html/photo.html'
    }).state('newPost', {
      url: '/new-post',
      templateUrl: '../html/newPost.html'
    }).state('timeCapsule', {
      url: '/time-capsule',
      templateUrl: '../html/timeCapsule.html'
    });
  }).controller('myselfController', function($scope, $state){
    $scope.$parent.changeHeader('时间轴');
    $scope.$parent.changeBack(false);
    $scope.$parent.changeRoute(true);
    $scope.$parent.changeSend(false);
    this.userInfomation = {
      avatarUrl: '../img/avatar.png',
      backgroundUrl: '../img/background.png',
      numberOfNodes: 97,
      numberOfIntersections: 30,
      numberOfFollowers: 41
    };
    this.navigateToPhoto = function(id){
      $state.go('photo', {
        id: id
      });
    };
    this.newPost = function(){
      $state.go('newPost');
    };
    this.timeCapsule = function(){
      $state.go('timeCapsule');
    };
  });
}).call(this);
