app.controller(
    "homePCtrl",
    function($scope, $location, charactersAll, doutor) {
        $scope.characters = charactersAll.data.data.results;
        console.log(charactersAll.data.data.results);
        $scope.info = function(id) {
            $location.path("/info/" + id);
        };
        $scope.getName = function(name) {
            doutor.getName(name).then(function(resolve) {
                $scope.characters = resolve.data.data.results;
            });
        };
    }
);