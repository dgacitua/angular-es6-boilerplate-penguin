import { Service } from 'angular-ecmascript/module-helpers';

export default class DateService extends Service {
  getDate() {
    // https://stackoverflow.com/a/30245911
    return this.$q((resolve, reject) => {
      let now = new Date().toLocaleString();
      resolve(now);
    });
  }
}

DateService.$inject = ['$q'];