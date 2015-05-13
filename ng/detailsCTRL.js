/**
 * Created by eli on 3/26/15.
 */
angular.module('salaryGuide')
.controller('detailCTRL', function($scope, $stateParams, searchSVC, adSVC, $controller){
        // Inherit from adCTRL
        $controller('adCTRL',{$scope: $scope});

        // Gets userid from URL and sends it to server to get all the info on that person
        searchSVC.details({id:$stateParams.id})
            .success(function(e){
                $scope.person = e;
            });
});