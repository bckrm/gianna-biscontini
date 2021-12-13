import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';
import BackgroundImage from 'gatsby-background-image';
import Img from 'gatsby-image';
import BlockText from '../block-content/blockText';

import InternalLink from '../internalLink';

const Section = styled.section`
    ${tw`mb-80`}
`;

const StyledBgImage = styled(BackgroundImage)`
    ${tw`mb-10 py-10`}
`;

const HeadingContainer = styled.div`
    ${tw`container`}
`;

export default function Intro({ content, image }) {
    const {
        introHeading,
        introImage: {
            asset: { fluid: imageData },
        },
        introLink,
        _rawIntroBody,
    } = content;

    const {
        childImageSharp: { fluid: bgImageData },
    } = image;

    return (
        <Section>
            <StyledBgImage fluid={bgImageData}>
                <HeadingContainer>
                    <h2 className="max-w-full md:max-w-[50%] text-h3 text-white leading-none">
                        {introHeading}
                    </h2>
                </HeadingContainer>
            </StyledBgImage>
            <div className="container grid grid-cols-1 md:grid-cols-12 gap-x-5 gap-y-10">
                <div className="md:col-start-1 md:col-end-7 text-xl prose">
                    <BlockText blocks={_rawIntroBody} />
                </div>
                <div className="row-start-1 md:col-start-8 md:col-end-13 -mt-16 md:-mt-40">
                    <Img fluid={imageData} />
                </div>
                <div className="md:col-start-1 md:col-end-6 md:row-start-2">
                    <InternalLink data={introLink} />
                </div>
            </div>
        </Section>
    );
}

Intro.propTypes = {
    content: PropTypes.shape({
        _rawIntroBody: PropTypes.string.isRequired,
        introHeading: PropTypes.string.isRequired,
        introImage: PropTypes.object.isRequired,
        introLink: PropTypes.object.isRequired,
        membershipCertifications: PropTypes.array.isRequired,
    }).isRequired,
    image: PropTypes.object.isRequired,
};
