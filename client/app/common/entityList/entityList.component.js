import template from './entityList.html';
import controller from './entityList.controller';
import './entity-list.scss';

const enitityListComponent = {
    restrict: 'E',
    bindings: {
        items: '<'
    },
    template,
    controller,
    controllerAs: 'vm'
};

export default enitityListComponent;

