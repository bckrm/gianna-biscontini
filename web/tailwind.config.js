module.exports = {
    purge: ['./src/**/*.js', './src/**/*.jsx'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontSize: {
            h1: '5.61rem',
            h2: '4.209rem',
            h3: '3.157rem',
            h4: '2.369rem',
            h5: '1.777rem',
            h6: '1.333rem',
            body: '1rem',
            caption: '.75rem',
            attribution: '.563rem',
        },
        container: (theme) => ({
            center: true,
            padding: theme('spacing.5'),
        }),
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
