(function () {    
    

    angular.module('GitHubViewer').controller('usersController', ['$scope', 'gitHubService', function usersController($scope, gitHubService) {
        $scope.message = "Github Users";
        var users = function () {
            gitHubService.getUsers().then(onUsersComplete, onError);
        };

    var onUsersComplete = function (data) {
        $scope.users = data;
    };

    var onError = function (error) {
        $scope.error = "There was an error, " + error;
    };

    users();
    }]); 
       
}());

