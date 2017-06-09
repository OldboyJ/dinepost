(function() {
  'use strict';

  angular.module('dinePostApp').config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

  function config($stateProvider, $urlRouterProvider, $locationProvider){
    $urlRouterProvider.otherwise('/');
    // this line is optional
    $locationProvider.html5Mode(true)

    $stateProvider
      .state({
        name: 'home',
        url: '/',
        component: 'mainComponent',
      })
      .state({
        name: 'details',
        url: '/reviews/:id/detail',
        component: 'detailedReviewComponent'
      })
  }

}());
