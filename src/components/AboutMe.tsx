import { Container } from 'react-bootstrap';
import React from 'react';

const AboutMe: React.FC = () => (
  <section id='about' className='mb-5'>
    <Container>
      <h1>Welcome to My Portfolio</h1>
      <div className='row justifiy-content-start'>
        <div className='col-12 col-md-8'>
          <p>
            I'm a self-taught developer with professional IT experience, driven
            by a genuine enjoyment of building apps and learning new skills.
            Currently, I'm focused on mastering Flutter, which I've used to
            create a mobile inventory app for household management. I also have
            some experience with Python, JavaScript, TypeScript, and mobile
            development, gained through hands-on projects. I find satisfaction
            in solving problems and improving my craft step by step. I'm excited
            to keep growing and contributing to meaningful projects!
          </p>
        </div>
      </div>
    </Container>
  </section>
);

export default AboutMe;
