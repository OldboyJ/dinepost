(function() {
    'use strict';

    angular
        .module('dinePostApp')
        .component('postComponent', postComponent());

    /* @ngInject */
    function postComponent() {
        var postComponent = {
            templateUrl: 'posts-template.html',
            controller: Controller,
        };

        return postComponent;
    }

    Controller.$inject = ['ui.router'];

    /* @ngInject */
    function Controller(postService) {
      const vm = this;

      
    }
})();
