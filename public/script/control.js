(function () {
    'use strict';
    angular.module('NodePOCApp', [])
        .controller('NodeController', NodeController);

    function NodeController($scope, $http) {

        // Function for Submit values for the Survey
        $scope.addUser = function () {

            var inputvalues = {
                "username": $scope.username,
                "password": $scope.password,
                "firstname": $scope.firstname,
                "lastname": $scope.lastname
            };


            //Service POST for Survey Submission
            var req = {
                method: 'POST',
                url: '/adduser',
                data: inputvalues
            };

            $scope.postpromise = $http(req)
                .success(function (response) {
                    console.log('status :: ' + response.status);
                    alert('Succcess');
                });
        };


    }

}());
