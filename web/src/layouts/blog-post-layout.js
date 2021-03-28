import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from './layout';
import BlogPost from '../components/blog/blogPost';

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
    return (
        <Layout logoColor="var(--brand-1)">
            <BlogPost data={post} />
        </Layout>
    );
}

BlogPostLayout.propTypes = {
    data: PropTypes.object.isRequired,
};
