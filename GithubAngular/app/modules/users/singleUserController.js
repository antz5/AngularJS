(function () { 

//Controller to get Single User Details
    angular.module('GitHubViewer').controller('SingleUserController', ['$scope', 'SingleUserService', '$routeParams',
        function SingleUserController($scope, SingleUserService, $routeParams) {

       
            var Gituser = function () {
                $scope.username = $routeParams.username;
                SingleUserService.getUser($scope.username).then(OnUserComplete, onError);
            };

    var OnUserComplete = function (data) {
        $scope.user = data;
    };

    var onError = function (error) {
        $scope.error = "There was an error, " + error;
    };
    Gituser();
}]);
}());