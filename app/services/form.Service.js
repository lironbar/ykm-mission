angular.module('form.Service')
.service('Api', ['$http', function($http) {
	var self = this;

	self.getTitle = function(cb){
		$http.get('http://learning.ykm.co.il/api/general/learning').then(
			function(res){
				cb(res);
			},
			function (res){
				cb(res);
			}
		);
	};
}]);
