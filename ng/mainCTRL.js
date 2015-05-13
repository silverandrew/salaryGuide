/**
 * Created by eli on 3/26/15.
 */
angular.module('salaryGuide')
.controller('mainCTRL',function($scope, adSVC, $controller){

        // Inherit from adCTRL
        $controller('adCTRL',{$scope: $scope});

        // This is for the story carousel on the main page
        $(document).ready(function(){
            $("#carousel").slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                adaptiveHeight: true,
                variableWidth: true,
                centerMode: true
            });
        });
    });