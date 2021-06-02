export default {
    name: 'post',
    type: 'document',
    title: 'Blog Post',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            description: 'This will be the url path for this post',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: 'publishDate',
            type: 'date',
            title: 'Publish Date',
            description: 'This can be used to schedule post for publishing',
        },
        {
            name: 'mainImage',
            type: 'mainImage',
            title: 'Main image',
        },
        {
            name: 'excerpt',
            type: 'text',
            title: 'Excerpt',
            description:
                'This text will be used as the preview text when the post is featured on the writing page. It will also be used as the SEO description by Google. This text should not be longer than 165 characters',
            validation: (Rule) =>
                Rule.max(165).warning(
                    'Should not be longer than 165 characters',
                ),
        },
        {
            name: 'body',
            type: 'bodyPortableText',
            title: 'Body',
        },
    ],
    orderings: [
        {
            name: 'publishingDateAsc',
            title: 'Publishing date new–>old',
            by: [
                {
                    field: 'publishDate',
                    direction: 'desc',
                },
                {
                    field: 'title',
                    direction: 'asc',
                },
            ],
        },
        {
            name: 'publishingDateDesc',
            title: 'Publishing date old->new',
            by: [
                {
                    field: 'publishedAt',
                    direction: 'asc',
                },
                {
                    field: 'title',
                    direction: 'asc',
                },
            ],
        },
    ],
    preview: {
        select: {
            title: 'title',
            publishedAt: 'publishedAt',
            slug: 'slug',
            media: 'mainImage',
        },
    },
};
