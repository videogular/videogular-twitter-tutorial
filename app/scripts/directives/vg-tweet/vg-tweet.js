angular.module("vgTwitterApp")
    .directive("vgTweet",
    function vgTweet() {
        return {
            scope: {
                vgDataProvider: "="
            },
            templateUrl: "scripts/directives/vg-tweet/vg-tweet.html"
        };
    }
);

