/**
 * Created by eli on 3/23/15.
 */
angular.module('salaryGuide')
.controller('searchCTRL',function($scope, searchSVC, $location, $state, adSVC){
    function capitalize(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    $scope.results = [];

    // This is for saving searches when navigating back from the details page
    if (searchSVC.cache){
        $scope.results = searchSVC.cache;
        $scope.display = true;
    } else {
        $scope.results = null;
        $scope.display = null;
    }


    $scope.searchByName = function (name) {

        // Capitalize first letter in each word entered in name field
        var names = name.split(' ');
        for(var i = 0; i < names.length; i++){
            names[i] = capitalize(names[i])
        }
        name = names.join(' ');

        // Capitalize letters following single quotes ex: O'Neil
        names = name.split("'");
        for(var i = 0; i < names.length; i++){
            names[i] = capitalize(names[i])
        }
        name = names.join("'");

        // Server detects which type of search is being done by looking at the name of the key in the object sent here
        searchSVC.search({name:name})
            .success(function(result){
                $scope.results = result;
                searchSVC.setCache(result);
        });
        $scope.name = null;
        $scope.display = name;
    };

    $scope.searchByDept = function (dept) {

        // Server detects which type of search is being done by looking at the name of the key in the object sent here
        searchSVC.search({dept:dept})
            .success(function(result){
                $scope.results = result;
                searchSVC.setCache(result);
            });
        $scope.dept = null;
        $scope.display = dept;
    };

    $scope.searchByCampus = function (campus) {

        // Server detects which type of search is being done by looking at the name of the key in the object sent here
        searchSVC.search({campus:campus})
            .success(function(result){
                $scope.results = result;
                searchSVC.setCache(result);
            });
        $scope.campus = null;
        $scope.display = campus;
    };

    // If user click on one of the people in the table it sends the id to the server and grabs all of that person's info then redirects to details page
    $scope.details = function(id){
        $state.go('details',{id: id})
    };

    // This is used to place the ads on the page
    $scope.device = adSVC.getDevice();
    $(window).resize(function(){
        $scope.$apply(function(){
            $scope.device = adSVC.getDevice();
        });
    });

    // This loads the department search drop down
    $scope.preload = searchSVC.preload();
});