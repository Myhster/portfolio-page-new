import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import { Container, Modal, Nav, Navbar } from 'react-bootstrap';
import React, { useState } from 'react';

import AboutMe from './components/AboutMe';
import FlutterProject from './components/FlutterProject';
import JsPythonProjects from './components/JsPythonProjects';
import ReactProjects from './components/ReactProjects';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState('');

  const handleVideoClick = (src: string) => {
    setSelectedVideo(src);
    setShowModal(true);
  };

  return (
    <>
      <Navbar
        bg='dark'
        variant='dark'
        expand='lg'
        sticky='top'
        className='mb-5'
      >
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
        <AboutMe />
        <FlutterProject onVideoClick={handleVideoClick} />
        <ReactProjects />
        <JsPythonProjects />
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
