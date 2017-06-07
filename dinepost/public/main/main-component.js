(function() {
  'use strict'

  angular.module('dinePostApp')
    .component('mainComponent', {

      controller: function (postService) {
        const vm = this


        vm.$onInit = function () {
          postService.getPosts().then(function(response){
            console.log(response.data);
            vm.posts = response.data;
          });
        }

        vm.updateData = function (newpost) {
          vm.posts.push(newpost);
          vm.showform = false;
        }






      },
      templateUrl: 'main/app.template.html'

    })

}());
