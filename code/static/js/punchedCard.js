(function(){
  angular.module('punchedCard', ['ngMaterial', 'ngMessages']).controller('punchedCardController', function($scope, $interval){
    var $, random, i$, i, this$ = this;
    $scope.myDate = new Date();
    $scope.minDate = new Date($scope.myDate.getFullYear(), $scope.myDate.getMonth() - 2, $scope.myDate.getDate());
    $scope.maxDate = new Date($scope.myDate.getFullYear(), $scope.myDate.getMonth() + 2, $scope.myDate.getDate());
    $ = function(className){
      return document.getElementsByClassName(className);
    };
    random = [];
    for (i$ = 0; i$ <= 63; ++i$) {
      i = i$;
      random[i] = parseInt(5 * Math.random());
    }
    $interval(function(){
      var mask, container, days, i$, to$, i;
      mask = $('md-calendar-scroll-mask')[0];
      container = $('md-virtual-repeat-container')[0];
      if (mask && container) {
        mask.style.height = (window.screen.height - 370) + 'px';
        container.style.height = (window.screen.height - 370) + 'px';
        days = $('md-calendar-date-selection-indicator');
        for (i$ = 0, to$ = days.length; i$ <= to$; ++i$) {
          i = i$;
          if (random[i % 64] === 0) {
            days[i].style.backgroundColor = '#FCE4EC';
            days[i].style.color = '#E91E63';
            days[i].style.fontWeight = 'bold';
          }
        }
      }
    }, 500);
  });
}).call(this);
