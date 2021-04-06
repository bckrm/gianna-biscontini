import React from 'react';
import PropTypes from 'prop-types';
import formatDate from '../helpers/dateFormatter';

export default function Media({ data }) {
    const {
        mediaHeading: { mediaHeading },
        mediaItems: { featuredMedia },
    } = data;

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

    return (
        <section className="container mb-80">
            <h2 className="font-semibold font-body mb-4 text-brand-2 text-h4 tracking-[.115rem] uppercase">
                {mediaHeading}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-16 gap-x-10">
                {featuredMedia.map((item) => {
                    return (
                        <div
                            className="flex flex-col justify-between"
                            key={item.id}
                        >
                            <div className="mb-8">
                                <p className="font-display mb-2 text-h5 leading-none">
                                    {item.description}
                                </p>
                                {item.pubDate && (
                                    <p>{formatDate(item.pubDate)}</p>
                                )}
                            </div>
                            <a
                                className="link relative uppercase w-min"
                                href={item.link}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {linkText(item.mediaType)}
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
