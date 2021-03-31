export default {
    name: 'writingPage',
    title: 'writing Page',
    type: 'document',
    __experimental_actions: [
        'create',
        'update',
        // 'delete',
        'publish',
    ],
    fields: [
        {
            name: 'pageTitle',
            title: 'Page Title',
            type: 'string',
        },
        {
            name: 'heading',
            title: 'Description',
            type: 'array',
            of: [
                {
                    title: 'Block',
                    type: 'block',
                    styles: [{ title: 'Normal', value: 'normal' }],
                },
            ],
        },
        {
            name: 'featuredPost',
            title: 'Featured Post',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'post' } }],
        },
    ],
    preview: {
        select: {
            title: 'pageTitle',
        },
    },
};
