import React from 'react';
import PropTypes from 'prop-types';
import {
    FaFacebookSquare,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
} from 'react-icons/fa';

import { Link } from 'gatsby';
import Img from 'gatsby-image';
import CurvedDivider from './svgs/curvedDivider';

export default function Footer({ data }) {
    const {
        footerImage: {
            asset: { fluid: imageData },
        },
        socialAccounts,
    } = data;

    return (
        <footer className="bg-brand-1 py-12">
            <div className="container flex flex-col items-center">
                <Link className="mb-2 w-full md:w-1/4" to="/">
                    <Img fluid={imageData} />
                </Link>
                <CurvedDivider />
                <div className="flex justify-evenly items-center mt-2 w-full md:w-1/4">
                    {socialAccounts.map((item) => {
                        const { accountName, accountUrl, id } = item;

                        const socialIcons = {
                            Facebook: (
                                <FaFacebookSquare className="h-full w-full" />
                            ),
                            Instagram: (
                                <FaInstagram className="h-full w-full" />
                            ),
                            Linkedin: (
                                <FaLinkedinIn className="h-full w-full" />
                            ),
                            Twitter: <FaTwitter className="h-full w-full" />,
                        };

                        return (
                            <a
                                className="text-white w-8 h-8"
                                href={accountUrl}
                                key={id}
                            >
                                {socialIcons[accountName]}
                            </a>
                        );
                    })}
                </div>
            </div>
        </footer>
    );
}

Footer.propTypes = {
    data: PropTypes.shape({
        footerImage: PropTypes.object.isRequired,
        socialAccounts: PropTypes.array.isRequired,
    }).isRequired,
};
