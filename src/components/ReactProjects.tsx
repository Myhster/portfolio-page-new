import { Col, Container, Row } from 'react-bootstrap';

import CardComponent from '../Card';
import React from 'react';

const ReactProjects: React.FC = () => (
  <section id='react' className='mb-5'>
    <Container>
      <h2>React Projects</h2>
      <Row>
        <Col md={4} className='mb-4'>
          <CardComponent
            title='25-5-Clock'
            text='A Pomodoro timer with customizable session and break lengths.'
            imgSrc='/images/clock.png'
            buttonMain={{
              href: 'https://myhster.github.io/25-5-Clock/',
              text: 'Live Demo',
            }}
            freeCodeCampLink='https://www.freecodecamp.org/certification/fcce974e741-4197-46de-bef9-eae65ace4031/front-end-development-libraries'
          />
        </Col>
      </Row>
    </Container>
  </section>
);

export default ReactProjects;
