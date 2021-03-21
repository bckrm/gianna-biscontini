import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';
import BackgroundImage from 'gatsby-background-image';
import Img from 'gatsby-image';

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

const Heading = styled.h2`
    ${tw`text-h3 text-white leading-none`}

    max-width: 50%;
`;

const Grid = styled.div`
    ${tw`container grid grid-cols-12 gap-x-5`}
`;

const Body = styled.p`
    ${tw`col-start-1 col-end-7 text-xl`}
`;

const StyledImg = styled(Img)`
    ${tw`col-start-8 col-end-13 -mt-40`}
`;

const LinkContainer = styled.div`
    ${tw`col-start-1 col-end-3 row-start-2`}
`;

export default function Intro({ content, image }) {
    const {
        introBody,
        introHeading,
        introImage: {
            asset: { fluid: imageData },
        },
        introLink,
    } = content;

    const {
        childImageSharp: { fluid: bgImageData },
    } = image;
    return (
        <Section>
            <StyledBgImage fluid={bgImageData}>
                <HeadingContainer>
                    <Heading>{introHeading}</Heading>
                </HeadingContainer>
            </StyledBgImage>
            <Grid>
                <Body>{introBody}</Body>
                <StyledImg fluid={imageData} />
                <LinkContainer>
                    <InternalLink data={introLink} />
                </LinkContainer>
            </Grid>
        </Section>
    );
}

Intro.propTypes = {
    content: PropTypes.shape({
        introBody: PropTypes.string.isRequired,
        introHeading: PropTypes.string.isRequired,
        introImage: PropTypes.object.isRequired,
        introLink: PropTypes.object.isRequired,
    }).isRequired,
    image: PropTypes.object.isRequired,
};
