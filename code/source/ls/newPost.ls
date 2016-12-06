angular.module 'newPost' ['ngMaterial']

.controller 'newPostController' ($scope) !->
  # 暂时用代码生成好友
  friendsData = []
  name = ['刘忍', '杨浩', '符宇晖', '舒倩', '徐佳豪', '钟正', '姚树航']
  for i from 1 to 7
    friendsData .push {
      name: name[i - 1]
      avatar: '../img/demo/' + i + '.jpg'
      isSelected: false
    }

  $scope.friends = []
  $scope.showFriendsList = !->
    if $scope.friends.length == 0
      $scope.friends = friendsData
    else
      $scope.friends = []

  # 更改顶栏显示
  $scope.$parent.changeHeader '创建新的时间节点'
  $scope.$parent.changeBack true
  $scope.$parent.changeRoute false
  $scope.$parent.changeSend true

  $scope.visitPhoto = !->
    
