import angular from 'angular';

import DateService from '../services/date';
import RandomNumberService from '../services/randomNumber';

export default angular.module('services', [])
.service('DateService', DateService)
.service('RandomNumberService', RandomNumberService);