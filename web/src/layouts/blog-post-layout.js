import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from './layout';
import BlogPost from '../components/blog/blogPost';
import SEO from '../components/seo';

export const query = graphql`
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
    }
`;

// {post && (
//     <SEO
//         title={post.title || 'Untitled'}
//         description={toPlainText(post._rawExcerpt)}
//         image={post.mainImage}
//     />
// )}

export default function BlogPostLayout({ data }) {
    const { post } = data;

    const { title: pageTitle, excerpt: pageDescription } = post;

    const seo = {
        seo: {
            pageTitle,
            pageDescription,
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
