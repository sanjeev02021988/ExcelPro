//Creating dependent modules to support lazy loading of resources
angular.module('myApp',[]);

//Creating main application module
angular.module('myApp', ['ui.router'])
    .config( function($stateProvider, $urlRouterProvider){
        
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('Login',{
                url: "/",
                controller:'myController as myCtrl',
                templateUrl:'./views/sheet.html'
            })
		});