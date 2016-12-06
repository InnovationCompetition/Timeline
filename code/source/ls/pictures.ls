angular.module 'pictures', ['ngMaterial']

.controller 'picturesController' ($state) !->
  # 暂时用代码生成图片的路径
  @pictures = []
  for i from 0 to 29
    count = i % 8 + 1
    @pictures.push {
      id: i
      url: '../img/demo/' + count + '.jpg'
      year: 2016
      month: 8
      day: 16
      discription: "冬天的阳光给了我所有的温暖"
    }
