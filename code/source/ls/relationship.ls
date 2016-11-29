angular.module 'relationship', ['ngMaterial']

.controller 'relationshipController', ($scope) !->
  # 控制数据绑定
  $scope.monthText = ["一月", "二月", "三月"]
  numberOfDays = [31, 28, 31]
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

  # 控制好友头像的展开
  $scope.showFriend = !->
    for message in $scope.messages
      message.isOpen = false
