(function(){
  angular.module('pictures', ['ngMaterial']).controller('picturesController', function($state){
    var i$, i, count;
    this.pictures = [];
    for (i$ = 0; i$ <= 29; ++i$) {
      i = i$;
      count = i % 8 + 1;
      this.pictures.push({
        id: i,
        url: '../img/demo/' + count + '.jpg',
        year: 2016,
        month: 8,
        day: 16,
        discription: "冬天的阳光给了我所有的温暖"
      });
    }
  });
}).call(this);
