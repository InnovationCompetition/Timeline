angular.module 'timeline', ['ngMaterial']

.controller 'timelineController', ($scope, $interval, $timeout) !->
  days = [10, 8, 7, 4, 1, 31, 30, 29, 27, 24, 23]
  $scope.tlitems = []
  for i from 0 to 10
    count = i % 8 + 1
    $scope.tlitems.push {
      id: i
      url: '../img/demo/' + count + '.jpg'
      year: 2016
      month: 8
      day: days[i]
      discription: "冬天的阳光给了我所有的温暖"
    }

  $ = (ID) ~>
    document.getElementById ID
  $$ = (className) ~>
    document.getElementsByClassName className

  angular.element($ 'rightImages') .ready !->
    $timeout !->
      timeNode = $$ 'timeNode'
      leftCards = $$ 'leftCards'
      rightCards = $$ 'rightCards'
      for i from 0 to leftCards.length - 1
        height = leftCards[i].offsetHeight
        offsetTop = leftCards[i].offsetTop
        distance = offsetTop + height / 2 - 26
        timeNode[2 * i].style.top = distance + 'px'
      for i from 0 to rightCards.length - 1
        height = rightCards[i].offsetHeight
        offsetTop = rightCards[i].offsetTop
        distance = offsetTop + height / 2 - 26
        timeNode[2 * i + 1].style.top = distance + 'px'
