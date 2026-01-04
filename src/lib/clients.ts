export interface Client {
    id: string;
    name: string;
    entityName: string;
    typicalProperties?: string[];
    billableRate?: number;
}

export const clients: Client[] = [
    {
        id: 'pep',
        name: 'PEP Real Estate',
        entityName: 'Pasquale Management LLC',
        typicalProperties: [
            '69 Mercer', '76 Wooster', '54 Crosby', '53 Wooster', '51 Wooster',
            '41 Wooster', '39 Wooster', '44-46 Decatur', '139 Charles',
            '685 Washington', '25 Howard', '327 Douglass', '88 Thompson'
        ],
        billableRate: 53
    },
    {
        id: 'sohojohnny',
        name: 'SoHoJohnny',
        entityName: 'SoHoJohnny LLC',
        billableRate: 53
    },
    {
        id: 'decatur',
        name: '44-46 Decatur',
        entityName: 'GreenwichCThouse 2024 LLC',
        billableRate: 53
    },
    {
        id: '53wooster',
        name: '53 Wooster',
        entityName: 'JP Associates II LLC',
        billableRate: 53
    },
    {
        id: 'tvoa',
        name: 'TVOA',
        entityName: 'The Value of Architecture',
        billableRate: 53
    },
    {
        id: 'eventpopup',
        name: 'The Event Popup',
        entityName: 'The Event Popup',
        billableRate: 53
    },
    {
        id: 'tribeca',
        name: 'Tribeca Records',
        entityName: 'Tribeca Records',
        billableRate: 53
    },
    {
        id: 'letmehelp',
        name: 'Let Me Help',
        entityName: 'Let Me Help, Inc LLC',
        billableRate: 53
    },
    {
        id: 'internal',
        name: 'Internal (Liberty)',
        entityName: 'Liberty Design Studio',
        billableRate: 0
    }
];

export const PLATFORMS = [
    'peprealestate.com',
    'Crexi',
    'CoStar/LoopNet',
    'CommercialEdge',
    'LavaZoo',
    'StreetEasy',
    'OneKey MLS',
    'Facebook/Instagram',
    'Craigslist'
];

export const WORKLOAD_SCALES = [
    { label: 'Light', min: 6.8, max: 7.5 },
    { label: 'Moderate', min: 7.0, max: 8.5 },
    { label: 'High', min: 8.5, max: 9.8 }
];
