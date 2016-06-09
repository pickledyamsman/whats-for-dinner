var myApp = angular.module('whatsfordinner', ['ui.router','templates', 'Devise']);

myApp.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'home/_home.html',
      controller: 'MainCtrl',
      resolve: {
        eventPromise: ['events', function(events){
          return events.getAll();
        }]
      }
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
        event: ['$stateParams', 'events', function($stateParams, events) {
          return events.get($stateParams.id);
        }]
      }
    });

  $urlRouterProvider.otherwise('home');
}]);       