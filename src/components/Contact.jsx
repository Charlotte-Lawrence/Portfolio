import React, { memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const emailLink = 'mailto:chyneekee01@gmail.com';
  const linkedinLink = "https://www.linkedin.com/in/charlotte-c-lawrence";

  return (
    <section id="contact" aria-labelledby="contact-heading">
      <div className="contact-section">
        <h2 id="contact-heading">Contact</h2>
        <a href={emailLink} aria-label="Email">
          <button className="contact-button" title="Email">
            <FontAwesomeIcon icon={faEnvelope} />
          </button>
        </a>

        <a href={linkedinLink} aria-label="LinkedIn">
          <button className="contact-button" title="LinkedIn">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </button>
        </a>
      </div>
    </section>
  );
}

export default memo(Contact);
