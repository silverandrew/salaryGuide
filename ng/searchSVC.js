/**
 * Created by eli on 3/23/15.
 */
angular.module('salaryGuide')
.service('searchSVC', function ($http) {
        // This sends a post request to the backend with the name/department/campus attached
        this.search = function (item) {
            return $http.post('/api/search', item);
        };
        // This sends a post request to the details page with the person obj attached
        this.details = function (item) {
            return $http.post('/api/details', item);
        };
        this.cache = null;
        this.setCache = function(search){
            this.cache = search;
        };
});

