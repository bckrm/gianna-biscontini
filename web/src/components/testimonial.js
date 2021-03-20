import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
// import tw from 'twin.macro';
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
        <section className="container grid grid-cols-12 gap-x-16 mb-32">
            <Img
                className="col-start-1 col-end-4 relative rounded-full transform translate-y-[-40%]"
                fluid={imageData}
            />
            <h2
                className="col-start-4 col-end-13 inline relative text-[50px] text-brand-1 quote"
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
