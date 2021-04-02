import React from 'react';

export default function IndexHero() {
    return (
        <svg
            className="hidden lg:block absolute right-0 top-0 transform translate-y-full z-[-1]"
            width="210"
            height="171"
            viewBox="0 0 210 171"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g>
                <circle
                    cx="106.5"
                    cy="85.5"
                    r="84.5"
                    stroke="#FFEAB4"
                    strokeWidth="2"
                />
            </g>
            <g>
                <circle
                    cx="187.5"
                    cy="85.5"
                    r="56.5"
                    stroke="#FFEAB4"
                    strokeWidth="2"
                />
            </g>
            <line y1="85" x2="210" y2="85" stroke="#FFEAB4" strokeWidth="2" />
        </svg>
    );
}
