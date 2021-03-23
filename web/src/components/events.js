import React from 'react';
import PropTypes from 'prop-types';

export default function Events({ data }) {
    const {
        eventHeading: { eventsHeading },
        events: { edges: rawEvents },
        featuredEvents: { events: rawFeaturedEvents },
    } = data;

    const events = rawEvents.map((item) => item.node);

    const filteredArray = events
        .filter(({ id: id1 }) => {
            return !rawFeaturedEvents.some(({ id: id2 }) => id2 === id1);
        })
        .sort((a, b) => {
            return Date.parse(b.date) - Date.parse(a.date);
        })
        .slice(0, 6 - rawFeaturedEvents.length);

    const displayedEvents = [...rawFeaturedEvents, ...filteredArray].sort(
        (a, b) => Date.parse(b.date) - Date.parse(a.date),
    );

    const formatDate = (datestring) => {
        const options = {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
        };
        return new Date(datestring).toLocaleDateString(undefined, options);
    };

    return (
        <section className="container mb-60">
            <h2 className="font-semibold font-body mb-4 text-brand-2 text-h4 tracking-[.115rem] uppercase">
                {eventsHeading}
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {displayedEvents.map((item) => {
                    return (
                        <li>
                            <p className="font-display font-normal mb-4 text-h6 leading-none">
                                {item.name}
                            </p>
                            <p className="text-xl">
                                {formatDate(item.date)} | {item.location}
                            </p>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}

Events.propTypes = {
    data: PropTypes.object.isRequired,
};
