angular.module 'myself' ['ngMaterial']

.controller 'myselfController' !->
  @userInfomation =
    avatarUrl: '../img/avatar.png'
    backgroundUrl: '../img/background.png'
    numberOfNodes: 97
    numberOfIntersections: 30
    numberOfFollowers: 41
