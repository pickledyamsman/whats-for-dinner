myApp.controller('MainCtrl', ['$scope', 'events', function($scope, events) {
    $scope.events = events.events;

  $scope.addEvent = function(){
    if(!$scope.name || $scope.description == '') {return;}

    events.create({
      name: $scope.name,
      description: $scope.description,
      end_time: $scope.end_time
    });

    $scope.name = '';
    $scope.description = '';
    $scope.end_time = '';
  };
}]);