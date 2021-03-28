import React from 'react';

import { Link } from 'gatsby';
import FullMark from './logos/fullMark';
import CurvedDivider from './svgs/curvedDivider';
import LinkedinLogo from './svgs/linkedinLogo';
import InstagramLogo from './svgs/instagramLogo';

export default function Footer() {
    return (
        <footer className="bg-brand-1 py-12">
            <div className="flex flex-col items-center">
                <FullMark />
                <CurvedDivider />
                <div className="flex justify-between items-center w-20">
                    <Link to="/#">
                        <LinkedinLogo />
                    </Link>
                    <Link className="mt-1" to="/#">
                        <InstagramLogo />
                    </Link>
                </div>
            </div>
        </footer>
    );
}
