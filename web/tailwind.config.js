module.exports = {
    purge: ['./src/**/*.js', './src/**/*.jsx'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        container: (theme) => ({
            center: true,
            padding: theme('spacing.5'),
        }),
        fontFamily: {
            display: ['Abril Fatface'],
            body: ['Montserrat'],
        },
        fontSize: {
            h1: '5.61rem',
            h2: '4.209rem',
            h3: '3.157rem',
            h4: '2.369rem',
            h5: '1.777rem',
            h6: '1.333rem',
            xl: '1.25rem',
            body: '1rem',
            caption: '.75rem',
            attribution: '.563rem',
        },

        extend: {
            colors: {
                'brand-1': '#701531',
                'brand-2': '#183324',
                'brand-3': '#F2C44B',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
