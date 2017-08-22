class EntityController {
    constructor(EntitiesService) {
        this.name = 'entity-list';
        this.searchText = '';
        this.toggled = false;
    }
    toggle() {
        this.toggled = !this.toggled;
    }
    isToggled() {
        return this.toggled;
    }

}

export default EntityController;