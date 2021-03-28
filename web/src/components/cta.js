import React from 'react';
import PropTypes from 'prop-types';

import InternalLink from './internalLink';

export default function CTA({ data, color }) {
    const {
        cta: { body, heading, link },
    } = data;

    const headingColor = color ? `text-${color}` : 'text-brand-1';
    return (
        <section className="container mb-12 lg:mb-32 text-center">
            <h2 className={`text-h3 ${headingColor} mb-8`}>{heading}</h2>
            <p className="text-xl lg:max-w-[40%] mb-8 mx-auto">{body}</p>
            <InternalLink data={link} />
        </section>
    );
}

CTA.defaultProps = {
    color: '',
};

CTA.propTypes = {
    color: PropTypes.string,
    data: PropTypes.object.isRequired,
};
