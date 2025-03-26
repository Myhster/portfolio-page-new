import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
} from 'react-bootstrap';
import { FaFreeCodeCamp, FaGithub } from 'react-icons/fa';

import React from 'react';

interface CardProps {
  title: string;
  text: string;
  imgSrc?: string;
  buttonMain?: { href: string; text: string };
  buttonSecondary?: { href: string; text: string };
  freeCodeCampLink?: string;
  githubLink?: string;
}

const CardComponent: React.FC<CardProps> = ({
  title,
  text,
  imgSrc,
  buttonMain,
  buttonSecondary,
  freeCodeCampLink,
  githubLink,
}) => {
  return (
    <Card className='h-100 shadow-sm'>
      {imgSrc && (
        <CardImg
          variant='top'
          src={imgSrc}
          style={{ width: '100%', height: 350, objectFit: 'fill' }}
        />
      )}
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardText>{text}</CardText>
        <div className='d-flex align-items-center'>
          {buttonMain && (
            <Button
              variant='primary'
              href={buttonMain.href}
              target='_blank'
              rel='noreferrer'
              className='me-2'
            >
              {buttonMain.text}
            </Button>
          )}
          {buttonSecondary && (
            <Button
              variant='secondary'
              href={buttonSecondary.href}
              target='_blank'
              rel='noreferrer'
              className='me-2'
            >
              {buttonSecondary.text}
            </Button>
          )}
          {freeCodeCampLink && (
            <a
              href={freeCodeCampLink}
              className='text-dark me-2'
              rel='noreferrer'
              target='_blank'
            >
              <FaFreeCodeCamp size={24} />
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              className='text-dark'
              rel='noreferrer'
              target='_blank'
            >
              <FaGithub size={24} />
            </a>
          )}
        </div>
      </CardBody>
    </Card>
  );
};

export default CardComponent;
