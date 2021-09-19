import React from 'react';
import PropTypes from 'prop-types';

import Img from 'gatsby-image';
import ContactForm from './contactForm';
import BlockText from './block-content/blockText';
import SvgGroup2 from './svgs/group2';
import SvgGroup6 from './svgs/group6';

export default function Hero({ background, data, isContact }) {
    const {
        childImageSharp: { fluid: bgImageData },
    } = background;
    const { pageTitle, heroImage, _rawHeading } = data;
    const imageData = heroImage ? heroImage.asset.fluid : undefined;

    /*
        // tried this first, it did not work

        const transform = imageData ? '50%' : '200%';

        className={`translate-y-[${transform}]`}
    */
    const heroStyle = imageData
        ? 'relative -translate-y-1/4'
        : 'lg:mt-[-15rem]';

    return (
        <section className="relative">
            <div className="relative overflow-hidden top-0 left-0 w-full md:w-3/4 lg:w-1/2 z-[-1]">
                <div className="w-[125%] md:w-full">
                    <Img
                        critical
                        durationFadeIn={0}
                        fadeIn={false}
                        fluid={bgImageData}
                        loading="eager"
                    />
                    <h1 className="absolute w-full top-1/2 left-1/2 md:left-[5%] text-h1 text-center md:text-left text-white transform -translate-y-3/4 -translate-x-1/2 md:-translate-x-0">
                        {pageTitle}
                    </h1>
                </div>
            </div>
            <SvgGroup2 />

            {isContact ? (
                <div className="container transform lg:mt-[-10rem]">
                    <p className="block font-display text-h4 text-brand-2 ml-auto mb-10 md:w-1/2">
                        {_rawHeading && <BlockText blocks={_rawHeading} />}
                    </p>
                    <ContactForm />
                </div>
            ) : (
                <div className={`container transform ${heroStyle}`}>
                    {imageData && (
                        <div className="ml-auto mb-8 px-16 lg:w-1/2">
                            <Img fluid={imageData} />
                        </div>
                    )}

                    {_rawHeading && (
                        <p className="block lg:w-1/2 ml-auto lg:px-16 prose text-body">
                            {_rawHeading && <BlockText blocks={_rawHeading} />}
                        </p>
                    )}
                    {imageData && (
                        <div className="absolute hidden lg:block left-0 transform w-[500px] -translate-y-full translate-x-1/2 top-full origin-center">
                            <SvgGroup6 />
                        </div>
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
        heroImage: PropTypes.object,
        pageTitle: PropTypes.string.isRequired,
        _rawHeading: PropTypes.object.isRequired,
    }).isRequired,
    isContact: PropTypes.bool,
};
