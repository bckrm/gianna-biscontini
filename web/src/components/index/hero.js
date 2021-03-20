import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';
import Img from 'gatsby-image';
import MustardSvg from '../svgs/mustardGroup';

const Section = styled.section`
    ${tw`relative pb-20`}

    max-width: 1440px;
    margin: 0 auto;
`;

const TextContainer = styled.div`
    ${tw`relative`}
`;

const Heading = styled.h1`
    ${tw`absolute text-h1 text-brand-1 leading-none`}
    max-width: 45rem;
    top: 0;
    transform: translateY(45%);
    left: 5%;
`;

const ImageContainer = styled.div`
    ${tw`absolute container`}

    bottom: 0;
    right: 0;
    width: 500px;
`;

export default function Hero({ content }) {
    const {
        heroHeading,
        heroImage: {
            asset: { fluid: imageData },
        },
    } = content;
    return (
        <Section>
            <TextContainer>
                <MustardSvg />
                <Heading>{heroHeading}</Heading>
            </TextContainer>
            <ImageContainer>
                <Img fluid={imageData} />
            </ImageContainer>
        </Section>
    );
}

Hero.propTypes = {
    content: PropTypes.shape({
        heroHeading: PropTypes.string.isRequired,
        heroImage: PropTypes.object.isRequired,
    }).isRequired,
};
