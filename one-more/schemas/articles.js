export default {
    name: 'articles',
    title: 'Articles',
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
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'content',
            title: 'Content',
            type: 'string',
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'اصابات', value: 'اصابات' },
                    { title: 'مكملات غذائيه', value: 'مكملات غذائيه' },
                    { title: 'نصائح غذائيه', value: 'نصائح غذائيه' },
                    { title: 'تغذيه الحوامل', value: 'تغذيه الحوامل' },
                    { title: 'السكر', value: 'السكر' },
                    { title: 'خرافات', value: 'خرافات' },
                ]
            }
        }
    ]
}