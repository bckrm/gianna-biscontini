import React from 'react';
import PropTypes from 'prop-types';

import Hero from './hero';
import BlockText from '../block-content/blockText';

export default function BlogPost({ mainImage, _rawBody, title }) {
    const heroData = { mainImage, title };
    return (
        <>
            <Hero data={heroData} />
            <div className="prose mx-auto max-w-screen-xl px-5 text-black">
                <BlockText blocks={_rawBody} />
            </div>
        </>
    );
}

BlogPost.propTypes = {
    mainImage: PropTypes.object.isRequired,
    _rawBody: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
};
