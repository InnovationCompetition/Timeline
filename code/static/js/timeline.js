(function(){
  angular.module('timeline', ['ngMaterial']).controller('timelineController', function($scope, $interval){
    var i$, i, count, $, this$ = this;
    $scope.tlitems = [];
    for (i$ = 0; i$ <= 10; ++i$) {
      i = i$;
      count = i % 8 + 1;
      $scope.tlitems.push({
        id: i,
        url: '../img/demo/' + count + '.jpg',
        year: 2016,
        month: 8,
        day: i,
        discription: "冬天的阳光给了我所有的温暖"
      });
    }
    $ = function(ID){
      return document.getElementById(ID);
    };
    $scope.isDrawed = 0;
  });
}).call(this);
