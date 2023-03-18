import React from 'react';
import MyPortfolio from './MyPortfolio';

function PortfolioContainer({projects}) {
    console.log(projects);
    return (
        <div>

            {
            projects.map((project) => <MyPortfolio key={project.id} project={project} />)

            }
            
        </div>
    );
}

export default PortfolioContainer;