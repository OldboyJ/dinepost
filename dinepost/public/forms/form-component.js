(function() {
  'use strict'

  angular.module('dinePostApp')
    .component('formComponent', {


      controller: function (reviewService) {
        const vm = this;


        vm.addReview = function() {
          console.log(vm.newReview);
          reviewService.addReview(vm.newReview);
          vm.hide = false;
        }

        vm.closeform = function() {
          // e.eventDefault();
          vm.hide = false;
        }

      },
      templateUrl: 'forms/form-template.html',

      bindings: {
        addreview: '&',
        hide: '@'
      }

    })

}());
