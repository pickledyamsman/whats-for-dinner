function EventsCtrl($scope, eventsService, event){

  $scope.event = sanitizeEvents(event);
  $scope.food_types = [];

  

  $scope.addFoodType = function(type_name){
    var newFoodType = {
                    type_name: type_name, 
                    id: null // ID on new objects is null until the DB defines it
                  };
    $scope.food_types.push(newFoodType);
  };
  

  $scope.addRestaurant = function(){
    
    if($scope.name === '') { return; }

    eventsService.addRestaurant(event.id, {
      name: $scope.name,
      food_type: this.food_types,
      avg_price: $scope.avg_price,
      location: $scope.location,
    }).success(function(restaurant){
      $scope.event.restaurants.push(sanitizeRestaurant(restaurant));
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

  function init() {
    $scope.addFoodType(""); // Create a new blank food type
  }

  function sanitizeEvents(event) {
     event['restaurants'] = event['restaurants'].map(function (res) {
         return sanitizeRestaurant(res);
     });
     return event;
  }

  function sanitizeRestaurant(res) {
     res['food_type'] = JSON.parse(res['food_type'].replace(/=>/gi, ":")); // Replace => with  : so it will deserialize
     res['food_type'] = res['food_type'].map(function (ft) {
         ft['id'] = ft.id | 0; // Binary cast to int
        return ft;
     });
     return res;
  }

  init(); //move to a better place
}

angular
  .module('app')
  .controller('EventsCtrl', EventsCtrl);