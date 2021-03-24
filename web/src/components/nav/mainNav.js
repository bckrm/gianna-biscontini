import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

export default function MainNav({ navItems }) {
    return (
        <ul className="hidden md:flex flex-row items-center font-bold leading-5 justify-between self-center uppercase">
            {navItems.map((item) => {
                return (
                    <li className="ml-8 text-xl" key={item.link}>
                        <Link href={item.link}>{item.name}</Link>
                    </li>
                );
            })}
        </ul>
    );
}

MainNav.propTypes = {
    navItems: PropTypes.array.isRequired,
};
