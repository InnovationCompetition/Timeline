angular.module 'relationship', ['ngMaterial']

.controller 'relationshipController', ($scope) !->
    $scope.messages = []
    for i from 0 to 8
      id = i % 8 + 1
      $scope.messages.push {
        face : '../img/demo/' + id + '.jpg',
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      }
