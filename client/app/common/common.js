import angular from 'angular';
import EntityList from './entityList/entityList'
let commonModule = angular.module('app.common', [
    EntityList
])
  
.name;

export default commonModule;
