(function(){
  angular.module('relationship', ['ngMaterial']).controller('relationshipController', function($scope){
    var i$, i, id;
    $scope.messages = [];
    for (i$ = 0; i$ <= 8; ++i$) {
      i = i$;
      id = i % 8 + 1;
      $scope.messages.push({
        face: '../img/demo/' + id + '.jpg',
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      });
    }
  });
}).call(this);
