import React from 'react';
import PropTypes from 'prop-types';

import Img from 'gatsby-image';
import ContactForm from './contactForm';

export default function Hero({ background, data, isContact }) {
    const {
        childImageSharp: { fluid: bgImageData },
    } = background;
    const { heading, pageTitle, heroImage } = data;
    const imageData = heroImage ? heroImage.asset.fluid : undefined;

    /*
        // tried this first, it did not work

        const transform = imageData ? '50%' : '200%';

        className={`translate-y-[${transform}]`}
    */
    // const transform = imageData ? 'translate-y-[50%]' : 'translate-y-[200%]';
    const heroStyle = imageData ? 'mb-52 mt-80' : 'mb-28 mt-[25rem]';

    return (
        <section className="relative">
            <div className="absolute top-0 left-0 w-1/2 z-[-1]">
                <Img fluid={bgImageData} />
            </div>
            <h1 className="container text-h1 text-white transform translate-y-full">
                {pageTitle}
            </h1>
            {isContact ? (
                <div
                    className={`container ${heroStyle} transform md:translate-y-[-10rem]`}
                >
                    <p className="block font-display text-h4 text-brand-2 ml-auto mb-10 md:w-1/2">
                        {heading}
                    </p>
                    <ContactForm />
                </div>
            ) : (
                <div className={`container ${heroStyle}`}>
                    {imageData && (
                        <div className="ml-auto mb-8 px-16 w-1/2">
                            <Img fluid={imageData} />
                        </div>
                    )}
                    {heading && (
                        <p className="block text-xl w-1/2 ml-auto px-16">
                            {heading}
                        </p>
                    )}
                </div>
            )}
        </section>
    );
}

Hero.defaultProps = {
    isContact: false,
};

Hero.propTypes = {
    background: PropTypes.object.isRequired,
    data: PropTypes.shape({
        heading: PropTypes.string.isRequired,
        heroImage: PropTypes.object,
        pageTitle: PropTypes.string.isRequired,
    }).isRequired,
    isContact: PropTypes.bool,
};
