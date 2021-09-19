import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import MustardSvg from '../svgs/mustardGroup';
import IndexHero from '../svgs/indexHero';

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
                <h1 className="absolute max-w-[95%] md:max-w-[55rem] text-h3 md:text-h1 text-brand-1 leading-none transform left-[2.5%] md:left-[5%] top-0 translate-y-[25%] lg:translate-y-35%]">
                    {heroHeading}
                </h1>
            </div>
            <div className="container lg:absolute container bottom-0 right-0 transform lg:-translate-x-1/4 w-[90%] md:w-[400px] xl:w-[500px]">
                <Img fluid={imageData} />
            </div>
            <IndexHero />
        </section>
    );
}

Hero.propTypes = {
    content: PropTypes.shape({
        heroHeading: PropTypes.string.isRequired,
        heroImage: PropTypes.object.isRequired,
    }).isRequired,
};
