function EventsCtrl($scope, eventsService, event){
  $scope.event = event;
  $scope.food_types = [{id: 'food_type1'}];
  
  $scope.addRestaurant = function(){
    if($scope.name === '') { return; }

    eventsService.addRestaurant(event.id, {
      name: $scope.name,
      food_type: this.food_types,
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
    if(!restaurant.hadIncremented){
      eventsService.upvoteRestaurant(event, restaurant);
    }
    
  };

  $scope.decrementVotes = function(restaurant){
    if(!restaurant.hadDecremented){
      eventsService.downvoteRestaurant(event, restaurant);
    }
  };

  $scope.addNewType = function(){
    var newTypeNo = $scope.food_types.length+1;
    $scope.food_types.push({'id':'food_type'+newTypeNo});
  };
}

angular
  .module('app')
  .controller('EventsCtrl', EventsCtrl)