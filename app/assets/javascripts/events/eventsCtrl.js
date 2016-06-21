function EventsCtrl($scope, eventsService, event){
  $scope.event = event;
  $scope.food_types = [{id: 'food_type1'}];
  
// i suspect that you will need to first convert this.food_types 
//into a simple hash with the right structure


// it gives you the objects, but rails can't pull out the right info


// so something like:
//   var fixed_food_types = {};
//   this.food_types.each do |f|
//     fixed_food_types[f.id] = f.type_name;
//   end
  
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
    eventsService.upvoteRestaurant(event, restaurant);
  };

  $scope.decrementVotes = function(restaurant){
    eventsService.downvoteRestaurant(event, restaurant);
  };

  $scope.addNewType = function(){
    var newTypeNo = $scope.food_types.length+1;
    $scope.food_types.push({'id':'food_type'+newTypeNo});
  };
}

angular
  .module('app')
  .controller('EventsCtrl', EventsCtrl)