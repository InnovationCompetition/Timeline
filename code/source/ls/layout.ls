angular.module 'Layout', ['ngMaterial', 'ui.router', 'myself', 'others', 'pictures', 'timeline', 'relationship', 'punchedCard']

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

.controller 'layoutController' ($state) !->
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
