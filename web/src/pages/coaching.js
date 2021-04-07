import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../layouts/layout';
import Hero from '../components/hero';
import Intro from '../components/intro';
import Categories from '../components/categories';
import Testimonial from '../components/testimonial';
import CTA from '../components/cta';
import Seo from '../components/seo';

export const query = graphql`
    query CoachingPage {
        hero: sanityCoachingPage {
            pageTitle
            _rawHeading
        }

        intro: sanityCoachingPage {
            introHeading
            introBody
            introImage {
                asset {
                    fluid(maxWidth: 1200) {
                        ...GatsbySanityImageFluid
                    }
                }
            }
        }

        categoryOptions: sanityCoachingPage {
            navItems: categories {
                id
                icon
                navItem
            }
        }

        categories: sanityCoachingPage {
            categories {
                id
                title
                _rawDescription
                image {
                    asset {
                        fluid(maxWidth: 1200) {
                            ...GatsbySanityImageFluid
                        }
                    }
                }
            }
        }

        testimonial: sanityCoachingPage {
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

        cta: sanityCoachingPage {
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

        plumBgImage: file(relativePath: { regex: "/crimsonBg/" }) {
            id
            childImageSharp {
                fluid(maxWidth: 2000) {
                    ...GatsbyImageSharpFluid
                }
            }
        }

        seo: sanityAboutPage {
            seo {
                ogDescription
                ogImage {
                    asset {
                        fixed(width: 600) {
                            src
                        }
                    }
                }
                pageDescription
                pageTitle
            }
        }
    }
`;

export default function CoachingPage({ data, location }) {
    const {
        categories,
        categoryOptions,
        cta,
        hero,
        intro,
        plumBgImage,
        seo,
        testimonial,
    } = data;
    return (
        <Layout>
            <Seo data={seo} />
            <Hero background={plumBgImage} data={hero} location={location} />
            <Intro data={intro} />
            <Categories data={categories} options={categoryOptions} />
            <Testimonial data={testimonial} />
            <CTA data={cta} />
        </Layout>
    );
}

CoachingPage.propTypes = {
    data: PropTypes.shape({
        categories: PropTypes.object.isRequired,
        categoryOptions: PropTypes.object.isRequired,
        cta: PropTypes.object.isRequired,
        hero: PropTypes.object.isRequired,
        intro: PropTypes.object.isRequired,
        plumBgImage: PropTypes.object.isRequired,
        seo: PropTypes.object.isRequired,
        testimonial: PropTypes.object.isRequired,
    }).isRequired,
    location: PropTypes.object.isRequired,
};
