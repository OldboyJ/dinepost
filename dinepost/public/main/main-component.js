(function() {
  'use strict'

  angular.module('dinePostApp')
    .component('mainComponent', {

      controller: function (reviewService) {
        const vm = this
        vm.showform = false;


        vm.$onInit = function () {
          vm.reviews = reviewService.getReviews()
        }

        vm.updateData = function (newReview) {
          vm.reviews.push(newReview);
          vm.showform = false;
        }

        vm.addReview = function (review) {
          // console.log(review);
          reviewService.addReview(review);
          vm.reviews = reviewService.getReviews();
        }






      },
      templateUrl: 'main/main-template.html'



    })

}());
