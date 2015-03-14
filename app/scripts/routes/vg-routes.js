angular.module("vgTwitterApp").config(
    ["$routeProvider", function config($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/twitter-view.html',
                controller: 'TwitterCtrl',
                controllerAs: "ctrl",
                resolve: {
                    "tweets": ["$http",
                        function getTweets($http) {
                            return $http.get('data/tweets.json');
                        }
                    ]
                }
            });
    }]
);
