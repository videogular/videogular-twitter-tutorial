angular.module("vgTwitterApp").controller("vgTwitterWidgetController",
    ["$scope", function vgTwitterWidgetController($scope) {
        this.API = null;

        this.onPlayerReady = function onPlayerReady(API) {
            this.API = API;
        };

        this.init = function init() {
            // Three minute offset, probably the talk started at 9:55 instead of exactly at 10:00
            var offset = 300;
            var tweets = [];

            for (var i=0, l=$scope.vgConfig.tweets.length; i<l; i++) {
                var tweet = {};
                var date = new Date($scope.vgConfig.tweets[i].created_at);
                var minutes = date.getUTCMinutes();
                var seconds = date.getUTCSeconds();
                var start = minutes * 60 + seconds - offset;
                var end = start + 15;

                tweet.timeLapse = {
                    start: start,
                    end: end
                };

                tweet.onLeave = this.onLeave.bind(this);
                tweet.onUpdate = this.onUpdate.bind(this);
                tweet.onComplete = this.onComplete.bind(this);

                tweet.params = $scope.vgConfig.tweets[i];
                tweet.params.index = i;

                tweets.push(tweet);
            }

            this.config = {
                sources: $scope.vgConfig.sources,
                cuePoints: {
                    tweets: tweets
                },
                plugins: $scope.vgConfig.plugins
            };
        };

        this.onLeave = function onLeave(currentTime, timeLapse, params) {
            params.completed = false;
            params.selected = false;
        };

        this.onComplete = function onComplete(currentTime, timeLapse, params) {
            params.completed = true;
            params.selected = false;
        };

        this.onUpdate = function onUpdate(currentTime, timeLapse, params) {
            if (!params.selected) {
                this.tweetElements[params.index].scrollIntoView();
                params.completed = false;
                params.selected = true;
            }
        };

        this.init();
    }]
);
