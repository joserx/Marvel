app.config(function($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "home.html",
        controller: "homePCtrl",
        resolve: {
            charactersAll: function(doutor) {
                return doutor.getCharacters();
            },
        },
    });

    $routeProvider.when("/info/:id", {
        templateUrl: "info.html",
        controller: "infoCtrl",
        resolve: {
            character: function(doutor, $route) {
                return doutor.getCharacter($route.current.params.id);
            },
        },
    });
});