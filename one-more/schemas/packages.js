export default {
    name: 'packages',
    title: 'packages',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'month',
            title: 'Month',
            type: 'number'
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
        },
        {
            name: 'details',
            title: 'Details',
            type: 'array',
            of: [{ type: 'string' }]
        }
    ]
}