import { Config } from 'angular-ecmascript/module-helpers';

import '../pages/main/main.css';
import MainTpl from '../pages/main/main.html';

import '../pages/about/about.css';
import AboutTpl from '../pages/about/about.html';

export default class RoutesConfig extends Config {
  configure() {
    this.$stateProvider
      .state('main', {
        url: '/',
        template: MainTpl,
        controller: 'MainCtrl as main'
      })
      .state('about', {
        url: '/about',
        template: AboutTpl,
        controller: 'AboutCtrl as about'
      });
 
    this.$urlRouterProvider.otherwise('/');
    this.$locationProvider.html5Mode(true);
  }
}
 
RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];