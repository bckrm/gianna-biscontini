import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

export default function MainNav({ navItems }) {
    return (
        <ul className="hidden lg:flex flex-row items-center font-bold leading-5 justify-between self-center uppercase">
            {navItems.map((item) => {
                return (
                    <li className="ml-8 text-xl" key={item.link}>
                        <Link
                            className="relative hover:nav-link-hover"
                            to={`${item.link}`}
                            getProps={({ isPartiallyCurrent }) => {
                                return isPartiallyCurrent
                                    ? { className: 'relative nav-link-active' }
                                    : null;
                            }}
                        >
                            {item.name}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}

MainNav.propTypes = {
    navItems: PropTypes.array.isRequired,
};
