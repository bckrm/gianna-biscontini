export default {
    name: 'aboutPage',
    title: 'About Page',
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
            name: 'introHeading',
            title: 'Intro Heading',
            type: 'string',
        },
        {
            name: 'credentialImage',
            title: 'Credential Image',
            type: 'image',
        },
        {
            name: 'credentials',
            title: 'Credentials List',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'credentials' } }],
        },
        {
            name: 'testimonial',
            title: 'Testimonial',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'testimonial' } }],
            validation: (Rule) => Rule.max(1),
        },
        {
            name: 'cta',
            title: 'CTA',
            type: 'cta',
        },
    ],
    preview: {
        select: {
            title: 'pageTitle',
        },
    },
};
