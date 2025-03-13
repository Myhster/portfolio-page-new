import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import { Carousel, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import React, { useState } from 'react';

import CardComponent from './Card';

function App() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  const videoItems = [
    {
      src: 'https://youtube.com/[video1-link]',
      caption: 'View and manage your inventory with a clean list.',
    },
    {
      src: 'https://youtube.com/[video2-link]',
      caption: 'Organize products into categories.',
    },
    {
      src: 'https://youtube.com/[video3-link]',
      caption: 'Add products or scan barcodes effortlessly.',
    },
    {
      src: 'https://youtube.com/[video4-link]',
      caption: 'Keep track of your shopping needs.',
    },
  ];
  return (
    <>
      {/* Sticky Navigation */}
      <Navbar bg='dark' variant='dark' expand='lg' sticky='top'>
        <Container>
          <Navbar.Brand href='#home'>Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='#about'>About Me</Nav.Link>
              <Nav.Link href='#flutter'>Flutter Project</Nav.Link>
              <Nav.Link href='#react'>React Projects</Nav.Link>
              <Nav.Link href='#js-python'>JavaScript & Python</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      
      <Container className='my-4'>
        
        <section id='about' className='mb-5'>
          <h1>Welcome to My Portfolio</h1>
          <p>
            I'm a Berlin-based self-taught developer with a strong foundation in
            Flutter, React, JavaScript, and Python. I enjoy building practical,
            user-focused applications and am continuously expanding my skills in
            modern web and mobile development. Currently, I’m working on
            projects like an inventory management app and exploring integrations
            with cloud services and data analysis.
          </p>
        </section>

        {/* Flutter Project */}
        <section id='flutter' className='mb-5'>
          <h2>Flutter Project</h2>
          <Row>
            <Col md={4} className='mb-4'>
              <CardComponent
                title='Inventory-App'
                text='A Flutter app for inventory management with barcode scanning and shopping list features.'
                imgSrc='/screenshots/inventory_screen.png'
                buttonMain={{
                  href: 'https://[username].github.io/inventory-app-web',
                  text: 'Live Demo',
                }}
                buttonSecondary={{
                  href: 'https://github.com/[username]/inventory-app',
                  text: 'GitHub',
                }}
              />
            </Col>
            <Col md={6} className='mb-4'>
              <Carousel
                activeIndex={index}
                onSelect={handleSelect}
                interval={null}
                controls={true}
                indicators={true}
              >
                {videoItems.map((item, idx) => (
                  <Carousel.Item key={idx}>
                    <video
                      width='100%'
                      height='315'
                      src={item.src}
                      autoPlay
                      muted
                      controls
                      loop
                      className='d-block w-100'
                    />
                    <div className='video-caption'>
                      <p>{item.caption}</p>
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
          </Row>
        </section>

        {/* React Projects */}
        <section id='react' className='mb-5'>
          <h2>React Projects</h2>
          <Row>
            <Col md={4} className='mb-4'>
              <CardComponent
                title='25-5-Clock'
                text='A Pomodoro timer with customizable session and break lengths.'
                imgSrc='/screenshots/25-5-clock.png'
                buttonMain={{
                  href: 'https://[username].github.io/25-5-clock',
                  text: 'Live Demo',
                }}
                freeCodeCampLink='https://freecodecamp.org/certification/[username]/react'
              />
            </Col>
            {/* Weitere React-Projekte hier */}
          </Row>
        </section>

        {/* JavaScript and Python */}
        <section id='js-python' className='mb-5'>
          <h2>JavaScript & Python</h2>
          <Row>
            <Col md={4} className='mb-4'>
              <CardComponent
                title='Calculator'
                text='A calculator with immediate execution logic.'
                imgSrc='/screenshots/calculator.png'
                buttonMain={{
                  href: 'https://[username].github.io/calculator',
                  text: 'Live Demo',
                }}
              />
            </Col>
            <Col md={4} className='mb-4'>
              <CardComponent
                title='Markdown Previewer'
                text='A tool to preview Markdown in real-time.'
                imgSrc='/screenshots/markdown-previewer.png'
                buttonMain={{
                  href: 'https://[username].github.io/markdown-previewer',
                  text: 'Live Demo',
                }}
              />
            </Col>
            <Col md={4} className='mb-4'>
              <CardComponent
                title='Random Quote Machine'
                text='A quote generator with color changes and tweet functionality.'
                imgSrc='/screenshots/random-quote.png'
                buttonMain={{
                  href: 'https://[username].github.io/random-quote-machine',
                  text: 'Live Demo',
                }}
              />
            </Col>
            <Col md={4} className='mb-4'>
              <CardComponent
                title='Drum Machine'
                text='Create sounds by clicking pads or pressing keys.'
                imgSrc='/screenshots/drum-machine.png'
                buttonMain={{
                  href: 'https://[username].github.io/drum-machine',
                  text: 'Live Demo',
                }}
              />
            </Col>
          </Row>
        </section>

        {/* Footer */}
        <footer>
          <p>
            Contact: [deine-email] |{' '}
            <a href='https://linkedin.com/in/[profil]'>LinkedIn</a>
          </p>
        </footer>
      </Container>
    </>
  );
}

export default App;
