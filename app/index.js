import 'jquery';
import 'angular-material/angular-material.css';
import 'font-awesome/css/font-awesome.css';

import angular from 'angular';
import angularMaterial from 'angular-material';
import angularAnimate from 'angular-animate';
import angularAria from 'angular-aria';
import uiRouter from '@uirouter/angularjs';
import Loader from 'angular-ecmascript/module-loader';

import RoutesConfig from './modules/routes';

import ServicesModule from './modules/services';

import MainCtrl from './pages/main/main';
import AboutCtrl from './pages/about/about';

const app = 'app';

angular.module(app, [
  angularMaterial,
  angularAnimate,
  angularAria,
  uiRouter,
  ServicesModule.name
]);

new Loader(app)
  .load(MainCtrl)
  .load(AboutCtrl)
  .load(RoutesConfig);

angular.element(document).ready(() => {
  angular.bootstrap(document, [ app ]);
});