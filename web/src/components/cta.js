import React from 'react';
import PropTypes from 'prop-types';

import InternalLink from './internalLink';

export default function CTA({ data }) {
    const {
        cta: { body, heading, link },
    } = data;
    return (
        <section className="container mb-32 text-center">
            <h2 className="text-h3 text-brand-1 mb-8">{heading}</h2>
            <p className="text-xl max-w-[40%] mb-8 mx-auto">{body}</p>
            <InternalLink data={link} />
        </section>
    );
}

CTA.propTypes = {
    data: PropTypes.object.isRequired,
};
