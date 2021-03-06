import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import Mark from './logos/mark';
import MainNav from './nav/mainNav';
import MobilNav from './nav/mobileNav';

const nav = [
    {
        name: 'coaching',
        link: '/coaching',
    },
    {
        name: 'speaking',
        link: '/speaking',
    },
    {
        name: 'writing',
        link: '/writing',
    },
    {
        name: 'about',
        link: '/about',
    },
    {
        name: 'contact',
        link: '/contact',
    },
];

export default function Header({ logoColor }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 10) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    const handleNavToggle = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    const scrolledNavStyles = isScrolled ? 'bg-white' : 'bg-transparent';

    return (
        <nav
            className={`fixed py-8 top-0 transition-colors w-full z-10 ${scrolledNavStyles}`}
            isScrolled={isScrolled}
        >
            <div className="container flex justify-between mx-auto text-black">
                <Link href="/">
                    <Mark isScrolled={isScrolled} logoColor={logoColor} />
                </Link>
                <MobilNav
                    handleNavToggle={handleNavToggle}
                    isMobileNavOpen={isMobileNavOpen}
                    isScrolled={isScrolled}
                    navItems={nav}
                />
                <MainNav navItems={nav} />
            </div>
        </nav>
    );
}

Header.defaultProps = {
    logoColor: 'var(--white)',
};

Header.propTypes = {
    logoColor: PropTypes.string,
};
