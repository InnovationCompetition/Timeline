(function(){
  angular.module('relationship', ['ngMaterial']).controller('relationshipController', function($scope, $interval){
    var numberOfDays, i$, month, j$, to$, date, shareFaces, k$, i, $, getElementLeft, getElementTop, this$ = this;
    $scope.hold = "first";
    $scope.counter = 0;
    $scope.color = ['#FF5722', '#FF9800', '#8BC34A', '#F44336', '#9E9E9E', '#795548'];
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
          id: month + "_" + date,
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
    getElementLeft = function(element){
      var actualLeft, current;
      actualLeft = element.offsetLeft;
      current = element.offsetParent;
      for (;;) {
        actualLeft = actualLeft + current.offsetLeft;
        current = current.offsetParent;
        if (current === null) {
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
        if (current === null) {
          break;
        }
      }
      return actualTop;
    };
    $scope.showFriend = function(){
      var i$, ref$, len$, message;
      $('canvas').height = $('list').offsetHeight;
      $('canvas').width = $('list').offsetWidth;
      for (i$ = 0, len$ = (ref$ = $scope.messages).length; i$ < len$; ++i$) {
        message = ref$[i$];
        message.isOpen = false;
      }
    };
    $scope.getFriend = function(e, message, image){
      var ctx, x, y, a, change, i$, ref$, len$, mess, img, j$, len1$, search, str1, str2, point_x, point_y, pre_x, pre_y;
      e.stopImmediatePropagation();
      if ($scope.hold !== message) {
        $('canvas').height = $('list').offsetHeight;
        $('canvas').width = $('list').offsetWidth;
        ctx = $('canvas').getContext("2d");
        ctx.strokeStyle = '#009688';
        $scope.counter = 0;
      } else {
        ctx = $('canvas').getContext("2d");
        ctx.strokeStyle = $scope.color[$scope.counter];
        $scope.counter++;
      }
      $scope.hold = message;
      message.isOpen = true;
      x = getElementLeft(e.target);
      y = getElementTop(e.target);
      ctx.beginPath();
      ctx.lineCap = "round";
      ctx.lineWidth = 5;
      ctx.lineJoin = "round";
      a = 0;
      change = 36;
      for (i$ = 0, len$ = (ref$ = document.getElementsByTagName("md-list-item")).length; i$ < len$; ++i$) {
        mess = ref$[i$];
        img = mess.getElementsByTagName("img");
        for (j$ = 0, len1$ = img.length; j$ < len1$; ++j$) {
          search = img[j$];
          str1 = String(search.src);
          str1 = str1.substr(str1.length - 8, 8);
          str2 = image.substr(image.length - 8, 8);
          if (str1 === str2) {
            if (a === 0) {
              if (search.alt === message) {
                ctx.moveTo(x + 20, y - 298);
              } else {
                point_x = getElementLeft(mess);
                point_y = getElementTop(mess);
                pre_x = point_x;
                pre_y = point_y;
                ctx.moveTo(point_x + 38, point_y - 272);
              }
              a = 1;
            } else {
              if (search.alt === message) {
                ctx.lineTo(x + 20, pre_y - 272 + change);
                ctx.lineTo(x + 20, y - 298);
              } else {
                point_x = getElementLeft(mess);
                point_y = getElementTop(mess);
                if (pre_y + 72 === point_y) {
                  ctx.lineTo(point_x + 38, point_y - 272);
                } else {
                  ctx.lineTo(x + 20, pre_y - 272 + change);
                  ctx.lineTo(x + 20, point_y - 272 - change);
                  ctx.lineTo(point_x + 38, point_y - 272);
                }
                pre_x = point_x;
                pre_y = point_y;
              }
            }
          }
        }
      }
      ctx.stroke();
    };
  });
}).call(this);
