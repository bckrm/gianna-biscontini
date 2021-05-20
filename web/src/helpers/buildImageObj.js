import imageUrlBuilder from '@sanity/image-url';

import clientConfig from '../../client-config';

const builder = imageUrlBuilder(clientConfig.sanity);

function imageUrlFor(source) {
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

export { imageUrlFor, buildImageObj };
