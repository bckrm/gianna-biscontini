import React from 'react';
import PropTypes from 'prop-types';

import Img from 'gatsby-image';

export default function Hero({ background, data }) {
    const {
        childImageSharp: { fluid: bgImageData },
    } = background;
    const { heading, pageTitle } = data;

    return (
        <section className="relative min-h-[750px]">
            <div className="absolute top-0 left-0 w-1/2 z-[-1]">
                <Img fluid={bgImageData} />
            </div>
            <h1 className="container text-h1 text-white transform translate-y-full">
                {pageTitle}
            </h1>
            <div className="container transform translate-y-[200%]">
                <p className="block text-xl w-1/2 ml-auto px-16">{heading}</p>
            </div>
        </section>
    );
}

Hero.propTypes = {
    background: PropTypes.object.isRequired,
    data: PropTypes.shape({
        heading: PropTypes.string.isRequired,
        pageTitle: PropTypes.string.isRequired,
    }).isRequired,
};
