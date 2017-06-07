(function() {
  'use strict'

  angular.module('dinePostApp')
    .service('postService', function ($http) {

    this.getPosts = function(){
      return $http.get('/api/restaurants');
    }

    this.addPost = function (post) {
      return $http.post('/api/restaurants', post)
    }

    this.getOnePost = function (postId) {
      console.log(postId);
      return $http.get('/api/restaurants/'+ postId)
    }

    this.updatePost = function (postId, edits) {
      return $http.patch('/api/restaurants/'+ postId, edits)
    }

    this.increase = function (id) {
      return $http.post('/api/restaurants/'+id+'/votes')
    }

    this.decrease = function (id) {
      return $http.delete('/api/restaurants/'+id+'/votes')
    }

  })

}());
