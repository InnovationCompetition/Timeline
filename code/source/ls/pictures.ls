angular.module 'pictures', ['ngMaterial']

.controller 'picturesController' !->
  # 暂时用代码生成图片的路径
  @pictures = []
  for i from 1 to 15
    @pictures.push '../img/demo/' + i + '.jpg'
