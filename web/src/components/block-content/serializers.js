// import React from 'react';
import BlogBodyImage from '../blog/blogBodyImage';

const serializers = {
    types: {
        // undefined: (props) => console.log(props),
        // undefined: (props) => <pre>{JSON.stringify(props, null, 2)}</pre>,
        // span: (props) => <pre>{JSON.stringify(props, null, 2)}</pre>,
        mainImage: BlogBodyImage,
    },
};

export default serializers;
