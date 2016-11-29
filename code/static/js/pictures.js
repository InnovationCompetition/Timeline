(function(){
  angular.module('pictures', ['ngMaterial']).controller('picturesController', function($state){
    var i$, i, count;
    this.pictures = [];
    for (i$ = 0; i$ <= 29; ++i$) {
      i = i$;
      count = i % 8 + 1;
      this.pictures.push({
        id: i,
        url: '../img/demo/' + count + '.jpg'
      });
    }
  });
}).call(this);
