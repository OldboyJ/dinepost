(function() {
  'use strict'

  angular.module('dinePostApp')
    .service('reviewService', function ($http) {

      var counter = 3;
      this.reviews = [{
        id: 1,
        name: 'wendys',
        category: 'lunch',
        review: 'too many choices to choose from',
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
      // Delete a review
      this.deleteReview = function (review) {
        console.log('im in service');
        this.reviews.splice(review.id,1);
      }


      this.updateReview = function (review) {
         // find the index of the review that we need to change.
         var reviewIndex = 0;
         this.reviews.map(function(item,index){
           if(item.id == review.id){
             reviewIndex = index;
           }
         })
          this.reviews[reviewIndex] = review
         // update the review.
      }

  })

}());
