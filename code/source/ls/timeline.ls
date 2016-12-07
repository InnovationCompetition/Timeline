angular.module 'timeline', ['ngMaterial']

.controller 'timelineController', ($scope, $interval) !->
  $scope.tlitems = []
  for itemDate from 1 to 6
    $scope.tlitems.push {
      date : itemDate
      imgSrc : "../img/demo/" + itemDate + ".jpg"
    }

  $ = (ID) ~>
    document.getElementById ID

  $scope.isDrawed = 0

  $interval !->
    if $('TlList') != undefined && $('TlList') != null && $('TlCanvas') != undefined && $('TlCanvas') != null
      if $('TlCanvas').height != $('TlList').offsetHeight
        $('TlCanvas').height = $('TlList').offsetHeight
        $('TlCanvas').width = $('TlList').offsetWidth

    if $scope.isDrawed < 1 && document.getElementsByClassName('tlButton').length != 0
      $scope.isDrawed = 1
      buttons = document.getElementsByClassName('tlButton')
      ctx = $('TlCanvas').getContext("2d")
      ctx.beginPath()
      x = $('TlCanvas').getBoundingClientRect().right/2;
      y = buttons[0].offsetHeight;
      ctx.moveTo(x, y)
      ctx.lineTo(x, buttons[buttons.length - 1].getBoundingClientRect().top - $('TlCanvas').getBoundingClientRect().top)
      ctx.closePath()
      ctx.stroke()
  , 500
