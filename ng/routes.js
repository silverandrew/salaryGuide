/**
 * Created by eli on 3/23/15.
 */
angular.module('salaryGuide')
    .config(['$stateProvider',function($stateProvider, searchSvc){
        // These states correspond to the pages on the app. Hooks up templates and views
        $stateProvider.state('home',{
            url: '/',
            templateUrl: 'index.html',
            controller: 'mainCTRL'
        })
        .state('search',{
            url: '/search',
            templateUrl: 'search.html',
            controller: 'searchCTRL',
            resolve: {
                preloadOBJ: function($http) {
                    return $http({method:'GET',url:'/api/departments'});
                }
            }
        })
        .state('details',{
                // The :id is the string passed in from the URL corresponds to the personID in the the database
            url: '/details/:id',
            templateUrl: 'details.html',
            controller: 'detailCTRL'
        })
    }])
    .run(['$state',function($state){
        $state.go('home');
        $(document).foundation();
    }]);