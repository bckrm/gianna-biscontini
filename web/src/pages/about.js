import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../layouts/layout';
import Hero from '../components/hero';
import Credentials from '../components/credentialsIntro';
import Testimonial from '../components/testimonial';
import CTA from '../components/cta';

export const query = graphql`
    query AboutPage {
        hero: sanityAboutPage {
            pageTitle
            _rawHeading
        }

        credentials: sanityAboutPage {
            credentialImage {
                asset {
                    fluid(maxWidth: 500) {
                        ...GatsbySanityImageFluid
                    }
                }
            }
            introHeading
            credentials {
                id
                institution
                name
                date
            }
        }

        testimonial: sanityAboutPage {
            testimonial {
                name
                description
                quote
                image {
                    asset {
                        fluid(maxWidth: 500) {
                            ...GatsbySanityImageFluid
                        }
                    }
                }
            }
        }

        cta: sanityAboutPage {
            cta {
                body
                heading
                link {
                    link {
                        ... on SanityAboutPage {
                            pageTitle
                        }
                        ... on SanityCoachingPage {
                            pageTitle
                        }
                        ... on SanityContactPage {
                            pageTitle
                        }
                        ... on SanityIndexPage {
                            pageTitle
                        }
                        ... on SanitySpeakingPage {
                            pageTitle
                        }
                    }
                    linkText
                }
            }
        }

        mustardBgImage: file(relativePath: { regex: "/mustardBg/" }) {
            id
            childImageSharp {
                fluid(maxWidth: 2000) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;

export default function AboutPage({ data, location }) {
    const { credentials, cta, hero, mustardBgImage, testimonial } = data;

    return (
        <Layout>
            <Hero background={mustardBgImage} data={hero} location={location} />
            <Credentials data={credentials} />
            <Testimonial data={testimonial} />
            <CTA data={cta} />
        </Layout>
    );
}

AboutPage.propTypes = {
    data: PropTypes.shape({
        cta: PropTypes.object.isRequired,
        credentials: PropTypes.object.isRequired,
        hero: PropTypes.object.isRequired,
        mustardBgImage: PropTypes.object.isRequired,
        testimonial: PropTypes.object.isRequired,
    }).isRequired,
    location: PropTypes.object.isRequired,
};
