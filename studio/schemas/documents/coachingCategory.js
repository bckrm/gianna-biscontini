export default {
    name: 'coachingCategory',
    title: 'Coaching Category',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'description',
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
            name: 'image',
            title: 'Image',
            type: 'image',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'navItem',
            title: 'Section Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'icon',
            title: 'Icon',
            type: 'string',
            validation: (Rule) => Rule.required(),
            options: {
                list: [
                    {
                        title: 'Life',
                        value: 'life',
                    },
                    {
                        title: 'Leadership',
                        value: 'leadership',
                    },
                    {
                        title: 'Team',
                        value: 'team',
                    },
                ],
                layout: 'radio',
            },
        },
    ],
};
