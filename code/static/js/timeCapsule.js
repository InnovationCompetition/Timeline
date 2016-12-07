(function(){
  angular.module('timeCapsule', ['ngMaterial']).controller('timeCapsuleController', function($scope){
    var i$, i;
    $scope.$parent.changeHeader('今天已创建的时间节点');
    $scope.$parent.changeBack(true);
    $scope.$parent.changeRoute(false);
    $scope.$parent.changeSend(false);
    $scope.priorityLevels = ['H', 'M', 'L'];
    $scope.nodes = [];
    for (i$ = 1; i$ <= 3; ++i$) {
      i = i$;
      $scope.nodes.push({
        imagePath: '../img/demo/' + i + '.jpg',
        priorityLevel: i - 1
      });
    }
    $scope.changePriority = function(index){
      $scope.nodes[index].priorityLevel++;
    };
  });
}).call(this);
