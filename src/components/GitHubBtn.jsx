import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const GitHubBtn = ({link}) => {

    return(
        <a href={link}>
            <button className="git-button" title="GitHub">
                <FontAwesomeIcon icon={faGithub} />
            </button>
        </a>
    );
}

export default GitHubBtn;