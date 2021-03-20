import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../layouts/layout';
import Hero from '../components/index/hero';
import Intro from '../components/index/intro';
import Testimonial from '../components/testimonial';
import Media from '../components/index/media';

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

        testimonial: sanityIndexPage {
            testimonial {
                image {
                    asset {
                        fluid(maxWidth: 300, maxHeight: 300) {
                            ...GatsbySanityImageFluid
                        }
                    }
                }
                quote
            }
        }

        media: sanityIndexPage {
            mediaHeading
            mediaSubHeading
            mediaImage {
                asset {
                    fluid(maxWidth: 400) {
                        ...GatsbySanityImageFluid
                    }
                }
            }
            featuredMediaItem {
                description
                mediaType
                link
                title
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

        greenBgImage: file(relativePath: { regex: "/greenBg/" }) {
            id
            childImageSharp {
                fluid(maxWidth: 2000) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;

export default function IndexPage({ data }) {
    const {
        crimsonBgImage,
        greenBgImage,
        hero,
        intro,
        media,
        testimonial,
    } = data;

    return (
        <Layout>
            <Hero content={hero} />
            <Intro content={intro} image={crimsonBgImage} />
            <Testimonial data={testimonial} />
            <Media data={media} image={greenBgImage} />
        </Layout>
    );
}

IndexPage.propTypes = {
    data: PropTypes.shape({
        crimsonBgImage: PropTypes.object.isRequired,
        greenBgImage: PropTypes.object.isRequired,
        hero: PropTypes.object.isRequired,
        intro: PropTypes.object.isRequired,
        media: PropTypes.object.isRequired,
        testimonial: PropTypes.object.isRequired,
    }).isRequired,
};
