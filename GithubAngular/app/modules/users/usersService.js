(function () { 

    var github = function ($http) {
        var getUsers = function () {
            return $http.get('https://api.github.com/users')
            .then(function (response) {
                return response.data;
            })
        };

        return {
            getUsers: getUsers
        };
    }
   
     angular.module('GitHubViewer').factory("gitHubService", ['$http', github]);
    
    
}());
    

