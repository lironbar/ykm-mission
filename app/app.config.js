angular.
	module('form-App').
		config(['$locationProvider', '$routeProvider',
			function config($locationProvider, $routeProvider) {
				$locationProvider.hashPrefix('!');

				$routeProvider.
				when ('/form', {
					template: '<form-comp></form-comp>'
				}).
				otherwise({redirectTo: '/form'});
			}
		]);
