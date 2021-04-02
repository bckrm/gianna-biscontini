import React from 'react';
import PropTypes from 'prop-types';

import Img from 'gatsby-image';
import ContactForm from './contactForm';
import BlockText from './block-content/blockText';
import SvgGroup1 from './svgs/group1';
import SvgGroup2 from './svgs/group2';
import SvgGroup3 from './svgs/group3';
import SvgGroup4 from './svgs/group4';
import SvgGroup5 from './svgs/group5';

export default function Hero({ background, data, isContact, location }) {
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
    // const transform = imageData ? 'translate-y-[50%]' : 'translate-y-[200%]';
    const heroStyle = imageData ? 'mb-52 mt-8' : 'mb-28 mt-8';

    const { pathname } = location;

    // remove all forward slashes from pathname
    // gatsby prepends a / in local dev but appends in production
    const cleanPathname = pathname.replace(/\//g, '');

    const icon = {
        about: <SvgGroup3 />,
        coaching: <SvgGroup1 />,
        contact: <SvgGroup4 />,
        speaking: <SvgGroup2 />,
        writing: <SvgGroup5 />,
    };

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
                    <h1 className="absolute w-full top-1/2 left-1/2 md:left-[5%] text-h1 text-center md:text-left text-white transform -translate-y-3/4 -translate-x-1/2 md:-translate-x-0 relative">
                        {pageTitle}
                    </h1>
                </div>
            </div>
            {icon[cleanPathname]}

            {isContact ? (
                <div
                    className={`container ${heroStyle} transform lg:mt-[-10rem]`}
                >
                    <p className="block font-display text-h4 text-brand-2 ml-auto mb-10 md:w-1/2">
                        {_rawHeading && <BlockText blocks={_rawHeading} />}
                    </p>
                    <ContactForm />
                </div>
            ) : (
                <div className={`container ${heroStyle}`}>
                    {imageData && (
                        <div className="ml-auto mb-8 px-16 lg:w-1/2">
                            <Img fluid={imageData} />
                        </div>
                    )}
                    {_rawHeading && (
                        <p className="block text-xl lg:w-1/2 ml-auto lg:px-16 prose text-body">
                            {_rawHeading && <BlockText blocks={_rawHeading} />}
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
        heroImage: PropTypes.object,
        pageTitle: PropTypes.string.isRequired,
        _rawHeading: PropTypes.object.isRequired,
    }).isRequired,
    isContact: PropTypes.bool,
    location: PropTypes.object.isRequired,
};
