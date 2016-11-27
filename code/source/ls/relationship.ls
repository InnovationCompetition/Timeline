angular.module 'relationship', ['ngMaterial']

.controller 'relationshipController', ($scope) !->
  text = ["一", "二", "三", "四", "五", "六"]

  $scope.messages = []
  for i from 0 to 5
    $scope.messages.push {
      monthTime: text[i] + "月"
      dayTime: i+1
      share: Math.round Math.random()
      shareFace: ["../img/demo/1.jpg", "../img/demo/2.jpg"]
    }
