import modalHtml from '../../templates/modal.html';
import _ from 'lodash';
class HomeController {
   // static $inject = ['$mdDialog', 'EntitiesService'];

    constructor($mdDialog, EntitiesService) {
        'ngInject';
        this.name = 'home';
        this.toggled = false;
        this.$mdDialog = $mdDialog;
        this.EntitiesService = EntitiesService;
    }

    $onInit() {
        this.items = this.EntitiesService.getEntities();
    }

    openModalWindow(ev) {
        let items = this.items;
        this.$mdDialog.show({
            controller($mdDialog) {
                this.items = items;
                this.close = () => {
                    $mdDialog.hide();
                }
            },
            controllerAs: 'vm',
            template: modalHtml,
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true
        })
    }

    toggle() {
        this.toggled = !this.toggled;
    }

    isToggled() {
        return this.toggled;
    }

    getCheckedItemsCount() {
        let i = 0;
        _.each(this.items, (item) => {
            if (item.checked) {
                i++;
            }
        });
        return i;
    }

    isSetCheckedItems() {
        let response = false;
        _.each(this.items, (item) => {
            if (item.checked) {
                response = true;
            }
        });
        return response;
    }

}

export default HomeController;
