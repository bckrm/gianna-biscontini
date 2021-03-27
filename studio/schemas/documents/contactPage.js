export default {
    name: 'contactPage',
    title: 'Contact Page',
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
            title: 'Heading',
            type: 'text',
        },
    ],
};
