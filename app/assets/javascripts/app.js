var myApp = angular.module('whatsfordinner', ['ui.router','templates', 'Devise']);

myApp.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'home/_home.html',
      controller: 'MainCtrl',
    })
    .state('login', {
      url: '/login',
      templateUrl: 'auth/_login.html',
      controller: 'AuthCtrl',
      onEnter: ['$state', 'Auth', function($state, Auth) {
        Auth.currentUser().then(function (){
          $state.go('home');
        })
      }]
    })
    .state('register', {
      url: '/register',
      templateUrl: 'auth/_register.html',
      controller: 'AuthCtrl',
      onEnter: ['$state', 'Auth', function($state, Auth) {
        Auth.currentUser().then(function (){
          $state.go('home');
        })
      }]
    })
    .state('events', {
      url: '/events/{id}',
      templateUrl: 'events/_events.html',
      controller: 'EventsCtrl',
      resolve: {
        post: ['$stateParams', 'events', function($stateParams, posts) {
          return events.get($stateParams.id);
        }]
      }
    });

  $urlRouterProvider.otherwise('home');
}]);       