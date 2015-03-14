angular.module("vgTwitterApp")
    .directive("vgTwitterWidget",
        function vgTwitterWidget() {
            return {
                scope: {
                    vgConfig: "="
                },
                templateUrl: "scripts/directives/vg-twitter-widget/vg-twitter-widget.html",
                controller: "vgTwitterWidgetController",
                controllerAs: "ctrl",
                link: function link(scope, elem, attrs, ctrl) {
                    ctrl.tweetElements = elem[0].getElementsByTagName("vg-tweet");
                }
            };
        }
    );

