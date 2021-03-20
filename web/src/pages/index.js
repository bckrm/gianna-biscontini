import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../layouts/layout';
import Hero from '../components/index/hero';
import Intro from '../components/index/intro';

export const query = graphql`
    query IndexPage {
        hero: sanityIndexPage {
            heroHeading
            heroImage {
                asset {
                    fluid(maxWidth: 500) {
                        ...GatsbySanityImageFluid
                    }
                }
            }
        }

        intro: sanityIndexPage {
            introHeading
            introBody
            introLink {
                link {
                    ... on SanityCoachingPage {
                        pageTitle
                    }
                    ... on SanityIndexPage {
                        pageTitle
                    }
                }
                linkText
            }
            introImage {
                asset {
                    fluid(maxWidth: 500) {
                        ...GatsbySanityImageFluid
                    }
                }
            }
        }

        crimsonBgImage: file(relativePath: { regex: "/crimsonBg/" }) {
            id
            childImageSharp {
                fluid(maxWidth: 2000) {
                    ...GatsbyImageSharpFluid
                }
            }
        }

        test: sanityIndexPage {
            testimonial {
                image {
                    asset {
                        fluid(maxWidth: 300) {
                            ...GatsbySanityImageFluid
                        }
                    }
                }
                quote
            }
        }
    }
`;

export default function IndexPage({ data }) {
    const { crimsonBgImage, hero, intro } = data;
    return (
        <Layout>
            <Hero content={hero} />
            <Intro content={intro} image={crimsonBgImage} />
        </Layout>
    );
}

IndexPage.propTypes = {
    data: PropTypes.shape({
        crimsonBgImage: PropTypes.object.isRequired,
        hero: PropTypes.object.isRequired,
        intro: PropTypes.object.isRequired,
    }).isRequired,
};
