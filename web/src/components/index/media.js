import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
// import tw from 'twin.macro';
// import Img from 'gatsby-image';
import BackgroundImage from 'gatsby-background-image';

export default function Media({ data, image }) {
    const { featuredMediaItem, mediaHeading, mediaSubHeading } = data;
    const { description, link, mediaType } = featuredMediaItem[0];
    const {
        childImageSharp: { fluid: bgImageData },
    } = image;

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
        <section className="container">
            <h2 className="font-body font-semibold mb-20 text-[40px] leading-none">
                {mediaHeading}
            </h2>
            <BackgroundImage
                style={{
                    width: '75%',
                    paddingBottom: '10rem',
                    paddingTop: '2rem',
                    paddingLeft: '2rem',
                }}
                fluid={bgImageData}
            >
                <h3 className="mb-10 text-white text-[50px] leading-none tracking-[.115rem] w-3/4">
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
            <h3 className="font-body text-xl">{mediaSubHeading}</h3>
        </section>
    );
}

Media.propTypes = {
    data: PropTypes.object.isRequired,
    image: PropTypes.object.isRequired,
};
