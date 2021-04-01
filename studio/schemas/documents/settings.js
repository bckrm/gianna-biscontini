export default {
    name: 'settings',
    title: 'Settings',
    type: 'document',
    __experimental_actions: [
        'create',
        'update',
        // 'delete',
        'publish',
    ],
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'footerImage',
            title: 'Footer Image',
            type: 'image',
        },
        {
            name: 'socialAccounts',
            title: 'Social Media Accounts',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'socialAccount' } }],
            validation: (Rule) => Rule.unique(),
        },
    ],
    preview: {
        select: {
            title: 'title',
        },
    },
};
