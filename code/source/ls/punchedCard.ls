angular.module 'punchedCard', ['ngMaterial', 'ngMessages']

.controller 'punchedCardController' ($scope, $interval) !->
    $scope.myDate = new Date()

    $scope.minDate = new Date(
      $scope.myDate.getFullYear()
      $scope.myDate.getMonth() - 2
      $scope.myDate.getDate())

    $scope.maxDate = new Date(
      $scope.myDate.getFullYear()
      $scope.myDate.getMonth() + 2
      $scope.myDate.getDate())

    $ = (className) ~>
      document.getElementsByClassName className

    random = []
    for i from 0 to 63
      random[i] = parseInt(5 * Math.random())

    $interval !->
      mask = $('md-calendar-scroll-mask')[0]
      container = $('md-virtual-repeat-container')[0]
      if mask != undefined && container != undefined
        mask.style.height = (window.screen.height - 370)  + 'px'
        container.style.height = (window.screen.height - 370)  + 'px'
        days = $ 'md-calendar-date-selection-indicator'
        for i from 0 to days.length
          if random[i % 64] == 0 && days[i] != undefined
            days[i].style.backgroundColor = '#FCE4EC'
            days[i].style.color = '#E91E63'
            days[i].style.fontWeight = 'bold'
    , 500
