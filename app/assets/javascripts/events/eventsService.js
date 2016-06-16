function eventsService($http){
  var e = {
    events: []
  };

  e.getAll = function() {
    return $http.get('/events.json').success(function(data){
      angular.copy(data, e.events)
    });
  };

  e.create = function(event) {
    return $http.post('/events.json', event).success(function(data){
      e.events.push(data);
    });
  };

  e.get = function(id) {
    return $http.get('/events/' + id + '.json').then(function(res){
      return res.data;
    });
  };

  e.addRestaurant = function(id, restaurant) {
    return $http.post('/events/' + id + '/restaurants.json', restaurant);
  };

  e.upvoteRestaurant = function(event, restaurant) {
    return $http.put('/events/' + event.id + '/restaurants/'+ restaurant.id + '/upvote.json')
      .success(function(data){
        restaurant.votes += 1;
        restaurant.hadIncremented = true;
      });
  };

  e.downvoteRestaurant = function(event, restaurant) {
    return $http.put('/events/' + event.id + '/restaurants/'+ restaurant.id + '/downvote.json')
      .success(function(data){
        restaurant.votes -= 1;
        restaurant.hadDecremented = true;
      });
  };

  return e; 
}

angular
  .module('app')
  .service('eventsService', eventsService)