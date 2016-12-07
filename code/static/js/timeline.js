(function(){
  angular.module('timeline', ['ngMaterial']).controller('timelineController', function($scope, $interval, $timeout){
    var i$, i, count, $, $$, this$ = this;
    $scope.tlitems = [];
    for (i$ = 0; i$ <= 10; ++i$) {
      i = i$;
      count = i % 8 + 1;
      $scope.tlitems.push({
        id: i,
        url: '../img/demo/' + count + '.jpg',
        year: 2016,
        month: 8,
        day: i + 1,
        discription: "冬天的阳光给了我所有的温暖"
      });
    }
    $ = function(ID){
      return document.getElementById(ID);
    };
    $$ = function(className){
      return document.getElementsByClassName(className);
    };
    angular.element($('rightImages')).ready(function(){
      $timeout(function(){
        var i$, ref$, len$, card, height;
        for (i$ = 0, len$ = (ref$ = $$('leftCards')).length; i$ < len$; ++i$) {
          card = ref$[i$];
          height = card.offsetHeight;
          console.log(height);
        }
      });
    });
  });
}).call(this);
