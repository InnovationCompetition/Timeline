angular.module 'pictures', ['ngMaterial']

.controller 'picturesController' !->
  # 暂时用代码生成图片的路径
  @pictures = []
  for i from 0 to 32
    id = i % 8 + 1
    @pictures.push {
      count: i
      url: '../img/demo/' + id + '.jpg'
    }
