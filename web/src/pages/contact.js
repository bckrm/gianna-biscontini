import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../layouts/layout';
import Hero from '../components/hero';

export const query = graphql`
    query ContactPage {
        hero: sanityContactPage {
            pageTitle
            heading
        }

        greenBgImage: file(relativePath: { regex: "/greenHeroBg/" }) {
            id
            childImageSharp {
                fluid(maxWidth: 2000) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;

export default function ContactPage({ data }) {
    const { hero, greenBgImage } = data;
    return (
        <Layout>
            <Hero background={greenBgImage} data={hero} isContact />
        </Layout>
    );
}

ContactPage.propTypes = {
    data: PropTypes.shape({
        hero: PropTypes.object.isRequired,
        greenBgImage: PropTypes.object.isRequired,
    }).isRequired,
};
