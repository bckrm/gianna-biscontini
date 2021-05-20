import React from 'react';
import PropTypes from 'prop-types';
import { imageUrlFor, buildImageObj } from '../../helpers/buildImageObj';

export default function BlogBodyImage({ node }) {
    return (
        <img
            className="mb-5 w-3/4 mx-auto"
            src={imageUrlFor(buildImageObj(node))
                .width(800)
                .fit('crop')
                .auto('format')
                .url()}
            alt={node}
        />
    );
}

BlogBodyImage.propTypes = {
    node: PropTypes.object.isRequired,
};
