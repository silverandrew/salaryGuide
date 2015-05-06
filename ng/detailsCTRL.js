/**
 * Created by eli on 3/26/15.
 */
angular.module('salaryGuide')
.controller('detailCTRL', function($scope, $stateParams, searchSVC, adSVC){
        searchSVC.details({id:$stateParams.id})
            .success(function(e){
                $scope.person = e;
            });
        $scope.device = adSVC.getDevice();
        $(window).resize(function(){
            $scope.$apply(function(){
                $scope.device = adSVC.getDevice();
            });
        });
});