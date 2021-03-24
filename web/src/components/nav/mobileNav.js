import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Link } from 'gatsby';

const NavButton = styled.button`
    ${tw`absolute flex flex-col justify-between md:hidden h-8 w-10 right-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10`}
`;

const StyledSpan = styled.span`
    ${tw`h-1 rounded-full transform-gpu transition transition-all duration-300 w-full origin-right`}
    background-color: ${({ isMobileNavOpen }) =>
        isMobileNavOpen ? 'black' : 'black'};
    &:nth-of-type(1) {
        transform: ${({ isMobileNavOpen }) =>
            isMobileNavOpen ? `rotate(-45deg)` : `rotate(0)`};
    }
    :nth-of-type(2) {
        opacity: ${({ isMobileNavOpen }) => (isMobileNavOpen ? `0` : `1`)};
        width: ${({ isMobileNavOpen }) => (isMobileNavOpen ? `0` : `100%`)};
    }
    :nth-of-type(3) {
        transform: ${({ isMobileNavOpen }) =>
            isMobileNavOpen ? `rotate(45deg)` : `rotate(0)`};
    }
`;

const UL = styled.ul`
    ${tw`absolute right-0 md:hidden min-h-screen w-max flex flex-col items-end transform-gpu transition pr-4 pt-32 top-0 text-right w-1/2`}
    transform: ${({ isMobileNavOpen }) =>
        isMobileNavOpen ? `translateX(0)` : `translateX(100%)`}
`;

const LI = styled.li`
    ${tw`capitalize font-bold ml-8 mb-10 transition-colors duration-700 ease-in-out relative text-xl`}
`;

export default function MobileNav({
    handleNavToggle,
    isMobileNavOpen,
    isScrolled,
    navItems,
}) {
    return (
        <>
            <NavButton type="button" onClick={handleNavToggle}>
                <StyledSpan
                    isMobileNavOpen={isMobileNavOpen}
                    isScrolled={isScrolled}
                />
                <StyledSpan
                    isMobileNavOpen={isMobileNavOpen}
                    isScrolled={isScrolled}
                />
                <StyledSpan
                    isMobileNavOpen={isMobileNavOpen}
                    isScrolled={isScrolled}
                />
            </NavButton>
            <UL isMobileNavOpen={isMobileNavOpen}>
                {navItems.map((item) => {
                    return (
                        <LI key={item.name}>
                            <Link to={item.link}>{item.name}</Link>
                        </LI>
                    );
                })}
            </UL>
        </>
    );
}

MobileNav.propTypes = {
    handleNavToggle: PropTypes.func.isRequired,
    isMobileNavOpen: PropTypes.bool.isRequired,
    isScrolled: PropTypes.bool.isRequired,
    navItems: PropTypes.array.isRequired,
};
