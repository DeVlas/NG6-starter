import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import 'angular-animate';
import 'angular-aria';
import 'angular-messages';
import 'angular-material';

import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import EntitiesService from '../app/services/enitytiesService';
import 'normalize.css';

angular.module('app', [
    'ngAnimate',
    'ngMaterial',
    uiRouter,
    Common,
    Components
])
    .config(($locationProvider, $mdIconProvider) => {
        "ngInject";
        $locationProvider.html5Mode(true).hashPrefix('!');
    })
    .component('app', AppComponent)
    .factory('EntitiesService', EntitiesService);
