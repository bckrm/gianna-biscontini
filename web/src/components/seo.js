import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
// import { useStaticQuery, graphql } from 'gatsby';
//  description, lang, meta, title
export default function SEO({ data }) {
    const {
        seo: { pageTitle, pageDescription, ogDescription },
    } = data;
    // const { site } = useStaticQuery(
    //     graphql`
    //         query {
    //             site {
    //                 siteMetadata {
    //                     title
    //                     description
    //                 }
    //             }
    //         }
    //     `,
    // );

    // const metaDescription = description || site.siteMetadata.description;

    return (
        <Helmet
            htmlAttributes={{
                lang: 'en',
            }}
            title={pageTitle}
            // titleTemplate={`%s | ${site.siteMetadata.title}`}
            // titleTemplate={`${title}`}
            meta={[
                {
                    name: `description`,
                    content: pageDescription,
                },
                {
                    property: `og:title`,
                    content: pageTitle,
                },
                {
                    property: `og:description`,
                    content: ogDescription || pageDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:card`,
                    content: ogDescription || pageDescription,
                },
                // {
                //     name: `twitter:creator`,
                //     content: site.siteMetadata.author,
                // },
                {
                    name: `twitter:title`,
                    content: pageTitle,
                },
                {
                    name: `twitter:description`,
                    content: ogDescription || pageDescription,
                },
            ].concat()}
        />
    );
}

// SEO.defaultProps = {
//     lang: 'en',
//     meta: [],
//     description: '',
// };

SEO.propTypes = {
    data: PropTypes.shape({
        seo: PropTypes.shape({
            ogDescription: PropTypes.string,
            ogImage: PropTypes.object,
            pageDescription: PropTypes.string.isRequired,
            pageTitle: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
};
