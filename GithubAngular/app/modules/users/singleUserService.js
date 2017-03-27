(function () {

    var singleUser = function ($http) {
        var getUser = function (username) {
            return $http.get('https://api.github.com/users/' + username)
                .then(function (response) {
                    return response.data;
                })
        };

        return {
            getUser: getUser
        };
    }
    angular.module('GitHubViewer').factory("SingleUserService", ['$http', singleUser]);   
    
    }());


