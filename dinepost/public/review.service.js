(function() {
  'use strict'

  angular.module('dinePostApp')
    .service('reviewService', function ($http) {

      var counter = 3;
      this.reviews = [{
        id: 1,
        name: 'wendys',
        category: 'lunch',
        review: 'too many choices to chose from',
        grade: 'C'
      },
      {
        id: 2,
        name: 'burger kind',
        category: 'lunch',
        review: 'food was cold and order was incorrect',
        grade: 'D'
      }];

      this.getReviews = function(){
        return this.reviews;
        // return $http.get('/api/reviews');
      }

      this.getReviewById = function(id){

        var arr = this.reviews.filter(function(item){

          if(item.id == id){
            console.log(item.id);
            return item;
          }
        })
        return arr[0];
      }

      this.addReview = function (review) {
        console.log('im in service');
        review.id = counter;
        counter++;
        this.reviews.push(review)

        // return $http.post('/api/reviews', post)
      }

      this.deleteReview = function (review) {
        console.log('im in service');
        this.reviews.splice(review,1);

      }

      // this.getOneReview = function (reviewId) {
      //   console.log(postId);
      //   return $http.get('/api/reviews/'+ reviewId)
      // }

      // this.updateReview = function (postId, edits) {
      //   return $http.patch('/api/reviews/'+ postId, edits)
      // }

  })

}());
