import BaseBlockContent from '@sanity/block-content-to-react';
import React from 'react';
import PropTypes from 'prop-types';
import serializers from './serializers';

export default function BlockText({ blocks }) {
    return <BaseBlockContent blocks={blocks} serializers={serializers} />;
}

BlockText.propTypes = {
    blocks: PropTypes.array.isRequired,
};
