export default {
    name: 'seo',
    title: 'SEO',
    type: 'object',
    fields: [
        {
            name: 'pageTitle',
            title: 'Page Title',
            type: 'text',
        },
        {
            name: 'pageDescription',
            title: 'Page Description',
            type: 'text',
        },
        {
            name: 'ogDescription',
            title: 'Open Graph Description',
            type: 'text',
            description: 'Should not be longer than 297 characters',
        },
        {
            name: 'ogImage',
            title: 'Open Graph Image',
            type: 'image',
        },
    ],
};
