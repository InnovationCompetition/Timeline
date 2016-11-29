angular.module 'myself' ['ngMaterial']

.config ($stateProvider) !->
  $stateProvider
    .state 'photo', { url: '/photo/{id}', templateUrl: '../html/photo.html' }

.controller 'myselfController' ($state) !->
  @userInfomation =
    avatarUrl: '../img/avatar.png'
    backgroundUrl: '../img/background.png'
    numberOfNodes: 97
    numberOfIntersections: 30
    numberOfFollowers: 41

  @navigateToPhoto = (id) !->
    $state.go('photo', {id: id})
