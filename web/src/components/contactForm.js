import React, { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState(null);
    const [isFormSubmitSuccessful, setIsFormSubmitSuccessful] = useState(false);

    const checkBoxInputStyles =
        'border-2 border-gray2 mr-4 h-6 text-brand-2 focus:ring-brand-2 w-6';
    const checkBoxLabelStyles =
        'flex flex-row-reverse justify-end items-center mb-4';
    const inputStyles =
        'border border-2 border-gray2 focus:border-brand-2 focus:ring-brand-2 p-2 mt-2 md:mr-4';
    const labelStyles = 'flex flex-col mb-4';

    const encode = (data) => {
        return Object.keys(data)
            .map(
                (key) =>
                    `${encodeURIComponent(key)}=${encodeURIComponent(
                        data[key],
                    )}`,
            )
            .join('&');
    };

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
                'form-name': form.getAttribute('name'),
                ...formData,
            }),
        })
            .then(() => setIsFormSubmitSuccessful(true))
            .catch((error) => error);
    };

    return (
        <div>
            {isFormSubmitSuccessful ? (
                <p className="block font-display text-h4 text-brand-2 ml-auto mb-10 lg:w-1/2">
                    Thank you
                </p>
            ) : (
                <form
                    className="md:mr-0 md:ml-auto lg:w-1/2"
                    method="post"
                    onSubmit={handleSubmit}
                    data-netlify="true"
                    name="contact"
                    netlify-honeypot="bot-field"
                >
                    <input className="hidden" name="bot-field" />
                    <input className="hidden" name="contact" value="contact" />
                    <div className="md:flex">
                        <label
                            className={`lg:w-1/2 ${labelStyles}`}
                            htmlFor="firstName"
                        >
                            First Name
                            <input
                                className={inputStyles}
                                id="firstName"
                                name="firstName"
                                onChange={handleChange}
                                type="text"
                            />
                        </label>
                        <label
                            className={`lg:w-1/2 ${labelStyles}`}
                            htmlFor="lastName"
                        >
                            Last Name
                            <input
                                className={inputStyles}
                                id="lastName"
                                name="lastName"
                                onChange={handleChange}
                                type="text"
                            />
                        </label>
                    </div>
                    <label className={labelStyles} htmlFor="email">
                        Email
                        <input
                            className={inputStyles}
                            id="email"
                            name="email"
                            onChange={handleChange}
                            type="email"
                        />
                    </label>
                    <label className={labelStyles} htmlFor="subject">
                        Subject
                        <input
                            className={inputStyles}
                            id="subject"
                            name="subject"
                            onChange={handleChange}
                            type="text"
                        />
                    </label>
                    <fieldset className="mb-4">
                        <legend className="mb-4 text-xl">Topic</legend>
                        <label
                            className={checkBoxLabelStyles}
                            htmlFor="speaking"
                        >
                            Speaking Request
                            <input
                                className={checkBoxInputStyles}
                                id="speaking"
                                name="speaking"
                                onChange={handleChange}
                                type="checkbox"
                            />
                        </label>
                        <label
                            className={checkBoxLabelStyles}
                            htmlFor="writing"
                        >
                            Writing Request
                            <input
                                className={checkBoxInputStyles}
                                id="writing"
                                name="writing"
                                onChange={handleChange}
                                type="checkbox"
                            />
                        </label>
                        <label
                            className={checkBoxLabelStyles}
                            htmlFor="individual-coaching"
                        >
                            Individual Wellbeing Coaching
                            <input
                                className={checkBoxInputStyles}
                                id="indvidual-coaching"
                                name="indvidual-coaching"
                                onChange={handleChange}
                                type="checkbox"
                            />
                        </label>
                        <label
                            className={checkBoxLabelStyles}
                            htmlFor="leadership-coaching"
                        >
                            Mindful Leadership Coaching
                            <input
                                className={checkBoxInputStyles}
                                id="leadership-coaching"
                                name="leadership-coaching"
                                onChange={handleChange}
                                type="checkbox"
                            />
                        </label>
                        <label
                            className={checkBoxLabelStyles}
                            htmlFor="organizational-analytics"
                        >
                            Organizational Analytics / Build a Culture of
                            Wellbeing
                            <input
                                className={checkBoxInputStyles}
                                id="organizational-analytics"
                                name="organizational-analytics"
                                onChange={handleChange}
                                type="checkbox"
                            />
                        </label>
                    </fieldset>
                    <label className={labelStyles} htmlFor="message">
                        Message
                        <textarea
                            className={inputStyles}
                            id="message"
                            name="message"
                            onChange={handleChange}
                            rows="10"
                        />
                    </label>
                    <button
                        className="link font-medium relative text-[18px] tracking-[.195rem] uppercase"
                        type="submit"
                    >
                        Let&apos;s Talk
                    </button>
                </form>
            )}
        </div>
    );
}
