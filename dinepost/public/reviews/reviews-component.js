(function() {
  'use strict'

  angular.module('dinePostApp')
    .component('detailedReviewComponent', {


      controller: function (reviewService, $stateParams) {
        const vm = this

        vm.$onInit = function () {
          const reviewId = $stateParams.id;
          console.log(reviewId);
          vm.showEditForm = false;
          vm.review = reviewService.getReviewById(reviewId);
          vm.passedDownReview = {
            id: vm.review.id,
            name: vm.review.name,
            category: vm.review.category,
            review: vm.review.review,
            grade: vm.review.grade
          };
          console.log('in review component', vm.passedDownReview);
        }

        vm.deleteReview = function() {
          vm.review = reviewService.deleteReview($stateParams.id)
        }

        vm.editReview = function(review) {
          console.log('coming from child',review);
          // console.log('from the controller', vm.review);
          reviewService.updateReview(review);
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
