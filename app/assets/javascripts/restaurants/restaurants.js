myApp.factory('restaurants', ['$http', function($http){
  var x = { restaurants: [] };

  x.getAll = function() {
    return $http.get('/restaurants.json').success(function(data){
      angular.copy(data, o.restaurants)
    });
  };

  x.create = function(restaurant) {
    return $http.restaurant('/restaurants.json', restaurant).success(function(data){
      o.restaurants.push(data);
    });
  };

  x.upvote = function(restaurant) {
    return $http.put('/restaurants/' + restaurant.id + '/upvote.json')
      .success(function(data){
        restaurant.upvotes += 1;
      });
  };

  x.get = function(id) {
    return $http.get('/restaurants/' + id + '.json').then(function(res){
      return res.data;
    });
  };

  return x; 
}]);