(function(){
  angular.module('relationship', ['ngMaterial']).controller('relationshipController', function($scope, $interval){
    var numberOfDays, i$, month, j$, to$, date, shareFaces, k$, i, $, this$ = this;
    $scope.monthText = ["一月", "二月", "三月"];
    numberOfDays = [31, 28, 31];
    $scope.messages = [];
    for (i$ = 0; i$ <= 2; ++i$) {
      month = i$;
      for (j$ = 1, to$ = numberOfDays[month]; j$ <= to$; ++j$) {
        date = j$;
        shareFaces = [];
        for (k$ = 1; k$ <= 5; ++k$) {
          i = k$;
          if (parseInt(4 * Math.random()) === 0) {
            shareFaces.push("../img/demo/" + i + ".jpg");
          }
        }
        $scope.messages.push({
          month: $scope.monthText[month],
          date: date,
          isShare: parseInt(5 * Math.random()) === 0,
          shareNum: shareFaces.length,
          shareFaces: shareFaces,
          isOpen: false
        });
      }
    }
    $ = function(ID){
      return document.getElementById(ID);
    };
    $interval(function(){
      if ($('list') !== undefined && $('list') !== null) {
        $('canvas').height = $('list').offsetHeight;
        $('canvas').width = $('list').offsetWidth;
      }
    }, 500);
    $scope.showFriend = function(){
      var i$, ref$, len$, message;
      for (i$ = 0, len$ = (ref$ = $scope.messages).length; i$ < len$; ++i$) {
        message = ref$[i$];
        message.isOpen = false;
      }
    };
  });
}).call(this);
