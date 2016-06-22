function EventsCtrl($scope, eventsService, event){
  $scope.event = event;

  $scope.addRestaurant = function(){
    
    if($scope.name === '') { return; }

    eventsService.addRestaurant(event.id, {
      name: $scope.name,
      food_types: $scope.food_type,
      avg_price: $scope.avg_price,
      location: $scope.location,
    }).success(function(restaurant){
      $scope.event.restaurants.push(restaurant);
    });

    $scope.name = '';
    $scope.food_type = '';
    $scope.avg_price = '';
    $scope.location = '';
  };
  
  // can only upvote and downvote once. You can do both but it will cancel out
  // your vote.

  $scope.incrementVotes = function(restaurant){
    eventsService.upvoteRestaurant(event, restaurant);
  };

  $scope.decrementVotes = function(restaurant){
    eventsService.downvoteRestaurant(event, restaurant);
  };

}

angular
  .module('app')
  .controller('EventsCtrl', EventsCtrl)