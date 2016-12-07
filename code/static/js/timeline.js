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
        var timeNode, leftCards, rightCards, i$, to$, i, height, offsetTop, distance;
        timeNode = $$('timeNode');
        leftCards = $$('leftCards');
        rightCards = $$('rightCards');
        for (i$ = 0, to$ = leftCards.length - 1; i$ <= to$; ++i$) {
          i = i$;
          height = leftCards[i].offsetHeight;
          offsetTop = leftCards[i].offsetTop;
          distance = offsetTop + height / 2 - 26;
          timeNode[2 * i].style.top = distance + 'px';
        }
        for (i$ = 0, to$ = rightCards.length - 1; i$ <= to$; ++i$) {
          i = i$;
          height = rightCards[i].offsetHeight;
          offsetTop = rightCards[i].offsetTop;
          distance = offsetTop + height / 2 - 26;
          timeNode[2 * i + 1].style.top = distance + 'px';
        }
      });
    });
  });
}).call(this);
