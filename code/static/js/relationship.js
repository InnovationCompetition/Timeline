(function(){
  angular.module('relationship', ['ngMaterial']).controller('relationshipController', function($scope){
<<<<<<< HEAD
    var numberOfDays, i$, month, j$, to$, date, shareFaces, k$, i;
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
    $scope.showFriend = function(){
      var i$, ref$, len$, message;
      for (i$ = 0, len$ = (ref$ = $scope.messages).length; i$ < len$; ++i$) {
        message = ref$[i$];
        message.isOpen = false;
      }
=======
    var text, i$, i;
    text = ["一", "二", "三", "四", "五", "六"];
    $scope.hide = true;
    $scope.messages = [];
    for (i$ = 0; i$ <= 5; ++i$) {
      i = i$;
      $scope.messages.push({
        monthTime: text[i] + "月",
        dayTime: i + 1,
        share: Math.round(Math.random()),
        sharenum: 3,
        shareFace: ["../img/demo/1.jpg", "../img/demo/2.jpg", "../img/demo/3.jpg"]
      });
    }
    $scope.showFriend = function(){
      $scope.hide = !$scope.hide;
      console.log($scope.hide);
>>>>>>> origin/master
    };
  });
}).call(this);
