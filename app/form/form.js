'use strict';
angular.
module('form').
component('formComp', {
  templateUrl: 'form/form.html',
  controller: ['$http', '$scope', 'Api', function mainCtrl($http, $scope, Api) {

    // create a blank object to handle form data.
    $scope.user = {};

    Api.getTitle(function(res){
      if (res.data){
        // hold both TopText and stringToReturn.
        $scope.title = res.data;
      }
      else {
        alert('Failed to load data');
      }
    });

    $scope.submitForm = function() {
      // check to make sure the form is completely valid
      if ($scope.userForm.$valid) {
        $scope.user.stringToReturn = $scope.title.stringToReturn;

        $http({
          method  : 'POST',
          url     : 'http://learning.ykm.co.il/api/general/learning',
          data    : $scope.user,  //forms user object
          headers : {'Content-Type': 'application/json'}
        })
        .then(function(res) {
          console.log(res);
        }, function(res){
          console.log(res);
        });
      }
    };

  }]
});
