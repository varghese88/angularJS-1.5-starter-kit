import angular from 'angular'
import uiRouter from 'angular-ui-router'
import appComponent from "./app.component"
import mainModule from "./pages/main/main"

angular.module('app',[uiRouter,mainModule.name])

.config(($urlRouterProvider,$stateProvider,$locationProvider)=>{
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('main',{
            url:'/',
            template:'<main></main>',
        })
        .state('about',{
            url:'/about',
            template:'varghese',
        });
    $locationProvider.html5Mode(true);
})
.component('app',appComponent);
