import { IconType } from 'react-icons';
import React from 'react';

interface IconLinkProps {
  href: string;
  Icon: IconType;
  size?: string | number;
  className?: string;
}

const IconLink: React.FC<IconLinkProps> = ({
  href,
  Icon,
  size = '2em',
  className = '',
}) => (
  <a
    href={href}
    className={`text-dark ${className}`}
    target='_blank'
    rel='noreferrer'
    style={{ display: 'inline-flex', alignItems: 'center' }}
  >
    <Icon size={size} />
  </a>
);

export default IconLink;
