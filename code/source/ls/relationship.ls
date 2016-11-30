angular.module 'relationship', ['ngMaterial']

.controller 'relationshipController', ($scope, $interval) !->
  # 控制数据绑定
  $scope.monthText = ["一月", "二月", "三月"]
  numberOfDays = [10, 10, 10]
  $scope.messages = []
  for month from 0 to 2
    for date from 1 to numberOfDays[month]
      shareFaces = []
      for i from 1 to 5
        if parseInt(4 * Math.random()) == 0
          shareFaces.push("../img/demo/" + i + ".jpg")
      $scope.messages.push {
        month: $scope.monthText[month]
        date: date
        isShare: parseInt(5 * Math.random()) == 0
        shareNum: shareFaces.length
        shareFaces: shareFaces
        isOpen: false
      }

  # 设定canvas的高度
  $ = (ID) ~>
    document.getElementById ID

  $interval !->
    if $('list') != undefined && $('list') != null
      $('canvas').height = $('list').offsetHeight
      $('canvas').width = $('list').offsetWidth
  , 500

  # getElementLeft = (element) ->
  #   actualLeft = element.offsetLeft
  #   current = element.offsetParent
  #   loop
  #     actualLeft = actualLeft + current.offsetLeft
  #     console.log current
  #     current = current.offsetParent
  #     break if  current != null
  #   actualLeft
  #
  # getElementTop = (element) ->
  #   actualTop  = element.offsetTop
  #   current = element.offsetParent
  #   loop
  #     actualTop = actualTop + current.offsetTop
  #     current = current.offsetParent
  #     break if  current != null
  #   actualTop

  # 控制好友头像的展开
  $scope.showFriend = !->
    for message in $scope.messages
      message.isOpen = false

  $scope.getFriend = (e, message, image) !->
    message.isOpen = true
    x = e.target.getBoundingClientRect().left+document.documentElement.scrollLeft
    y =  e.target.getBoundingClientRect().top+document.documentElement.scrollTop
    console.log x, y
    ctx = $('canvas').getContext("2d")
    ctx.beginPath()
    ctx.lineWidth=5
    ctx.lineJoin="round"
    ctx.moveTo(x,y)
    for mess in document.getElementsByTagName("md-list-item")
      img = mess.getElementsByTagName("img")
      for search in img
        str1 = String(search.src)
        str1 = str1.substr(str1.length-5, 5)
        str2 = image.substr(image.length-5, 5)
        if str1 == str2
          point_x = mess.getBoundingClientRect().left+document.documentElement.scrollLeft
          point_y = mess.getBoundingClientRect().top+document.documentElement.scrollTop
          ctx.lineTo(point_x,point_y)
          console.log point_x, point_y
    ctx.stroke()
