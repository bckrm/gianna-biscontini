export default {
    name: 'mediaItem',
    title: 'Media Item',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'mediaType',
            title: 'Media Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Podcast', value: 'podcast' },
                    { title: 'Print', value: 'print' },
                    { title: 'Video', value: 'video' },
                ],
                layout: 'radio',
            },
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'link',
            title: 'Link',
            type: 'url',
        },
    ],
};
