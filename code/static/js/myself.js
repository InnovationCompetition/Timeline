(function(){
  angular.module('myself', ['ngMaterial']).controller('myselfController', function(){
    this.userInfomation = {
      avatarUrl: '../img/avatar.png',
      backgroundUrl: '../img/background.png',
      numberOfNodes: 97,
      numberOfIntersections: 30,
      numberOfFollowers: 41
    };
  });
}).call(this);
