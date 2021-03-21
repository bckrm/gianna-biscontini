import React, { useState } from 'react';
import PropTypes from 'prop-types';

import LeadershipIcon from './svgs/leadership';
import LifeIcon from './svgs/life';
import TeamIcon from './svgs/team';

import Category from './category';

export default function Categories({ data, options }) {
    const { navItems } = options;
    const { categories } = data;
    const [activeTab, setActiveTab] = useState(categories[0].id);

    return (
        <section className="container mb-80">
            <ul className="grid grid-cols-3 mb-28">
                {navItems.map((item) => {
                    return (
                        <li
                            className={`items-center flex flex-col justify-between ${
                                item.id === activeTab ? '' : 'text-gray'
                            }`}
                            key={item.id}
                        >
                            {item.icon === 'leadership' && <LeadershipIcon />}
                            {item.icon === 'life' && <LifeIcon />}
                            {item.icon === 'team' && <TeamIcon />}
                            <button
                                className="font-semibold text-h4 leading-none max-w-[75%] mt-8 text-current"
                                type="button"
                                onClick={() => setActiveTab(item.id)}
                            >
                                {item.navItem}
                            </button>
                        </li>
                    );
                })}
            </ul>
            {categories.map((item) => {
                return (
                    <Category data={item} isActive={item.id === activeTab} />
                );
            })}
        </section>
    );
}

Categories.propTypes = {
    data: PropTypes.object.isRequired,
    options: PropTypes.object.isRequired,
};
