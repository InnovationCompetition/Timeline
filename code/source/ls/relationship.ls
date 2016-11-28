angular.module 'relationship', ['ngMaterial']

.controller 'relationshipController', ($scope) !->
  text = ["一", "二", "三", "四", "五", "六"]
  $scope.myVar = true;
  $scope.messages = []
  for i from 0 to 5
    $scope.messages.push {
      monthTime: text[i] + "月"
      dayTime: i+1
      share: Math.round Math.random()
      sharenum: 2
      shareFace: ["../img/demo/1.jpg", "../img/demo/2.jpg", "../img/demo/3.jpg"]
    }

  $scope.showFriend = !->
    $scope.myVar = !$scope.myVar;
