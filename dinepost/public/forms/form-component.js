(function() {
  'use strict'

  angular.module('dinePostApp')
    .component('formComponent', {


      controller: function (reviewService) {
        const vm = this;

        //
        // vm.$onInit = function() {
        //   vm.hide = true
        // }
        //
        // vm.hide = function() {
        //   if (vm.hide) {
        //     vm.hide = false
        //   } else {
        //     vm.hide = true
        //   }
        // }

        vm.addReview = function() {
          console.log(vm.newReview);
          reviewService.addReview(vm.newReview);
          vm.hide = false;

        }

        vm.closeform = function() {
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
