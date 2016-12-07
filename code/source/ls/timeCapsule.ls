angular.module 'timeCapsule', ['ngMaterial']

.controller 'timeCapsuleController' ($scope) !->
  # 更改顶栏显示
  $scope.$parent.changeHeader '今天已创建的时间节点'
  $scope.$parent.changeBack true
  $scope.$parent.changeRoute false
  $scope.$parent.changeSend false

  $scope.priorityLevels = ['H', 'M', 'L']

  $scope.nodes = []
  for i from 1 to 3
    $scope.nodes.push {
      imagePath: '../img/demo/' + i + '.jpg'
      priorityLevel: i - 1
    }

  $scope.changePriority = (index) !->
    $scope.nodes[index].priorityLevel++
