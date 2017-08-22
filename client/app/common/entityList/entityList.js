import angular from 'angular';
import entityComponent from './entityList.component';

let enitityModule = angular.module('entityList', [])
    .component('entityList', entityComponent)
    .name;

export default enitityModule;