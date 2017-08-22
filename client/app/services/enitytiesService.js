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
            checked: true
        },
        {
            title: 'Maintenance',
            type: 'Project',
            checked: true
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
        },
        {
            title: 'Something',
            type: 'BPM',
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