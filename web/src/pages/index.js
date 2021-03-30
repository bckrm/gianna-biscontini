import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../layouts/layout';
import Hero from '../components/index/hero';
import Intro from '../components/index/intro';
import Testimonial from '../components/testimonial';
import Media from '../components/index/media';
import Blog from '../components/index/blog';

export const query = graphql`
    fragment SanityImage on SanityMainImage {
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
                id
                mediaType
                link
                title
            }
        }

        mediaItems: allSanityMediaItem {
            edges {
                node {
                    description
                    id
                    link
                    mediaType
                    title
                }
            }
        }

        rawPosts: allSanityPost(
            sort: { fields: publishDate, order: DESC }
            limit: 7
        ) {
            edges {
                node {
                    excerpt
                    id
                    publishDate
                    slug {
                        current
                    }
                    title
                    mainImage {
                        ...SanityImage
                        alt
                    }
                }
            }
        }

        crimsonBgImage: file(relativePath: { regex: "/crimsonBgRect/" }) {
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
        mediaItems: { edges: mediaItems },
        rawPosts,
        testimonial,
    } = data;

    return (
        <Layout>
            <Hero content={hero} />
            <Intro content={intro} image={crimsonBgImage} />
            <Testimonial data={testimonial} />
            <Media data={media} mediaItems={mediaItems} image={greenBgImage} />
            <Blog data={rawPosts} />
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
        mediaItems: PropTypes.object.isRequired,
        rawPosts: PropTypes.array.isRequired,
        testimonial: PropTypes.object.isRequired,
    }).isRequired,
};
