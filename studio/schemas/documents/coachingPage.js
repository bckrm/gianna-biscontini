export default {
    name: 'coachingPage',
    title: 'Coaching Page',
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
            name: 'introBody',
            title: 'Intro Body',
            type: 'text',
        },
        {
            name: 'introImage',
            title: 'Intro Image',
            type: 'image',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: {
                        type: 'coachingCategory',
                        title: 'Coaching Category',
                    },
                },
            ],
            validation: (Rule) => Rule.min(1).max(3),
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
