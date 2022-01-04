app.controller("infoCtrl", function($scope, $location, character) {
    console.log(character.data.data.results[0].comics);
    $scope.img = character.data.data.results[0].thumbnail;
    $scope.comics = character.data.data.results[0].comics.items;
    $scope.name = character.data.data.results[0].name;
    $scope.historyBack = function() {
        $location.path("/");
    };
});