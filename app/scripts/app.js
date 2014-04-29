'use strict';


angular.module('angularUiRouterIssueApp', [
  'ui.router'
])
  .config(function ($stateProvider, $urlRouterProvider) {
    //delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('index', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('users', {
        url: '/users',
        templateUrl: 'views/users.html',
        controller: 'UsersCtrl'
      })
      .state('users.user', {
        url: '/:userId',
        templateUrl: 'views/user.html',
        controller: 'UserCtrl'
      })
      .state('users.user.details', {
        templateUrl: 'views/userDetails.html',
        controller: 'UserDetailsCtrl',
        resolve: {
          userInfo: ['userHandler', '$stateParams', function (userHandler, $stateParams) {
            return userHandler.getAdvancedUserInfo($stateParams.userId);
          }]
        }
      })
  })
  .run(function ($rootScope) {
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
      $rootScope.stateName = toState.name;
      $rootScope.stateParams = toParams;
    });
  });




