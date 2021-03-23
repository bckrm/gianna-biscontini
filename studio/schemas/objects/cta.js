export default {
    name: 'cta',
    title: 'CTA',
    type: 'object',
    fields: [
        {
            name: 'heading',
            title: 'Heading',
            type: 'string',
        },
        {
            name: 'body',
            title: 'Body',
            type: 'text',
        },
        {
            name: 'link',
            title: 'Link',
            type: 'internalLink',
        },
    ],
};
