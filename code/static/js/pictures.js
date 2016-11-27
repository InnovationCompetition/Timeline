(function(){
  angular.module('pictures', ['ngMaterial']).controller('picturesController', function(){
    var i$, i;
    this.pictures = [];
    for (i$ = 1; i$ <= 15; ++i$) {
      i = i$;
      this.pictures.push('../img/demo/' + i + '.jpg');
    }
  });
}).call(this);
