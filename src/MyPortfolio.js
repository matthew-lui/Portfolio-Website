import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function MyPortfolio({ project }) {
  return (
    <div className="container mx-auto px-4 py-15">
      <h1 className="text-2xl font-bold mb-4 text-center">{project.name}</h1>
      <h2 className="text-xl font-semibold mb-2 text-center">{project.description}</h2>
      <h3 className="text-l font-medium mb-1 text-center">{project.tech}</h3>
      <h4 className="text-l font-medium mb-1 text-center">{project.image_url}</h4>
      <h5 className="text-l font-medium mb-1 text-center">{project.loom}</h5>
      <div className="flex space-x-4 justify-center">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a
          href={project.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </div>
    </div>
  );
}

export default MyPortfolio;
