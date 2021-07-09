import React from 'react';

import { IoMdAdd } from 'react-icons/io';
import { useLanguage } from '../../../hooks/useLanguage';

import { Container, ImageContainer} from './styles';

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
  portfolioUrl,
  linkedInUrl
}: SliderItemProps) {
  const { language } = useLanguage();
  const isEnglish = language === 'en';

  function handleLinkedinRedirect() {
    window.open(linkedInUrl as string, '_blank');
  }
  
  return (
    <Container>
      <ImageContainer>
        <div>
          <img src={imageSource}  alt={title} />
          <span onClick={handleLinkedinRedirect} id="linkedinButton"><img src="assets/icons/white-linkedin.svg" alt={`LinkedIn | ${title}`} /></span>
        </div>
      </ImageContainer>
      
      <strong>{title}</strong>

      <p>{description}</p>

      <a href={portfolioUrl ? portfolioUrl : '#'} target="_blank">
        <IoMdAdd color="#0096D8" size={16} /> <span>{isEnglish ? 'Check portfolio' : 'Visualizar portfolio'}</span>
      </a>
    </Container>
  );
}
