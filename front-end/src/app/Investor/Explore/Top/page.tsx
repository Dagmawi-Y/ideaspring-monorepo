// pages/explore-projects.js
import Image from 'next/image';
import "./style.css"
const ExploreProjects = () => {
  return (
    <div className="containerf">
      <Image 
        src="/maunt.jpg" // Make sure to place your background image in the public directory
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="background"
      />
      <div className="contentf">
        <h2>Explore projects</h2>
        <p>18 diverse sectors. Thousands of great investment opportunities.</p>
      </div>
    </div>
  );
};

export default ExploreProjects;