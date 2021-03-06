import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../layouts/layout';
import Hero from '../components/hero';
import FeaturedBlogIntro from '../components/featuredBlogIntro';
import BlogPreview from '../components/blog/blogPreview';
import Seo from '../components/seo';

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

    query WritingPage {
        hero: sanityWritingPage {
            pageTitle
        }

        featPost: sanityWritingPage {
            _rawHeading
            post: featuredPost {
                excerpt
                id
                title
                slug {
                    current
                }
            }
        }

        allPosts: allSanityPost(sort: { fields: publishDate, order: DESC }) {
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

        plumBgImage: file(relativePath: { regex: "/crimsonBg/" }) {
            id
            childImageSharp {
                fluid(maxWidth: 2000) {
                    ...GatsbyImageSharpFluid
                }
            }
        }

        seo: sanityWritingPage {
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

export default function WritingPage({ data, location }) {
    const {
        featPost: { _rawHeading, post },
        hero,
        plumBgImage,
        allPosts: { edges },
        seo,
    } = data;

    // Todo change to reduce()
    const posts = edges
        .map((item) => item.node)
        .sort((a, b) => Date.parse(b.publishDate) - Date.parse(a.publishDate));

    const featuredPost = post.length > 0 ? post[0] : posts[0];

    const filteredPosts = posts.filter((item) => item.id !== featuredPost.id);

    const introData = {
        _rawHeading,
        featuredPost,
    };

    return (
        <Layout>
            <Seo data={seo} />
            <Hero background={plumBgImage} data={hero} location={location} />
            <FeaturedBlogIntro data={introData} />
            <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-28">
                {filteredPosts.map((post) => {
                    return <BlogPreview data={post} />;
                })}
            </div>
        </Layout>
    );
}

WritingPage.propTypes = {
    data: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
};
