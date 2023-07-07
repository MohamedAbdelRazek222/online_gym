export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
                hotspot: true,
            }
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
        },
        {
            name: 'details',
            title: 'Details',
            type: 'string',
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'مكملات بروتين', value: 'مكملات بروتين' },
                    { title: 'فيتامينات ومعادن', value: 'فيتامينات ومعادن' },
                    { title: 'احماض امينيه', value: 'احماض امينيه' },
                    { title: 'مكملات طاقه', value: 'مكملات طاقه' },
                    { title: 'مكملات كربوهيدرات', value: 'مكملات كربوهيدرات' },
                    { title: 'حوارق دهون', value: 'حوارق دهون' },
                    { title: 'الماس جينز وزياده الوزن', value: 'الماس جينز وزياده الوزن' },
                    { title: 'مكملات كرياتين', value: 'مكملات كرياتين' },
                    { title: 'محفزات تستسترون', value: 'محفزات تستسترون' },
                ]
            }
        }
    ]
}