import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import MustardSvg from '../svgs/mustardGroup';

export default function Hero({ content }) {
    const {
        heroHeading,
        heroImage: {
            asset: { fluid: imageData },
        },
    } = content;

    return (
        <section className="xl:pb-20 relative overflow-hidden w-full">
            <div className="container">
                <div>
                    <MustardSvg />
                </div>
                <h1 className="absolute max-w-[95%] md:max-w-[45rem] text-h2 md:text-h1 text-brand-1 leading-none transform left-[2.5%] md:left-[5%] top-0 translate-y-[45%]">
                    {heroHeading}
                </h1>
            </div>
            <div className="container xl:absolute container bottom-0 right-0 w-[90%] md:w-[400px] xl:w-[500px]">
                <Img fluid={imageData} />
            </div>
        </section>
    );
}

Hero.propTypes = {
    content: PropTypes.shape({
        heroHeading: PropTypes.string.isRequired,
        heroImage: PropTypes.object.isRequired,
    }).isRequired,
};
