export default {
    name: 'socialAccount',
    title: 'Social Media Accounts',
    type: 'document',
    fields: [
        {
            name: 'accountName',
            title: 'Accounts Name',
            type: 'string',
            options: {
                list: [
                    { title: 'Instagram', value: 'Instagram' },
                    { title: 'Facebook', value: 'Facebook' },
                    { title: 'Linkedin', value: 'Linkedin' },
                    { title: 'Twitter', value: 'Twitter' },
                ],
            },
        },
        {
            name: 'accountUrl',
            title: 'Account Url',
            type: 'url',
        },
    ],
    preview: {
        select: {
            title: 'accountName',
        },
    },
};
