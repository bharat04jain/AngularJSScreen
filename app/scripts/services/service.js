angular.module('angularScreenApp')
.service("userDetails",function($q,$http,URL_CONSTANT){
	this.getUserDetails = function(){
		var deferred = $q.defer();
 			$http.get(URL_CONSTANT.USER_DETAILS_URL).success(function(data) {
 				deferred.resolve(data);
 			}).error(function(){
 				deferred.reject();
 		});
        return deferred.promise;
	},
	this.getStoresDetails = function(userName){
		var deferred = $q.defer();
 			$http.get(URL_CONSTANT.STORES_DETAILS_URL).success(function(data) {
 				var filterData = data.filter(function(storeData){
 					return storeData[userName];
 				})
 				deferred.resolve(filterData[0]);
 			}).error(function(){
 				deferred.reject();
 		});
        return deferred.promise;
	}
})

