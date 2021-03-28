import React from 'react';
import PropTypes from 'prop-types';

import { MdKeyboardArrowLeft } from 'react-icons/md';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

export default function Hero({ data }) {
    const {
        mainImage: {
            asset: { fluid: imageData },
        },
        title,
    } = data;
    return (
        <section className="container pt-32 mb-8">
            <Link
                className="flex items-center text-brand-1 text-xl"
                to="/writing"
            >
                <MdKeyboardArrowLeft /> Back to blog index
            </Link>
            <div className="relative flex flex-col">
                <h1 className="absolute left-0 transform -translate-y-1/2 top-1/2 w-[60%] text-[89px] text-brand-1 leading-[125%] w-[60%] z-10">
                    {title}
                </h1>
                <div className="self-end transform translate-x-[2rem] w-[60%]">
                    <Img fluid={imageData} />
                </div>
            </div>
        </section>
    );
}

Hero.propTypes = {
    data: PropTypes.shape({
        mainImage: PropTypes.object.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
};
