angular.module 'relationship', ['ngMaterial']

.controller 'relationshipController', ($scope, $interval) !->
  # 控制数据绑定
  $scope.hold = "first"
  $scope.counter = 0
  $scope.color = ['#FF5722', '#FF9800', '#8BC34A', '#F44336', '#9E9E9E', '#795548']
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
        id: month + "_" + date
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

  getElementLeft = (element) ->
    actualLeft = element.offsetLeft
    current = element.offsetParent
    loop
      actualLeft = actualLeft + current.offsetLeft
      current = current.offsetParent
      break if  current == null
    actualLeft

  getElementTop = (element) ->
    actualTop  = element.offsetTop
    current = element.offsetParent
    loop
      actualTop = actualTop + current.offsetTop
      current = current.offsetParent
      break if  current == null
    actualTop

  # 控制好友头像的展开
  $scope.showFriend = !->
    $('canvas').height = $('list').offsetHeight
    $('canvas').width = $('list').offsetWidth
    for message in $scope.messages
      message.isOpen = false

  # 显示关系轴
  $scope.getFriend = (e, message, image) !->
    e.stopImmediatePropagation();
    if $scope.hold != message
      $('canvas').height = $('list').offsetHeight
      $('canvas').width = $('list').offsetWidth
      ctx = $('canvas').getContext("2d")
      ctx.strokeStyle = '#009688'
      $scope.counter = 0
    else
      ctx = $('canvas').getContext("2d")
      ctx.strokeStyle = $scope.color[$scope.counter]
      $scope.counter++;
    $scope.hold = message
    message.isOpen = true
    x = getElementLeft(e.target)
    y = getElementTop(e.target)
    ctx.beginPath()
    ctx.lineCap="round"
    ctx.lineWidth=5
    ctx.lineJoin="round"
    a = 0
    change =  36
    # 搜索与该好友共享的节点
    for mess in document.getElementsByTagName("md-list-item")
      img = mess.getElementsByTagName("img")
      for search in img
        str1 = String(search.src)
        str1 = str1.substr(str1.length-8, 8)
        str2 = image.substr(image.length-8, 8)
        if str1 == str2
          if a== 0
            if search.alt == message
              ctx.moveTo(x+20,y-298)
            else
              point_x = getElementLeft(mess)
              point_y = getElementTop(mess)
              pre_x = point_x
              pre_y = point_y
              ctx.moveTo(point_x+38,point_y-272)
            a= 1
          else
            if search.alt == message
              ctx.lineTo(x+20,pre_y-272+change)
              ctx.lineTo(x+20,y-298)
            else
              point_x = getElementLeft(mess)
              point_y = getElementTop(mess)
              if pre_y+ 72 == point_y
                ctx.lineTo(point_x+38,point_y-272)
              else
                ctx.lineTo(x+20,pre_y-272+change)
                ctx.lineTo(x+20,point_y-272-change)
                ctx.lineTo(point_x+38,point_y-272)
              pre_x = point_x
              pre_y = point_y
    ctx.stroke()
