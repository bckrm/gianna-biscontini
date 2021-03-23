import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../layouts/layout';
import Hero from '../components/hero';
import Events from '../components/events';
import Media from '../components/media';
import Testimonial from '../components/testimonial';
import CTA from '../components/cta';

export const query = graphql`
    query SpeakingPage {
        hero: sanitySpeakingPage {
            heading
            pageTitle
            heroImage {
                asset {
                    fluid(maxWidth: 500) {
                        ...GatsbySanityImageFluid
                    }
                }
            }
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

        mediaItems: allSanityMediaItem(limit: 4) {
            edges {
                node {
                    description
                    id
                    link
                    mediaType
                    pubDate
                    title
                }
            }
        }

        testimonial: sanitySpeakingPage {
            testimonial {
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
                        ... on SanityCoachingPage {
                            pageTitle
                        }
                        ... on SanityIndexPage {
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
    }
`;

export default function SpeakingPage({ data }) {
    const {
        cta,
        eventHeading,
        events,
        featuredEvents,
        greenBgImage,
        hero,
        mediaHeading,
        mediaItems,
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
            <Hero background={greenBgImage} data={hero} />
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
        testimonial: PropTypes.object.isRequired,
    }).isRequired,
};
