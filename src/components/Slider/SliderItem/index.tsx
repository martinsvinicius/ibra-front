import React from 'react';

import { IoMdAdd } from 'react-icons/io';

import { Container } from './styles';

interface SliderItemProps {
  imageSource: string;
  title: string;
  description: string;
  portfolioUrl?: string;
  linkedInUrl?: string;
}

export function SliderItem({
  imageSource,
  title,
  description,
  portfolioUrl
}: SliderItemProps) {
  return (
    <Container>
      <img src={imageSource} alt={title} />

      <strong>{title}</strong>

      <p>{description}</p>

      <a href={portfolioUrl ? portfolioUrl : '#'}>
        <IoMdAdd color="#0096D8" size={16} /> <span>Visualizar portfolio</span>
      </a>
    </Container>
  );
}
