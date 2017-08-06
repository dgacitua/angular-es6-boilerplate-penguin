import { Service } from 'angular-ecmascript/module-helpers';

export default class DateService extends Service {
  getDate() {
    return Date.now;
  }
}

DateService.$inject = [];