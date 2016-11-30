(function(){
  angular.module('Layout', ['ngMaterial', 'ui.router', 'myself', 'others', 'pictures', 'timeline', 'relationship', 'punchedCard', 'photo']).config(function($mdThemingProvider, $stateProvider, $urlRouterProvider){
    $mdThemingProvider.theme('default').primaryPalette('blue').accentPalette('pink');
    $urlRouterProvider.otherwise('/myself');
    $stateProvider.state('myself', {
      url: '/myself',
      templateUrl: '../html/myself.html'
    }).state('others', {
      url: '/others',
      templateUrl: '../html/others.html'
    });
  }).controller('layoutController', function($state, $scope, $window, $rootScope){
    var that;
    $scope.header = '时间轴';
    $scope.changeHeader = function(newHeader){
      $scope.header = newHeader;
    };
    $scope.enableBack = false;
    $scope.changeBack = function(value){
      $scope.enableBack = value;
    };
    $scope.enableRoute = true;
    $scope.changeRoute = function(value){
      $scope.enableRoute = value;
    };
    this.svgs = {
      myself: '../svg/solidPerson.svg',
      others: '../svg/people.svg'
    };
    that = this;
    this.navigateTo = function(pageName){
      if (pageName === 'myself') {
        this.svgs.myself = '../svg/solidPerson.svg';
        this.svgs.others = '../svg/people.svg';
      } else {
        this.svgs.myself = '../svg/person.svg';
        this.svgs.others = '../svg/solidPeople.svg';
      }
      $state.go(pageName);
    };
    this.goBack = function(){
      $window.history.back();
    };
  });
}).call(this);
