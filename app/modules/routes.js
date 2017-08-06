import { Config } from 'angular-ecmascript/module-helpers';

export default class RoutesConfig extends Config {
  configure() {
    this.$stateProvider
      .state('main', {
        url: '/',
        templateUrl: '../pages/main/main.html',
        controller: 'MainCtrl as main'
      })
      .state('about', {
        url: '/about',
        templateUrl: '../pages/about/about.html',
        controller: 'AboutCtrl as about'
      });
 
    this.$urlRouterProvider.otherwise('/');
    this.$locationProvider.html5Mode(true);
  }
}
 
RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];