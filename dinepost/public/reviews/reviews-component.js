(function() {
  'use strict'

  angular.module('dinePostApp')
    .component('detailedReviewComponent', {


      controller: function (reviewService, $stateParams) {
        const vm = this

        vm.$onInit = function () {
          const reviewId = $stateParams.id;
          console.log(reviewId);
          vm.review = reviewService.getReviewById(reviewId);
          console.log(vm.review);
        }

        vm.deleteReview = function() {
          vm.review = reviewService.deleteReview($stateParams.id)
        }

      // function updateReview() {
      //   console.log('update');
      //   const reviewId = $stateParams.id;
      //   reviewService.updateReview(reviewId,vm.editReview).then(function (response){$state.go('home');
      //   })
      // }

      },
      templateUrl: 'reviews/reviews-template.html'

    })

}());
