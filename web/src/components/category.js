import React from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';

import Img from 'gatsby-image';
import BlockText from './block-content/blockText';

export default function Category({ data, isActive }) {
    const {
        id,
        image: {
            asset: { fluid: imageData },
        },
        title,
        _rawDescription,
    } = data;
    return (
        <AnimatePresence>
            {isActive && (
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-10"
                    key={id}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{
                        duration: 0.3,
                        ease: [0.04, 0.62, 0.23, 0.98],
                    }}
                >
                    <div className="block-content text-xl">
                        <h2 className="w-full lg:max-w-[75%] mb-8 text-h3 text-brand-1">
                            {title}
                        </h2>
                        <BlockText
                            blocks={_rawDescription}
                            className="testing"
                        />
                    </div>
                    <Img fluid={imageData} />
                </motion.div>
            )}
        </AnimatePresence>
    );
}

Category.propTypes = {
    data: PropTypes.object.isRequired,
    isActive: PropTypes.bool.isRequired,
};
