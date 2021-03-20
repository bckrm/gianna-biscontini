import React from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';

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

export default function Layout({ children }) {
    return (
        <>
            <GlobalStyles />
            <main>{children}</main>
        </>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};
