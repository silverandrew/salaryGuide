/**
 * Created by eli on 5/13/15.
 */
angular.module("salaryGuide")
.controller("adCTRL",function($scope, adSVC){
    // This checks to see what size ads to display
    $scope.device = adSVC.getDevice();
    $(window).resize(function(){
        $scope.$apply(function(){
            $scope.device = adSVC.getDevice();
        });
    });
})