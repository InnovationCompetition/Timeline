angular.module 'punchedCard', ['ngMaterial', 'ngMessages']

.controller 'punchedCardController' ($scope) !->
    $scope.myDate = new Date()

    $scope.minDate = new Date(
      $scope.myDate.getFullYear()
      $scope.myDate.getMonth() - 4
      $scope.myDate.getDate())

    $scope.maxDate = new Date()

    $scope.theDate = (date) ~>
      date.toUTCString! is new Date(2016,10,11).toUTCString! ||  date.toUTCString! is new Date(2016,10,15).toUTCString! ||  date.toUTCString! is new Date(2016,10,27).toUTCString!

.directive 'adjustUi' ~>
  {
    link: (scope, element, attrs) !->
      element.ready !->
        document.getElementsByClassName('md-calendar-scroll-mask')[0].style.height = (document.body.clientHeight - 480)  + 'px'
  }
