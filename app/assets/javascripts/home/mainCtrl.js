myApp.controller('MainCtrl', ['$scope', 'events', function($scope, events) {
    $scope.events = events.events;


  $scope.incrementUpvotes = function(post) {
    posts.upvote(post);
  };

  $scope.addEvent = function(){
    if(!$scope.name || $scope.description == '') {return;}

    events.create({
      name: $scope.name,
      description: $scope.description
    });

    $scope.name = '';
    $scope.description = '';
  };


}]);