export default {
    name: 'speakingPage',
    title: 'Speaking Page',
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
            name: 'heroImage',
            title: 'Hero Image',
            type: 'image',
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
            name: 'eventsHeading',
            title: 'Events Heading',
            type: 'string',
        },
        {
            name: 'events',
            title: 'Featured Events',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'events' } }],
            validation: (Rule) => Rule.max(6),
            description:
                "Select up to 6 events to feature, if no event's are selected the most recent event's will be displayed",
        },
        {
            name: 'mediaHeading',
            title: 'Featured Media Heading',
            type: 'string',
        },
        {
            name: 'featuredMedia',
            title: 'Featured Media',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'mediaItem' } }],
            validation: (Rule) => Rule.max(4),
            description: 'Select up to 4 media items.',
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
};
