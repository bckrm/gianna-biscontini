export default {
    name: 'modal',
    title: 'Scheduling Modal',
    type: 'document',
    __experimental_actions: [
        'create',
        'update',
        // 'delete',
        'publish',
    ],
    fields: [
        {
            name: 'heading',
            title: 'Heading',
            type: 'string',
            validation: (Rule) => Rule.max(20),
        },
        {
            name: 'body',
            title: 'Body',
            type: 'text',
        },
        {
            name: 'ctaText',
            title: 'Button Text',
            type: 'string',
        },
        {
            name: 'url',
            title: 'URL',
            type: 'url',
        },
        {
            name: 'utmData',
            title: 'UTM Data',
            type: 'utmData',
        },
    ],
};
