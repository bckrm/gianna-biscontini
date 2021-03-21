import React from 'react';
import PropTypes from 'prop-types';

import Img from 'gatsby-image';

export default function Intro({ data }) {
    const {
        introImage: {
            asset: { fluid: imageData },
        },
        introBody,
        introHeading,
    } = data;
    return (
        <section className="container grid grid-cols-2 gap-10 mb-44">
            <Img fluid={imageData} />
            <div className="flex flex-col justify-end items-start -mb-16">
                <h2 className="mb-2 text-h3 text-brand-1">{introHeading}</h2>
                <p className="text-xl">{introBody}</p>
            </div>
        </section>
    );
}

Intro.propTypes = {
    data: PropTypes.shape({
        introImage: PropTypes.object.isRequired,
        introBody: PropTypes.string.isRequired,
        introHeading: PropTypes.string.isRequired,
    }).isRequired,
};
