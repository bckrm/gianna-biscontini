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
            <div className="max-w-[90%] lg:max-w-full lg:col-start-1 lg:col-end-4 overflow-hidden relative rounded-full transform translate-y-[-40%]">
                <Img className="max-w-full" fluid={imageData} />
            </div>
            <h2
                className="lg:col-start-4 lg:col-end-13 inline relative text-[50px] text-brand-1 quote"
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
