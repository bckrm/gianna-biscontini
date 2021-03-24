/* eslint-disable import/no-unresolved */
// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Document schemas
import aboutPage from './documents/aboutPage';
import coachingCategory from './documents/coachingCategory';
import coachingPage from './documents/coachingPage';
import credentials from './documents/credentials';
import event from './documents/events';
import indexPage from './documents/indexPage';
import internalLink from './documents/internalLink';
import mediaItem from './documents/mediaItem';
import speakingPage from './documents/speakingPage';
import testimonial from './documents/testimonial';

// Object schemas
import cta from './objects/cta';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
    // We name our schema
    name: 'default',
    // Then proceed to concatenate our document type
    // to the ones provided by any plugins that are installed
    types: schemaTypes.concat([
        // documents
        aboutPage,
        coachingCategory,
        coachingPage,
        credentials,
        event,
        indexPage,
        internalLink,
        mediaItem,
        speakingPage,
        testimonial,

        // objects
        cta,
    ]),
});
