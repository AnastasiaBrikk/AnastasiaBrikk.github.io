import React from 'react';

const AboutSection = () => {
  return (
    <div className="about-section">
      <div className="image-container">
        <img src="../images/master-photo.jpg" alt="Master Anna" className="master-photo" />
      </div>
      <div className="content">
        <h2 className="about-title">About Master</h2>
        <p className="about-description">
          Anna has been dedicated to the art of manicure and pedicure for over 5 years.
          Her passion for beauty and precision is evident in every service she provides. Anna holds
          several prestigious certifications and continuously hones her skills to stay at the forefront
          of the industry. With her extensive experience, Anna ensures that every client leaves with
          beautifully groomed nails and a smile on their face.
        </p>
        <p className="about-description">
          Whether you are looking for a classic manicure, a creative nail art design, or a luxurious
          pedicure, Master Anna is committed to delivering the highest quality service. Your satisfaction
          is her top priority.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;