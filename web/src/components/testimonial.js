import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

export default function Testimonial({ data }) {
    const { testimonial } = data;

    const {
        description,
        image: {
            asset: { fluid: imageData },
        },
        name,
        quote,
    } = testimonial[0];

    return (
        <section className="container grid grid-cols-1 lg:grid-cols-12 lg:gap-x-16 mb-32 relative">
            <div className="w-1/2 lg:w-64 justify-self-center lg:max-w-full lg:absolute lg:top-0 lg:left-0 overflow-hidden rounded-full transform -translate-y-1/4 translate-y-[-20%] lg:translate-y-[-50%]">
                <Img className="max-w-full" fluid={imageData} />
            </div>
            <figure className="lg:col-start-4 lg:col-end-13 ">
                <p
                    className="block font-display relative text-h4 lg:text-[50px] text-brand-1 quote"
                    style={{ lineHeight: '50px' }}
                >
                    {quote}
                </p>
                <figcaption className="mt-4 pl-5 figcaption relative">
                    <p className="font-display mb-2 text-xl text-brand-1">
                        {name}
                    </p>
                    <p className="text-brand-1 text-body">{description}</p>
                </figcaption>
            </figure>
        </section>
    );
}

Testimonial.propTypes = {
    data: PropTypes.object.isRequired,
};
