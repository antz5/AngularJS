(function () {
    var app = angular.module('GitHubViewer', ['ngRoute']);
    app.config(function ($routeProvider) {
        $routeProvider
            .when("/users", {
                templateUrl: "/app/modules/users/users.html",
                controller: 'usersController'
            })
            .when("/users/:username", {
                templateUrl: "/app/modules/users/singleUser.html",
                controller: 'SingleUserController'
            })
            .otherwise({redirectTo:"/users"})        
    });
}());