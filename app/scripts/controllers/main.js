'use strict';

/**
 * @ngdoc function
 * @name angularScreenApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularScreenApp
 */
angular.module('angularScreenApp')
  .controller('MainCtrl', function ($scope,userDetails) {
  		// Set login User Name
    	$scope.LoginUser = "Store Manager/WH/SR";
    	// Get User Details
    	userDetails.getUserDetails().then(
    		function(data) {
     			$scope.completeList = data;
     		}
     		,function(err){
     			console.log(err)
     		});
   		 //Get store Details
    	$scope.getStoreDetails = function(userName){
    		userDetails.getStoresDetails(userName).then(
    			function(data) {
     			$scope.storeData = data[userName];
     		},
     		function(err){
     			console.log(err)
     		});
    	}
  });
