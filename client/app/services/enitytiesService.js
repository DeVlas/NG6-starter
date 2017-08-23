function EntitiesService(){
    'ngInject';

    const items = [
        {
            title: 'Arrivals',
            type: 'BPM',
            checked: false
        },
        {
            title: 'Car Wash',
            type: 'BPM',
            checked: false
        },
        {
            title: 'Maintenance',
            type: 'Project',
            checked: false
        },
        {
            title: 'Customer payment',
            type: 'BPM',
            checked: false
        },
        {
            title: 'Technical issues',
            type: 'Project',
            checked: false
        }
    ];

    return {
        getEntities() {
            return items;
        }

    }
}

export default EntitiesService;