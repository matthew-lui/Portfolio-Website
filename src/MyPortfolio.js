import React from 'react';

function MyPortfolio({ project }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{project.name}</h1>
      <h2 className="text-2xl font-semibold mb-2">{project.description}</h2>
      <h3 className="text-xl font-medium mb-1">{project.tech}</h3>
      <h4 className="text-lg font-normal">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700"
        >
          View on GitHub
        </a>
      </h4>
    </div>
  );
}

export default MyPortfolio;