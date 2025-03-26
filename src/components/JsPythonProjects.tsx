import { Col, Container, Row } from 'react-bootstrap';

import CardComponent from '../Card';
import { FaFreeCodeCamp } from 'react-icons/fa';
import React from 'react';
import { SiReplit } from 'react-icons/si';

const JsPythonProjects: React.FC = () => (
  <section id='js-python' className='mb-5'>
    <Container>
      <h2>JavaScript & Python</h2>
      <Row>
        <Col md={4} className='mb-4'>
          <CardComponent
            title='Calculator'
            text='A calculator with immediate execution logic.'
            imgSrc='/images/calculator.png'
            buttonMain={{
              href: 'https://myhster.github.io/calculator',
              text: 'Live Demo',
            }}
            freeCodeCampLink='https://www.freecodecamp.org/certification/fcce974e741-4197-46de-bef9-eae65ace4031/front-end-development-libraries'
          />
        </Col>
        <Col md={4} className='mb-4'>
          <CardComponent
            title='Markdown Previewer'
            text='A tool to preview Markdown in real-time.'
            imgSrc='/images/markdown.png'
            buttonMain={{
              href: 'https://myhster.github.io/markdown-previewer',
              text: 'Live Demo',
            }}
            freeCodeCampLink='https://www.freecodecamp.org/certification/fcce974e741-4197-46de-bef9-eae65ace4031/front-end-development-libraries'
          />
        </Col>
        <Col md={4} className='mb-4'>
          <CardComponent
            title='Random Quote Machine'
            text='A quote generator with color changes and tweet functionality.'
            imgSrc='/images/quote-machine2.png'
            buttonMain={{
              href: 'https://myhster.github.io/random-quote-machine',
              text: 'Live Demo',
            }}
            freeCodeCampLink='https://www.freecodecamp.org/certification/fcce974e741-4197-46de-bef9-eae65ace4031/front-end-development-libraries'
          />
        </Col>
        <Col md={4} className='mb-4'>
          <CardComponent
            title='Drum Machine'
            text='Create sounds by clicking pads or pressing keys.'
            imgSrc='/images/drum.png'
            buttonMain={{
              href: 'https://myhster.github.io/drum-machine',
              text: 'Live Demo',
            }}
            freeCodeCampLink='https://www.freecodecamp.org/certification/fcce974e741-4197-46de-bef9-eae65ace4031/front-end-development-libraries'
          />
        </Col>
      </Row>
      <div className='container' id='javascriptAndPython'>
        <Row className='row-cols-3 gy-2'>
          <Col sm>
            <div className='card listCard'>
              <div className='card-header'>
                <h4>List of completed JS projects</h4>
              </div>
              <ul className='list-group list-group-flush'>
                <li className='list-group-item'>Palindrome Checker</li>
                <li className='list-group-item'>Roman Numeral Converter</li>
                <li className='list-group-item'>Caesars Cipher</li>
                <li className='list-group-item'>Telephone Num. Validator</li>
                <li className='list-group-item'>Cash Register</li>
              </ul>
              <div className='card-footer'>
                <a
                  href='https://www.freecodecamp.org/certification/fcce974e741-4197-46de-bef9-eae65ace4031/javascript-algorithms-and-data-structures'
                  className='card-link'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FaFreeCodeCamp size='2em' />
                </a>
              </div>
            </div>
          </Col>
          <Col sm>
            <div className='card listCard'>
              <div className='card-header'>
                <h4>List of Python projects</h4>
              </div>
              <ul className='list-group list-group-flush'>
                <li className='list-group-item'>
                  Arithmetic Formatter{' '}
                  <a
                    href='https://replit.com/@Bobolove/boilerplate-arithmetic-formatter'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <SiReplit />
                  </a>
                </li>
                <li className='list-group-item'>
                  Time Calculator{' '}
                  <a
                    href='https://replit.com/@Bobolove/boilerplate-time-calculator'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <SiReplit />
                  </a>
                </li>
                <li className='list-group-item'>
                  Budget App{' '}
                  <a
                    href='https://replit.com/@Bobolove/boilerplate-budget-app'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <SiReplit />
                  </a>
                </li>
                <li className='list-group-item'>
                  Polygon Area Calculator{' '}
                  <a
                    href='https://replit.com/@Bobolove/boilerplate-polygon-area-calculator-2'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <SiReplit />
                  </a>
                </li>
                <li className='list-group-item'>
                  Probability Calculator{' '}
                  <a
                    href='https://replit.com/@Bobolove/boilerplate-probability-calculator'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <SiReplit />
                  </a>
                </li>
              </ul>
              <div className='card-footer'>
                <a
                  href='https://www.freecodecamp.org/certification/fcce974e741-4197-46de-bef9-eae65ace4031/scientific-computing-with-python-v7'
                  className='card-link'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FaFreeCodeCamp size='2em' />
                </a>
              </div>
            </div>
          </Col>
          <Col sm></Col>
        </Row>
      </div>
    </Container>
  </section>
);

export default JsPythonProjects;
