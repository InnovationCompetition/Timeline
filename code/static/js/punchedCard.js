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
          document.getElementsByClassName('md-calendar-scroll-mask')[0].style.height = (document.body.clientHeight - 480) + 'px';
        });
      }
    };
  });
}).call(this);
