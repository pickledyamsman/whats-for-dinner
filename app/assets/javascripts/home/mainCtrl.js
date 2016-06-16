function MainCtrl($scope, eventsService){
  $scope.events = eventsService.events;

  $scope.addEvent = function(){
    if(!$scope.name || $scope.description == '') {return;}

    eventsService.create({
      name: $scope.name,
      description: $scope.description,
      end_time: $scope.end_time
    });

    $scope.name = '';
    $scope.description = '';
    $scope.end_time = '';
  };
}


angular
  .module('app')
  .controller('MainCtrl', MainCtrl)