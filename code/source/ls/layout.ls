angular.module 'Layout', ['ngMaterial', 'ui.router', 'myself', 'others', 'pictures', 'timeline', 'relationship', 'punchedCard', 'photo', 'newPost', 'timeCapsule']

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

.controller 'layoutController' ($state, $scope, $window, $rootScope, $mdDialog) !->
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

  $scope.send = (ev) !->
    confirm = $mdDialog.confirm()
      .parent(angular.element(document.querySelector('#all')))
      .clickOutsideToClose(false)
      .title('时间轴')
      .textContent('成功创建新的时间节点！')
      .ariaLabel('时间轴')
      .ok('知道了！')
      .targetEvent(ev)
    $mdDialog.show confirm .then !->
      $window.history.back()
