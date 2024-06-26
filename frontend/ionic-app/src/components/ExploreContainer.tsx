import './ExploreContainer.css';
import React from 'react';

interface ContainerProps {
}

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <p>Start with Ionic <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
    </div>
  );
};

export default ExploreContainer;
