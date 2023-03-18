import React from 'react';

function MyPortfolio({project}) {

  
    return (
        <div>
            <h1>{project.name}</h1>
            <h2>{project.description}</h2>
            <h3>{project.tech}</h3>
            <h4>{project.github}</h4>
        </div>
    );
}

export default MyPortfolio;