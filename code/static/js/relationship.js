(function(){
  angular.module('relationship', ['ngMaterial']).controller('relationshipController', function($scope){
    var text, i$, i;
    text = ["一", "二", "三", "四", "五", "六"];
    $scope.messages = [];
    for (i$ = 0; i$ <= 5; ++i$) {
      i = i$;
      $scope.messages.push({
        monthTime: text[i] + "月",
        dayTime: i + 1,
        share: Math.round(Math.random()),
        shareFace: ["../img/demo/1.jpg", "../img/demo/2.jpg"]
      });
    }
  });
}).call(this);
