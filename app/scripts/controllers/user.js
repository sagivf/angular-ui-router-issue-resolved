'use strict';

angular.module('angularUiRouterIssueApp').controller('UserCtrl', function ($scope, $timeout, userHandler, $state, $stateParams) {
  var user = userHandler.getBasicUserInfo($stateParams.userId);
  $scope.name = user.name;
  $scope.image = user.image;
  $scope.loading = true;

  $timeout(function(){
    //location false for url params
    $state.go('.details', $stateParams, { location: false }).then(function(){
      $scope.loading = false;
    }, function(e){
      $scope.loading = false;
      $scope.error = e.message;
    });
  }, 0);
});
