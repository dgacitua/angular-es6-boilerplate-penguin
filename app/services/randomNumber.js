import { Service } from 'angular-ecmascript/module-helpers';

export default class RandomNumberService extends Service {
  getNumber(min, max) {
    return this.$q((resolve, reject) => {
      resolve(Math.floor(Math.random() * (max - min + 1)) + min);
    });
  }
}

RandomNumberService.$inject = ['$q'];