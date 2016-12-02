angular.module 'Layout', ['ngMaterial', 'ui.router', 'myself', 'others', 'pictures', 'timeline', 'relationship', 'punchedCard', 'photo', 'newPost']

.config ($mdThemingProvider, $stateProvider, $urlRouterProvider) !->
  # 定义主题
  $mdThemingProvider.theme 'default'
  .primaryPalette 'blue'
  .accentPalette 'pink'

  # 设置路由
  $urlRouterProvider.otherwise('/myself');
  $stateProvider
    .state 'myself', {url: '/myself', templateUrl: '../html/myself.html'}
    .state 'others', {url: '/others', templateUrl: '../html/others.html'}

.controller 'layoutController' ($state, $scope, $window, $rootScope) !->
  $scope.header = '时间轴'
  $scope.changeHeader = (newHeader) !->
    $scope.header = newHeader
  $scope.enableBack = false
  $scope.changeBack = (value) !->
    $scope.enableBack = value
  $scope.enableRoute = true
  $scope.changeRoute = (value) !->
    $scope.enableRoute = value
  $scope.enableSend = false
  $scope.changeSend = (value) !->
    $scope.enableSend = value

  @svgs =
    myself: '../svg/solidPerson.svg'
    others: '../svg/people.svg'

  that = @

  @navigateTo = (pageName) !->
    if pageName == 'myself'
      @svgs.myself = '../svg/solidPerson.svg'
      @svgs.others = '../svg/people.svg'
    else
      @svgs.myself = '../svg/person.svg'
      @svgs.others = '../svg/solidPeople.svg'
    $state.go pageName

  @goBack = !->
    $window.history.back()
