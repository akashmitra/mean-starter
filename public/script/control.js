// create our angular app
// =============================================================================
var app = angular.module('NodePOCApp', []);


// Controller
// =============================================================================
app.controller('nodeCtrl', ['$scope', '$http', function($scope, $http) {

    
    // Function for Submit values for the Survey
    $scope.addUser = function() {

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
            .success(function(response) {
                console.log('status :: '+ response.status);
                alert('Succcess');
            });
    };

}]);
