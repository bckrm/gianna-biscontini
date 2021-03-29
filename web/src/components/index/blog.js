import React from 'react';
import PropTypes from 'prop-types';
import BlogPreview from '../blog/blogPreview';

export default function Blog({ data }) {
    const { edges } = data;

    const posts = edges.map((item) => item.node);

    return (
        <section className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-36">
            <h2 className="font-body font-semibold text-brand-1 text-[40px] leading-none tracking-[.115rem]">
                Writing
            </h2>
            {posts.map((item) => (
                <BlogPreview data={item} imageAspectRatio={9 / 16} />
            ))}
        </section>
    );
}

Blog.propTypes = {
    data: PropTypes.object.isRequired,
};
