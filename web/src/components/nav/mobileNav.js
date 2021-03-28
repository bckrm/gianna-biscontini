import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

export default function MobileNav({
    handleNavToggle,
    isMobileNavOpen,
    isScrolled,
    navItems,
}) {
    const navActiveStyles = isMobileNavOpen
        ? 'translate-x-0'
        : 'translate-x-full';

    const firstSpanStyles = isMobileNavOpen ? '-rotate-45' : 'rotate-0';
    const secondSpanStyles = isMobileNavOpen
        ? 'opacity-0 w-0'
        : 'opacity-100 w-full';
    const thirdSpanStyles = isMobileNavOpen ? 'rotate-45' : 'rotate-0';

    return (
        <>
            <button
                className="absolute flex flex-col justify-between lg:hidden h-8 w-10 right-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10"
                type="button"
                onClick={handleNavToggle}
            >
                <span
                    className={`bg-black h-1 rounded-full transform-gpu transition transition-all duration-300 w-full origin-right ${firstSpanStyles}`}
                    isMobileNavOpen={isMobileNavOpen}
                    isScrolled={isScrolled}
                />
                <span
                    className={`bg-black h-1 rounded-full transform-gpu transition transition-all duration-300 w-full origin-right ${secondSpanStyles}`}
                    isMobileNavOpen={isMobileNavOpen}
                    isScrolled={isScrolled}
                />
                <span
                    className={`bg-black h-1 rounded-full transform-gpu transition transition-all duration-300 w-full origin-right ${thirdSpanStyles}`}
                    isMobileNavOpen={isMobileNavOpen}
                    isScrolled={isScrolled}
                />
            </button>
            <ul
                className={`absolute bg-white right-0 lg:hidden min-h-screen w-max flex flex-col items-end transform transform-gpu transition pr-4 pt-32 top-0 text-right w-1/2 ${navActiveStyles}`}
            >
                {navItems.map((item) => {
                    return (
                        <li
                            className="capitalize font-bold ml-8 mb-10 transition-colors duration-700 ease-in-out relative text-xl"
                            key={item.name}
                        >
                            <Link to={item.link}>{item.name}</Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

MobileNav.propTypes = {
    handleNavToggle: PropTypes.func.isRequired,
    isMobileNavOpen: PropTypes.bool.isRequired,
    isScrolled: PropTypes.bool.isRequired,
    navItems: PropTypes.array.isRequired,
};
