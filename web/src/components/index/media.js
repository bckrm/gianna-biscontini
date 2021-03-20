import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
// import tw from 'twin.macro';
import Img from 'gatsby-image';
import BackgroundImage from 'gatsby-background-image';

export default function Media({ data, image, mediaItems }) {
    const {
        featuredMediaItem,
        mediaHeading,
        mediaImage: {
            asset: { fluid: imageData },
        },
        mediaSubHeading,
    } = data;
    const {
        description,
        id: featuredId,
        link,
        mediaType,
    } = featuredMediaItem[0];
    const {
        childImageSharp: { fluid: bgImageData },
    } = image;

    const filteredMediaItems = mediaItems.filter((item) => {
        return item.node.id !== featuredId;
    });

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
        <section className="container mb-32">
            <h2 className="font-body font-semibold mb-20 text-[40px] tracking-[.115rem] leading-none">
                {mediaHeading}
            </h2>
            <div className="mb-40 relative">
                <BackgroundImage
                    style={{
                        width: '80%',
                        paddingBottom: '6rem',
                        paddingTop: '2rem',
                        paddingLeft: '2rem',
                    }}
                    fluid={bgImageData}
                >
                    <h3 className="mb-10 text-white text-[50px] leading-none w-3/4">
                        {description}
                    </h3>
                    <a
                        className="internal-link relative uppercase text-h5 tracking-[.195rem] text-white"
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {linkText(mediaType)}
                    </a>
                </BackgroundImage>
                <div className="absolute w-1/3 bottom-[-2rem] right-[0]">
                    <Img fluid={imageData} />
                </div>
            </div>
            <h3 className="font-body mb-10 uppercase text-xl tracking-[.08rem]">
                {mediaSubHeading}
            </h3>
            <div className="grid grid-cols-3 gap-y-16 gap-x-10">
                {filteredMediaItems.map((item) => {
                    const { node } = item;
                    return (
                        <div
                            className="flex flex-col justify-between"
                            key={node.id}
                        >
                            <p className="font-display mb-5 text-h5 leading-none">
                                {node.description}
                            </p>
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
    data: PropTypes.object.isRequired,
    image: PropTypes.object.isRequired,
    mediaItems: PropTypes.array.isRequired,
};
