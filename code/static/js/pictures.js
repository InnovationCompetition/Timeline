(function(){
  angular.module('pictures', ['ngMaterial']).controller('picturesController', function(){
    var i$, i, id;
    this.pictures = [];
    for (i$ = 0; i$ <= 32; ++i$) {
      i = i$;
      id = i % 8 + 1;
      this.pictures.push({
        count: i,
        url: '../img/demo/' + id + '.jpg'
      });
    }
  });
}).call(this);
