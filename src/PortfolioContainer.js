import React from 'react';
import MyPortfolio from './MyPortfolio';

function PortfolioContainer({projects}) {
    console.log(projects);
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-wrap justify-center">
            {
            projects.map((project) => <MyPortfolio key={project.id} project={project} />)

            }
            </div>
        </div>
    );
}

export default PortfolioContainer;