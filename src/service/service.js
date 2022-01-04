app.factory("doutor", function($http) {
    let getCharacters = function() {
        return $http.get(
            // keyApi.url +
            // "ts=" +
            // keyApi.ts +
            // "&apiKey=" +
            // keyApi.keyPublic +
            // "&hash=" +
            // keyApi.keyPrivate
            "https://gateway.marvel.com:443/v1/public/characters?ts=1640814676774&apikey=9de9e3ed3e077ed85e20ad50e3e21d2d&hash=64b2185466d6dfd048f6726f3299cc32&limit=100"
        );
    };
    let getCharacter = function(id) {
        return $http.get(
            `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1640814676774&apikey=9de9e3ed3e077ed85e20ad50e3e21d2d&hash=64b2185466d6dfd048f6726f3299cc32`
        );
    };

    let getName = function(name) {
        return $http.get(
            `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${name}&ts=1640814676774&apikey=9de9e3ed3e077ed85e20ad50e3e21d2d&hash=64b2185466d6dfd048f6726f3299cc32`
        );
    };

    return { getCharacters, getCharacter, getName };
});