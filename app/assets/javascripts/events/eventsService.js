function eventsService($http){
  var e = {
    events: []
  };

  e.getAll = function() { //gets all events
    return $http.get('/events.json').success(function(data){
      angular.copy(data, e.events) // copies the data that is returned to e.events
    });
  };

  e.create = function(event) { // creates event.
    return $http.post('/events.json', event).then(function(data){
      e.events.push(data);
    });
  };

  e.get = function(id) { // gets specified event by id.
    return $http.get('/events/' + id + '.json').then(function(event){
      return event.data;
    });
  };

  e.addRestaurant = function(id, restaurant) {
    return $http.post('/events/' + id + '/restaurants.json', restaurant);
  };

  e.upvoteRestaurant = function(event, restaurant) {
    return $http.put('/events/' + event.id + '/restaurants/'+ restaurant.id + '/upvote.json')
      .then(function(data){
        restaurant.votes += 1;
        restaurant.hadIncremented = true;
      });
  };

  e.downvoteRestaurant = function(event, restaurant) {
    return $http.put('/events/' + event.id + '/restaurants/'+ restaurant.id + '/downvote.json')
      .then(function(data){
        restaurant.votes -= 1;
        restaurant.hadDecremented = true;
      });
  };

  return e; 
}

angular
  .module('app')
  .service('eventsService', eventsService)