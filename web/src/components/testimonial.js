import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

export default function Testimonial({ data }) {
    const { testimonial } = data;

    const {
        image: {
            asset: { fluid: imageData },
        },
        quote,
    } = testimonial[0];

    return (
        <section className="container grid grid-cols-1 lg:grid-cols-12 lg:gap-x-16 mb-32">
            <div className="w-1/2 lg:w-64 justify-self-center lg:max-w-full lg:absolute overflow-hidden rounded-full transform -translate-y-1/4 lg:translate-y-[-40%]">
                <Img className="max-w-full" fluid={imageData} />
            </div>
            <h2
                className="lg:col-start-4 lg:col-end-13 inline relative text-h4 lg:text-[50px] text-brand-1 quote"
                style={{ lineHeight: '50px' }}
            >
                {quote}
            </h2>
        </section>
    );
}

Testimonial.propTypes = {
    data: PropTypes.object.isRequired,
};
