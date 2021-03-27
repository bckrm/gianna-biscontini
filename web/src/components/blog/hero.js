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
        <section className="container flex flex-col pt-32 relative">
            <Link
                className="flex items-center text-brand-1 text-xl"
                to="/writing"
            >
                <MdKeyboardArrowLeft /> Back to blog index
            </Link>
            <div className="relative py-32">
                <h1 className="text-[89px] text-brand-1 leading-[125%] w-[60%]">
                    {title}
                </h1>
                <div className="absolute right-0 transform -translate-y-1/2 top-1/2 w-[60%] z-[-1]">
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
