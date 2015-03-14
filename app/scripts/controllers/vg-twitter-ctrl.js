angular.module("vgTwitterApp").controller("TwitterCtrl",
    ["tweets", function TwitterCtrl(tweets) {
        this.config = {
            sources: [{src: "https://www.youtube.com/watch?v=I7ZUkd44-Co"}],
            tweets: tweets.data,
            plugins: {
                analytics: {
                    category: "Videogular",
                    label: "Twitter Widget",
                    events: {
                        ready: true,
                        play: true,
                        pause: true,
                        stop: true,
                        complete: true,
                        progress: 10
                    }
                }
            }
        };
    }]
);
