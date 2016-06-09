myApp.controller('EventsCtrl', ['$scope', 'events', 'event', function($scope, events, event){
  $scope.event = event;
  
  $scope.addRestaurant = function(){
    if($scope.name === '') { return; }

    events.addRestaurant(event.id, {
      name: $scope.name,
    }).success(function(restaurant){
      $scope.event.restaurants.push(restaurant);
    });

    $scope.name = '';
  };

  $scope.incrementVotes = function(restaurant){
    events.upvoteRestaurant(event, restaurant);
  };

  $scope.decrementVotes = function(restaurant){
    events.downvoteRestaurant(event, restaurant);
  };
}]);