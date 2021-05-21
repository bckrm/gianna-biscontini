import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { imageUrlFor, buildImageObj } from '../helpers/buildImageObj';

export default function SEO({ data }) {
    const {
        seo: { pageTitle, pageDescription, ogDescription, ogImage },
    } = data;

    const imageSrcUrl = imageUrlFor(buildImageObj(ogImage))
        .width(1200)
        .height(Math.floor(630))
        .fit('crop')
        .auto('format')
        .url();

    return (
        <Helmet
            htmlAttributes={{
                lang: 'en',
            }}
            title={pageTitle}
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
                {
                    name: `twitter:title`,
                    content: pageTitle,
                },
                {
                    name: `twitter:description`,
                    content: ogDescription || pageDescription,
                },
            ]
                .concat(
                    ogImage
                        ? [
                              {
                                  property: 'og:image',
                                  content: imageSrcUrl,
                              },
                              {
                                  name: 'twitter:card',
                                  content: 'summary_large_image',
                              },
                          ]
                        : [
                              {
                                  name: 'twitter:card',
                                  content: 'summary',
                              },
                          ],
                )
                .concat()}
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
