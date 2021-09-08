import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import SvgGroup6 from './svgs/group6';

export default function Credentials({ data }) {
    const {
        credentials,
        credentialImage: {
            asset: { fluid: imageData },
        },
        introHeading,
    } = data;
    return (
        <section className="container mt-40 mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-12 relative">
                <div className="max-w-full">
                    <Img
                        className="max-w-full lg:max-w-[600px]"
                        fluid={imageData}
                    />
                </div>
                <div className="pt-12">
                    <h2 className="font-body font-semibold mb-8 text-brand-1 text-h4 tracking-[.115rem] uppercase">
                        {introHeading}
                    </h2>
                    {credentials.map((item) => {
                        return (
                            <div className="mb-8" key={item.id}>
                                <h3 className="mb-2 text-brand-1 text-xl">
                                    {item.name}
                                </h3>
                                <p className="text-xl">{item.institution}</p>
                            </div>
                        );
                    })}
                    <div className="hidden lg:block absolute top-12 right-0">
                        <SvgGroup6 />
                    </div>
                </div>
            </div>
        </section>
    );
}

Credentials.propTypes = {
    data: PropTypes.shape({
        credentials: PropTypes.array.isRequired,
        credentialImage: PropTypes.object.isRequired,
        introHeading: PropTypes.string.isRequired,
    }).isRequired,
};
