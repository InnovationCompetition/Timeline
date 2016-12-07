angular.module 'timeline', ['ngMaterial']

.controller 'timelineController', ($scope, $interval, $timeout) !->
  $scope.tlitems = []
  for i from 0 to 10
    count = i % 8 + 1
    $scope.tlitems.push {
      id: i
      url: '../img/demo/' + count + '.jpg'
      year: 2016
      month: 8
      day: i + 1
      discription: "冬天的阳光给了我所有的温暖"
    }

  $ = (ID) ~>
    document.getElementById ID
  $$ = (className) ~>
    document.getElementsByClassName className

  angular.element($ 'rightImages') .ready !->
    $timeout !->
      for card in $$ 'leftCards'
        height = card.offsetHeight
        console.log height

  # $scope.isDrawed = 0
  # $interval !->
  #   if $('TlList') != undefined && $('TlList') != null && $('TlCanvas') != undefined && $('TlCanvas') != null
  #     if $('TlCanvas').height != $('TlList').offsetHeight
  #       $('TlCanvas').height = $('TlList').offsetHeight
  #       $('TlCanvas').width = $('TlList').offsetWidth
  #
  #   if $scope.isDrawed < 1 && document.getElementsByClassName('tlButton').length != 0
  #     $scope.isDrawed = 1
  #     buttons = document.getElementsByClassName('tlButton')
  #     ctx = $('TlCanvas').getContext("2d")
  #     ctx.beginPath()
  #     x = $('TlCanvas').getBoundingClientRect().right/2;
  #     y = buttons[0].offsetHeight;
  #     ctx.moveTo(x, y)
  #     ctx.lineTo(x, buttons[buttons.length - 1].getBoundingClientRect().top - $('TlCanvas').getBoundingClientRect().top)
  #     ctx.closePath()
  #     ctx.stroke()
  # , 500
