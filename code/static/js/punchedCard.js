(function(){
  var this$ = this;
  angular.module('punchedCard', ['ngMaterial', 'ngMessages']).controller('punchedCardController', function($scope){
    var this$ = this;
    $scope.myDate = new Date();
    $scope.minDate = new Date($scope.myDate.getFullYear(), $scope.myDate.getMonth() - 4, $scope.myDate.getDate());
    $scope.maxDate = new Date();
    $scope.theDate = function(date){
      return date.toUTCString() === new Date(2016, 10, 11).toUTCString() || date.toUTCString() === new Date(2016, 10, 15).toUTCString() || date.toUTCString() === new Date(2016, 10, 27).toUTCString();
    };
  }).directive('adjustUi', function(){
    return {
      link: function(scope, element, attrs){
        element.ready(function(){
          var date, i$, to$, i;
          document.getElementsByClassName('md-calendar-scroll-mask')[0].style.height = (window.screen.height - 370) + 'px';
          date = new Array();
          date[0] = "2016-10-11";
          date[1] = "2016-10-15";
          for (i$ = 0, to$ = date.length - 1; i$ <= to$; ++i$) {
            i = i$;
            document.getElementById('md-0-month-' + date[i]).childNodes[0].style.background = 'rgb(33,150,243)';
          }
        });
      }
    };
  });
}).call(this);
