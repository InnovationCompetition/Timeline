(function(){
  angular.module('Layout', ['ngMaterial', 'ui.router']).config(function($mdThemingProvider, $stateProvider, $urlRouterProvider){
    $mdThemingProvider.theme('default').primaryPalette('blue').accentPalette('pink');
    $urlRouterProvider.otherwise('/myself');
    $stateProvider.state('myself', {
      url: '/myself',
      templateUrl: '../html/myself.html'
    }).state('others', {
      url: '/others',
      templateUrl: '../html/others.html'
    });
  }).controller('layoutController', function($state){
    var that;
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
  });
}).call(this);
