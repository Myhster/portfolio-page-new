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
}

const CardComponent: React.FC<CardProps> = ({
  title,
  text,
  imgSrc,
  buttonMain,
  buttonSecondary,
  freeCodeCampLink,
}) => {
  return (
    <Card className='h-100 shadow-sm'>
      {imgSrc && <CardImg variant='top' src={imgSrc} />}
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardText>{text}</CardText>
        <div className='d-flex align-items-center'>
          {buttonMain && (
            <Button variant='primary' href={buttonMain.href} className='me-2'>
              {buttonMain.text}
            </Button>
          )}
          {buttonSecondary && (
            <Button
              variant='secondary'
              href={buttonSecondary.href}
              className='me-2'
            >
              {buttonSecondary.text}
            </Button>
          )}
          {freeCodeCampLink && (
            <a href={freeCodeCampLink} className='text-dark me-2'>
              <FaFreeCodeCamp size={24} />
            </a>
          )}
          {buttonSecondary && (
            <a href={buttonSecondary.href} className='text-dark'>
              <FaGithub size={24} />
            </a>
          )}
        </div>
      </CardBody>
    </Card>
  );
};

export default CardComponent;
