angular.module 'myself' ['ngMaterial']

.config ($stateProvider) !->
  $stateProvider
    .state 'photo', { url: '/photo/{id}', templateUrl: '../html/photo.html' }
    .state 'newPost', {url: '/new-post', templateUrl: '../html/newPost.html'}

.controller 'myselfController' ($scope, $state) !->
  # 初始化 Layout 属性
  $scope.$parent.changeHeader '时间轴'
  $scope.$parent.changeBack false
  $scope.$parent.changeRoute true
  $scope.$parent.changeSend false

  @userInfomation =
    avatarUrl: '../img/avatar.png'
    backgroundUrl: '../img/background.png'
    numberOfNodes: 97
    numberOfIntersections: 30
    numberOfFollowers: 41

  @navigateToPhoto = (id) !->
    $state.go('photo', {id: id})

  @newPost = !->
    $state.go('newPost')
