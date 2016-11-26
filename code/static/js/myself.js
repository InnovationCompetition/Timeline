(function(){
  angular.module('myself', ['ngMaterial']).controller('myselfController', function(){
    this.userInfomation = {
      avatarUrl: '../img/avatar.png',
      backgroundUrl: '../img/background.png'
    };
  });
}).call(this);
