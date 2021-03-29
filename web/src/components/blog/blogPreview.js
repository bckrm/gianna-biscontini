import React from 'react';
import PropTypes from 'prop-types';
import imageUrlBuilder from '@sanity/image-url';
import { Link } from 'gatsby';
import formatDate from '../../helpers/dateFormatter';

import clientConfig from '../../../client-config';

const builder = imageUrlBuilder(clientConfig.sanity);

export function imageUrlFor(source) {
    return builder.image(source);
}

function buildImageObj(source = { asset: {} }) {
    const imageObj = {
        // eslint-disable-next-line no-underscore-dangle
        asset: { _ref: source.asset._ref || source.asset._id },
    };

    if (source.crop) imageObj.crop = source.crop;
    if (source.hotspot) imageObj.hotspot = source.hotspot;

    return imageObj;
}

export default function BlogPreview({ data, imageAspectRatio }) {
    return (
        <figure key={data.id}>
            <img
                className="mb-5"
                src={imageUrlFor(buildImageObj(data.mainImage))
                    .width(500)
                    .height(Math.floor(imageAspectRatio * 500))
                    .fit('crop')
                    .auto('format')
                    .url()}
                alt={data.mainImage.alt}
            />
            <h3 className="font-regular mb-2 text-[24px] text-brand-1 leading-none">
                {data.title}
            </h3>
            <p className="mb-2 leading-none">{formatDate(data.publishDate)}</p>

            <Link
                className="link relative tracking-[.195rem] uppercase"
                to={`/writing/${data.slug.current}`}
            >
                read
            </Link>
        </figure>
    );
}

BlogPreview.defaultProps = {
    imageAspectRatio: 1.0675,
};

BlogPreview.propTypes = {
    data: PropTypes.object.isRequired,
    imageAspectRatio: PropTypes.number,
};
