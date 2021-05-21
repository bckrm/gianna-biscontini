import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from './layout';
import BlogPost from '../components/blog/blogPost';
import SEO from '../components/seo';

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

    query BlogPostTemplateQuery($id: String!) {
        post: sanityPost(id: { eq: $id }) {
            id
            publishDate
            mainImage {
                asset {
                    fluid(maxWidth: 500) {
                        ...GatsbySanityImageFluid
                    }
                }
            }
            title
            slug {
                current
            }
            excerpt
            _rawBody(resolveReferences: { maxDepth: 5 })
        }

        seoData: sanityPost(id: { eq: $id }) {
            excerpt
            mainImage {
                ...SanityImage
            }
            title
        }
    }
`;

export default function BlogPostLayout({ data }) {
    const { post, seoData } = data;

    const { excerpt, mainImage, title } = seoData;

    const seo = {
        seo: {
            ogImage: mainImage,
            pageTitle: title,
            pageDescription: excerpt,
        },
    };

    return (
        <Layout logoColor="var(--brand-1)">
            <SEO data={seo} />
            <BlogPost data={post} />
        </Layout>
    );
}

BlogPostLayout.propTypes = {
    data: PropTypes.object.isRequired,
};
