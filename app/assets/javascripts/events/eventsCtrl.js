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

  $scope.incrementUpvotes = function(restaurant){
    events.upvoteRestaurant(event, restaurant);
  };
}]);