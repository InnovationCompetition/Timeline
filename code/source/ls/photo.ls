angular.module 'photo' ['ngMaterial']

.controller 'photoController' ($location, $scope) !->
  # 读取图片 ID
  pictureId = $location.url()
  pictureId = pictureId.substr 7 pictureId.length - 7

  # 更改顶栏显示
  getDateOfPicture = (id) ~>
    # TODO: 根据 ID 和用户从数据库中返回图片日期
    '2016年8月16日'

  $scope.$parent.changeHeader getDateOfPicture pictureId
  $scope.$parent.changeBack true
  $scope.$parent.changeRoute false