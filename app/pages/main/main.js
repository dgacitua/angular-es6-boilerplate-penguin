import { Controller } from 'angular-ecmascript/module-helpers';

export default class MainCtrl extends Controller {
  constructor() {
    super(...arguments);

    this.appName = 'Angular ES6 Boilerplate "Penguin Edition"';

    this.min = 0;
    this.max = 10;
  }

  getDate() {
    this.DateService.getDate()
      .then((res) => { this.dateResult = res });
  }

  getRandomNumber() {
    this.RandomNumberService.getNumber(this.min, this.max)
     .then((res) => { this.randomResult = res });
  }
}

MainCtrl.$name = 'MainCtrl';
MainCtrl.$inject = [ 'DateService', 'RandomNumberService' ];