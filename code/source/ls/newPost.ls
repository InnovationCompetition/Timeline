angular.module 'newPost' ['ngMaterial']

.controller 'newPostController' ($scope) !->
  # 更改顶栏显示
  $scope.$parent.changeHeader '创建新的时间节点'
  $scope.$parent.changeBack true
  $scope.$parent.changeRoute false
