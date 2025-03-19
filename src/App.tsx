import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import {
  Carousel,
  Col,
  Container,
  Modal,
  Nav,
  Navbar,
  Row,
} from 'react-bootstrap';
import React, { useRef, useState } from 'react';

import CardComponent from './Card';

function App() {
  const [index, setIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState('');
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
    const currentVideo = videoRefs.current[index];
    if (currentVideo) {
      currentVideo.pause();
      currentVideo.currentTime = 0;
    }
    const nextVideo = videoRefs.current[selectedIndex];
    if (nextVideo) {
      nextVideo.play().catch(error => console.log("Play failed:", error));
    }
  };

  const handleVideoClick = (src: string) => {
    setSelectedVideo(src);
    setShowModal(true);
  };

    const handleVideoEnd = () => {
      const nextIndex = (index + 1) % videoItems.length;
      setIndex(nextIndex);
      const nextVideo = videoRefs.current[nextIndex];
      if (nextVideo) {
        nextVideo
          .play()
          .catch((error) => console.log('Auto-play failed:', error));
      }
    };

  const videoItems = [
    {
      src: 'video/CollapseDragDrop.mp4',
      caption: 'Rearrange items with drag & drop.',
    },
    {
      src: 'video/AddAndDeleteProducts.mp4',
      caption: 'Add and remove products seamlessly.',
    },
    {
      src: 'video/AddNewCategoryAndColor.mp4',
      caption: 'Create and color-code categories.',
    },
    {
      src: 'video/AddProductToShoppingList.mp4',
      caption: 'Scan or add items to your shopping list.',
    },
    {
      src: 'video/ThresholdAndShoppingList.mp4',
      caption: 'Set thresholds for shopping alerts.',
    },
    {
      src: 'video/UseFillLevel.mp4',
      caption: 'Switch to fill-level tracking for single-item products.',
    },
  ];

  return (
    <>
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
          <p>[Dein Text hier...]</p>
        </section>

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
      interval={null} // Kein automatisches Wechseln durch Intervall
                controls={true}
                indicators={true}
                className='custom-carousel'
              >
                {videoItems.map((item, idx) => (
                  <Carousel.Item key={idx}>
                    <video
            ref={(el) => {
              videoRefs.current[idx] = el;
            }}
                      width='100%'
                      height='auto'
                      style={{
                        maxHeight: '315px',
                        objectFit: 'contain',
                        cursor: 'pointer',
                      }}
                      src={item.src}
            autoPlay={idx === 0} // Nur erstes Video startet automatisch
                      muted
                      controls
                      className='d-block w-100'
                      onClick={() => handleVideoClick(item.src)}
            onEnded={handleVideoEnd} // Wechselt zum nächsten Video
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
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size='lg'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Video Preview</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <video
            width='100%'
            height='auto'
            src={selectedVideo}
            autoPlay
            muted
            controls
            style={{ maxHeight: '80vh' }}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default App;
