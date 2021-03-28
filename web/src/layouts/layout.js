import React from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';

import Header from '../components/header';

import 'fontsource-abril-fatface';
import 'fontsource-montserrat';

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
    return (
        <>
            <GlobalStyles />
            <Header logoColor={logoColor} />
            <main>{children}</main>
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
