import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { openPopupWidget } from 'react-calendly';
import Modal from 'react-modal';
import Img from 'gatsby-image';
import { VscChromeClose } from 'react-icons/vsc';

export default function SchedulingModal({ image }) {
    const {
        childImageSharp: { fluid: imageData },
    } = image;
    const [isModalOpen, setIsModalOpen] = useState(true);

    const closeModal = () => setIsModalOpen(false);

    const onClick = () => {
        closeModal();
        openPopupWidget({ url: 'http://calendly.com/giannabiscontini' });
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
                30 minutes for $30
            </p>
            <div className="p-12 pt-0 max-w-prose">
                <p className="pb-10 leading-normal text-center text-xl">
                    Interested in experiencing what its like to work with me?
                    Schedule a mini-session for only $30
                </p>
                <button
                    className="block m-[auto] link relative text-xl text-center uppercase w-[fit-content]"
                    onClick={onClick}
                    type="button"
                >
                    book now
                </button>
            </div>
        </Modal>
    );
}

SchedulingModal.propTypes = {
    image: PropTypes.object.isRequired,
};
