import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../layouts/layout';
import Hero from '../components/hero';
import Intro from '../components/intro';
import Categories from '../components/categories';
import Testimonial from '../components/testimonial';
import CTA from '../components/cta';

export const query = graphql`
    query CoachingPage {
        hero: sanityCoachingPage {
            heading
            pageTitle
        }

        intro: sanityCoachingPage {
            introHeading
            introBody
            introImage {
                asset {
                    fluid(maxWidth: 400) {
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
                        fluid(maxWidth: 400) {
                            ...GatsbySanityImageFluid
                        }
                    }
                }
            }
        }

        testimonial: sanityCoachingPage {
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

        cta: sanityCoachingPage {
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

        plumBgImage: file(relativePath: { regex: "/plumBg/" }) {
            id
            childImageSharp {
                fluid(maxWidth: 2000) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;

export default function CoachingPage({ data }) {
    const {
        categories,
        categoryOptions,
        cta,
        hero,
        intro,
        plumBgImage,
        testimonial,
    } = data;
    return (
        <Layout>
            <Hero background={plumBgImage} data={hero} />
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
        testimonial: PropTypes.object.isRequired,
    }).isRequired,
};
