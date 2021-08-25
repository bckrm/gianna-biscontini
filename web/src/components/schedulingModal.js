import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { openPopupWidget } from 'react-calendly';
import Modal from 'react-modal';
import Img from 'gatsby-image';
import { VscChromeClose } from 'react-icons/vsc';

export default function SchedulingModal() {
    const data = useStaticQuery(graphql`
        query {
            sanityModal {
                body
                ctaText
                heading
                url
                utmData {
                    campaign
                    content
                    medium
                    source
                    term
                }
            }
            modalBg: file(relativePath: { regex: "/modalBg/" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    const {
        modalBg: {
            childImageSharp: { fluid: imageData },
        },
        sanityModal: { body, ctaText, heading, url, utm },
    } = data;
    const [isModalOpen, setIsModalOpen] = useState(true);
    const preFill = {};
    const pageSettings = {};

    const closeModal = () => setIsModalOpen(false);
    const onClick = () => {
        closeModal();
        openPopupWidget({ url, preFill, pageSettings, utm });
    };

    const modalStyles = {
        content: {
            bottom: 'auto',
            left: '50%',
            marginRight: '-50%',
            padding: 0,
            right: 'auto',
            top: '50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    return (
        <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            style={modalStyles}
        >
            <VscChromeClose
                className="absolute bg-transparent h-8 right-4 text-white top-4 w-8 z-[100] hover:cursor-pointer"
                onClick={closeModal}
            />
            <Img fluid={imageData} />
            <p className="absolute font-bold font-display py-8 px-12 text-center text-h3 text-white transform top-0 left-1/2 -translate-x-1/2 w-full">
                {heading}
            </p>
            <div className="p-12 pt-0 max-w-prose">
                <p className="pb-10 leading-normal text-center text-xl">
                    {body}
                </p>
                <button
                    className="block m-[auto] link relative text-xl text-center uppercase w-[fit-content]"
                    onClick={onClick}
                    type="button"
                >
                    {ctaText}
                </button>
            </div>
        </Modal>
    );
}
