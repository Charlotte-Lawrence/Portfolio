import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

export default class Contact extends Component {
    render() {
    const emailLink = 'mailto:chyneekee01@gmail.com';
    const linkedinLink = "https://www.linkedin.com/in/charlotte-c-lawrence";
    return (
        <section id="contact">
            <div className="contact-section">
                <h2>Contact</h2>
                <a href={emailLink}>
                    <button className="contact-button" title="Email">
                        <FontAwesomeIcon icon={faEnvelope}/>
                    </button>
                </a>

                <a href={linkedinLink}>
                    <button className="contact-button" title="LinkedIn">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </button>
                </a>
            </div>
        </section>
    )}
}