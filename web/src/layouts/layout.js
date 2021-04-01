import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import { createGlobalStyle } from 'styled-components';

import Header from '../components/header';
import Footer from '../components/footer';

import '@fontsource/abril-fatface';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/600.css';

const GlobalStyles = createGlobalStyle`
    :root {
        --white: #ffffff;
        --black: #000000;
    } 
    
    body {
        font-family: 'Montserrat', sans-serif;
    }

    h1, h2, h3, h4 {
        font-family: 'Abril Fatface';
    }
`;

export default function Layout({ children, logoColor }) {
    const data = useStaticQuery(
        graphql`
            query sanitySettings {
                footerData: sanitySettings {
                    footerImage {
                        asset {
                            fluid(maxWidth: 500) {
                                ...GatsbySanityImageFluid
                            }
                        }
                    }
                    socialAccounts {
                        accountName
                        accountUrl
                        id
                    }
                }
            }
        `,
    );

    const { footerData } = data;
    return (
        <>
            <GlobalStyles />
            <Header logoColor={logoColor} />
            <main>{children}</main>
            <Footer data={footerData} />
        </>
    );
}

Layout.defaultProps = {
    logoColor: 'var(--white)',
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    logoColor: PropTypes.string,
};
