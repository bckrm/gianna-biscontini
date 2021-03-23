export default {
    name: 'internalLink',
    title: 'Link',
    type: 'document',
    fields: [
        {
            name: 'linkText',
            title: 'Link Text',
            type: 'string',
        },
        {
            name: 'link',
            title: 'Link',
            type: 'reference',
            to: [
                { type: 'indexPage' },
                { type: 'coachingPage' },
                { type: 'speakingPage' },
            ],
        },
    ],
};
