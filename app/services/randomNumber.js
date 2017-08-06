import { Service } from 'angular-ecmascript/module-helpers';

export default class RandomNumberService extends Service {
  getNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

RandomNumberService.$inject = [];