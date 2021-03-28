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
            name: 'introBody',
            title: 'Intro Body',
            type: 'text',
        },
        {
            name: 'featuredPost',
            title: 'Featured Post',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'post' } }],
        },
    ],
};
