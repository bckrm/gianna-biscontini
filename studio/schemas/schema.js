/* eslint-disable import/no-unresolved */
// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Document schemas
import coachingPage from './documents/coachingPage';
import indexPage from './documents/indexPage';
import internalLink from './documents/internalLink';
import mediaItem from './documents/mediaItem';
import testimonial from './documents/testimonial';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
    // We name our schema
    name: 'default',
    // Then proceed to concatenate our document type
    // to the ones provided by any plugins that are installed
    types: schemaTypes.concat([
        // documents
        coachingPage,
        indexPage,
        internalLink,
        mediaItem,
        testimonial,
    ]),
});
