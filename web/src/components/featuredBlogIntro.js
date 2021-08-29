import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';
import BlockText from './block-content/blockText';

export default function FeaturedBlogIntro({ data }) {
    const { featuredPost, _rawHeading } = data;

    return (
        <section className="container pt-80 mb-28">
            <h2 className="font-body font-semibold mb-8 text-xl tracking-[.115rem] leading-none">
                Featured Blog
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                    <p className="font-display mb-4 text-h4 text-brand-1 ">
                        {featuredPost.excerpt}
                    </p>
                    <Link
                        className="link relative text-[28px] tracking-[.195rem] uppercase"
                        to={`/writing/${featuredPost.slug.current}`}
                    >
                        read more
                    </Link>
                </div>
                <p className="text-xl">
                    <BlockText blocks={_rawHeading} />
                </p>
            </div>
        </section>
    );
}

FeaturedBlogIntro.propTypes = {
    data: PropTypes.object.isRequired,
};
