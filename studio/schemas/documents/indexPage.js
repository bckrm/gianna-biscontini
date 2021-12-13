export default {
    name: 'indexPage',
    title: 'Index Page',
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
            name: 'heroHeading',
            title: 'Heading',
            type: 'string',
        },
        {
            name: 'heroImage',
            title: 'Hero Image',
            type: 'image',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'introHeading',
            title: 'Intro Heading',
            type: 'string',
        },
        {
            name: 'introBody',
            title: 'Intro Body',
            type: 'bodyPortableText',
        },
        {
            name: 'introLink',
            title: 'Intro Link',
            type: 'internalLink',
        },
        {
            name: 'introImage',
            title: 'Intro Image',
            type: 'image',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'testimonial',
            title: 'Testimonial',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'testimonial' } }],
            validation: (Rule) => Rule.max(1),
        },
        {
            name: 'mediaHeading',
            title: 'Media Section Heading',
            type: 'string',
        },
        {
            name: 'mediaImage',
            title: 'Media Section Image',
            type: 'image',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'featuredMediaItem',
            title: 'Featured Media Item',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'mediaItem' } }],
            validation: (Rule) => Rule.max(1),
        },
        {
            name: 'mediaSubHeading',
            title: 'Media Sub-heading',
            type: 'string',
        },
        {
            name: 'blogSectionHeading',
            title: 'Blog Section Heading',
            type: 'string',
        },
        {
            name: 'seo',
            title: 'SEO',
            type: 'seo',
        },
    ],
    preview: {
        select: {
            title: 'pageTitle',
        },
    },
};
