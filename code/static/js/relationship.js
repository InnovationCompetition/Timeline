(function(){
  angular.module('relationship', ['ngMaterial']).controller('relationshipController', function($scope, $interval){
    var numberOfDays, i$, month, j$, to$, date, shareFaces, k$, i, $, getElementLeft, getElementTop, this$ = this;
    $scope.monthText = ["一月", "二月", "三月"];
    numberOfDays = [10, 10, 10];
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
    getElementLeft = function(element){
      var actualLeft, current;
      actualLeft = element.offsetLeft;
      current = element.offsetParent;
      for (;;) {
        actualLeft = actualLeft + current.offsetLeft;
        console.log(current);
        current = current.offsetParent;
        if (current !== null) {
          break;
        }
      }
      return actualLeft;
    };
    getElementTop = function(element){
      var actualTop, current;
      actualTop = element.offsetTop;
      current = element.offsetParent;
      for (;;) {
        actualTop = actualTop + current.offsetTop;
        current = current.offsetParent;
        if (current !== null) {
          break;
        }
      }
      return actualTop;
    };
    $scope.showFriend = function(){
      var i$, ref$, len$, message;
      for (i$ = 0, len$ = (ref$ = $scope.messages).length; i$ < len$; ++i$) {
        message = ref$[i$];
        message.isOpen = false;
      }
    };
    $scope.getFriend = function(e, message, image){
      var x, y, ctx, i$, ref$, len$, mess, img, j$, len1$, search, str1, str2, point_x, point_y;
      message.isOpen = true;
      x = e.target.getBoundingClientRect().left + document.documentElement.scrollLeft;
      y = e.target.getBoundingClientRect().top + document.documentElement.scrollTop;
      console.log(x, y);
      ctx = $('canvas').getContext("2d");
      ctx.beginPath();
      ctx.lineWidth = 5;
      ctx.lineJoin = "round";
      ctx.moveTo(x, y);
      for (i$ = 0, len$ = (ref$ = document.getElementsByTagName("md-list-item")).length; i$ < len$; ++i$) {
        mess = ref$[i$];
        img = mess.getElementsByTagName("img");
        for (j$ = 0, len1$ = img.length; j$ < len1$; ++j$) {
          search = img[j$];
          str1 = String(search.src);
          str1 = str1.substr(str1.length - 5, 5);
          str2 = image.substr(image.length - 5, 5);
          if (str1 === str2) {
            point_x = mess.getBoundingClientRect().left + document.documentElement.scrollLeft;
            point_y = mess.getBoundingClientRect().top + document.documentElement.scrollTop;
            ctx.lineTo(point_x, point_y);
            console.log(point_x, point_y);
          }
        }
      }
      ctx.stroke();
    };
  });
}).call(this);
