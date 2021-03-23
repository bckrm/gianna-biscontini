import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
// import tw from 'twin.macro';
import { Link } from 'gatsby';

export default function InternalLink({ data }) {
    const {
        link: { pageTitle },
        linkText,
    } = data;

    const link = pageTitle.toLowerCase();

    return (
        <Link
            className="link relative text-[28px] tracking-[.195rem] uppercase"
            style={{ lineHeight: '90%' }}
            to={`/${link}`}
        >
            {linkText}
        </Link>
    );
}

InternalLink.propTypes = {
    data: PropTypes.object.isRequired,
};
