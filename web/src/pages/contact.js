import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../layouts/layout';
import Hero from '../components/hero';
import Seo from '../components/seo';

export const query = graphql`
    fragment SanitySeoImage on SanitySeoImage {
        crop {
            _key
            _type
            top
            bottom
            left
            right
        }
        hotspot {
            _key
            _type
            x
            y
            height
            width
        }
        asset {
            _id
        }
    }

    query ContactPage {
        hero: sanityContactPage {
            pageTitle
            _rawHeading
        }

        greenBgImage: file(relativePath: { regex: "/greenHeroBg/" }) {
            id
            childImageSharp {
                fluid(maxWidth: 2000) {
                    ...GatsbyImageSharpFluid
                }
            }
        }

        seo: sanityContactPage {
            seo {
                ogDescription
                ogImage {
                    ...SanitySeoImage
                }
                pageDescription
                pageTitle
            }
        }
    }
`;

export default function ContactPage({ data, location }) {
    const { hero, greenBgImage, seo } = data;
    return (
        <Layout>
            <Seo data={seo} />
            <Hero
                background={greenBgImage}
                data={hero}
                isContact
                location={location}
            />
        </Layout>
    );
}

ContactPage.propTypes = {
    data: PropTypes.shape({
        hero: PropTypes.object.isRequired,
        greenBgImage: PropTypes.object.isRequired,
        seo: PropTypes.object.isRequired,
    }).isRequired,
    location: PropTypes.object.isRequired,
};
