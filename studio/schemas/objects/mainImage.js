export default {
    name: 'mainImage',
    type: 'image',
    title: 'Image',
    options: {
        hotspot: true,
    },
    fields: [
        {
            name: 'alt',
            type: 'string',
            title: 'Alternative text',
            description: 'Important for SEO and accessiblity.',
            validation: (Rule) =>
                Rule.warning(
                    'You should fill out the alternative text.',
                ).required(),
            options: {
                isHighlighted: true,
            },
        },
    ],
    preview: {
        select: {
            imageUrl: 'asset.url',
            title: 'caption',
        },
    },
};
