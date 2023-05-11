import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    
    <div className="content-container">
   
    <footer className="bg-blue-900 text-white py-6 fixed bottom-0 inset-x-0 mt-25">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <p className="mx-2">
            Matthew Lui ©2023 -
          </p>
          <div>
          <a
            href="https://www.linkedin.com/in/lui-matthewm/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-300"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <a
            href="https://github.com/matthew-lui"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-300 ml-4"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
        </div>
        </div>
      </div>
    </footer>
      </div>
  );
}

export default Footer;