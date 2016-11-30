(function(){
  angular.module('punchedCard', ['ngMaterial', 'ngMessages']).controller('punchedCardController', function($scope){
    var this$ = this;
    $scope.myDate = new Date();
    $scope.minDate = new Date($scope.myDate.getFullYear(), $scope.myDate.getMonth() - 4, $scope.myDate.getDate());
    $scope.maxDate = new Date();
    $scope.theDate = function(date){
      return date.toUTCString() === new Date(2016, 10, 11).toUTCString() || date.toUTCString() === new Date(2016, 10, 15).toUTCString() || date.toUTCString() === new Date(2016, 10, 27).toUTCString();
    };
  });
}).call(this);
