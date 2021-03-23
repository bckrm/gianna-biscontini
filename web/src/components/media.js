import React from 'react';
import PropTypes from 'prop-types';

export default function Media({ data }) {
    const {
        mediaHeading: { mediaHeading },
        mediaItems: { edges: rawMediaItems },
    } = data;

    // const mediaItems = rawMediaItems.filter((item) => {
    //     return item.node.id !== featuredId;
    // });
    function linkText(val) {
        let text;
        if (val === 'podcast') {
            text = 'listen';
        } else if (val === 'video') {
            text = 'watch';
        } else {
            text = 'read';
        }

        return text;
    }

    const formatDate = (datestring) => {
        const options = {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
        };
        return new Date(datestring).toLocaleDateString(undefined, options);
    };

    return (
        <section className="container mb-80">
            <h2 className="font-semibold font-body mb-4 text-brand-2 text-h4 tracking-[.115rem] uppercase">
                {mediaHeading}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-16 gap-x-10">
                {rawMediaItems.map((item) => {
                    const { node } = item;

                    return (
                        <div
                            className="flex flex-col justify-between"
                            key={node.id}
                        >
                            <div className="mb-8">
                                <p className="font-display mb-2 text-h5 leading-none">
                                    {node.title}
                                </p>
                                <p>{formatDate(node.pubDate)}</p>
                            </div>
                            <a
                                className="link relative uppercase w-min"
                                href={node.link}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {linkText(node.mediaType)}
                            </a>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

Media.propTypes = {
    data: PropTypes.shape({
        mediaHeading: PropTypes.string.isRequired,
        mediaItems: PropTypes.object.isRequired,
    }).isRequired,
};
