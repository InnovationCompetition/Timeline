(function(){
  angular.module('newPost', ['ngMaterial']).controller('newPostController', function($scope){
    var friendsData, name, i$, i;
    friendsData = [];
    name = ['刘忍', '杨浩', '符宇晖', '舒倩', '徐佳豪', '钟正', '姚树航'];
    for (i$ = 1; i$ <= 7; ++i$) {
      i = i$;
      friendsData.push({
        name: name[i - 1],
        avatar: '../img/demo/' + i + '.jpg',
        isSelected: false
      });
    }
    $scope.friends = [];
    $scope.showFriendsList = function(){
      if ($scope.friends.length === 0) {
        $scope.friends = friendsData;
      } else {
        $scope.friends = [];
      }
    };
    $scope.$parent.changeHeader('今天的时间节点');
    $scope.$parent.changeBack(true);
    $scope.$parent.changeRoute(false);
    $scope.$parent.changeSend(true);
    $scope.visitPhoto = function(){};
  });
}).call(this);
