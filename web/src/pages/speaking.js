import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../layouts/layout';
import Hero from '../components/hero';
import Events from '../components/events';
import Media from '../components/media';
import Testimonial from '../components/testimonial';
import CTA from '../components/cta';
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

    query SpeakingPage {
        hero: sanitySpeakingPage {
            pageTitle
            heroImage {
                asset {
                    fluid(maxWidth: 500) {
                        ...GatsbySanityImageFluid
                    }
                }
            }
            _rawHeading
        }

        eventHeading: sanitySpeakingPage {
            eventsHeading
        }

        featuredEvents: sanitySpeakingPage {
            events {
                date
                id
                location
                name
            }
        }

        events: allSanityEvents(limit: 12) {
            edges {
                node {
                    date
                    id
                    location
                    name
                }
            }
        }

        mediaHeading: sanitySpeakingPage {
            mediaHeading
        }

        mediaItems: sanitySpeakingPage {
            featuredMedia {
                description
                id
                link
                mediaType
                pubDate
                title
            }
        }

        testimonial: sanitySpeakingPage {
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

        cta: sanitySpeakingPage {
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

        greenBgImage: file(relativePath: { regex: "/greenHeroBg/" }) {
            id
            childImageSharp {
                fluid(maxWidth: 2000) {
                    ...GatsbyImageSharpFluid
                }
            }
        }

        seo: sanitySpeakingPage {
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

export default function SpeakingPage({ data, location }) {
    const {
        cta,
        eventHeading,
        events,
        featuredEvents,
        greenBgImage,
        hero,
        mediaHeading,
        mediaItems,
        seo,
        testimonial,
    } = data;

    const eventData = {
        eventHeading,
        events,
        featuredEvents,
    };

    const mediaData = {
        mediaHeading,
        mediaItems,
    };

    return (
        <Layout>
            <Seo data={seo} />
            <Hero background={greenBgImage} data={hero} location={location} />
            <Events data={eventData} />
            <Media data={mediaData} />
            <Testimonial data={testimonial} />
            <CTA data={cta} color="brand-2" />
        </Layout>
    );
}

SpeakingPage.propTypes = {
    data: PropTypes.shape({
        cta: PropTypes.object.isRequired,
        eventHeading: PropTypes.string.isRequired,
        events: PropTypes.object.isRequired,
        featuredEvents: PropTypes.object.isRequired,
        greenBgImage: PropTypes.object.isRequired,
        hero: PropTypes.object.isRequired,
        mediaHeading: PropTypes.string.isRequired,
        mediaItems: PropTypes.object.isRequired,
        seo: PropTypes.object.isRequired,
        testimonial: PropTypes.object.isRequired,
    }).isRequired,
    location: PropTypes.object.isRequired,
};
