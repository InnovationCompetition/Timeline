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
        document.getElementsByClassName('md-calendar-scroll-mask')[0].style.height = (window.screen.height - 370)  + 'px'
        date = new Array!
        date[0] = "2016-10-11"
        date[1] = "2016-10-15"
        for i from 0 to date.length - 1
           document.getElementById('md-0-month-'+date[i]).childNodes[0].style.background = 'rgb(33,150,243)'
  }
