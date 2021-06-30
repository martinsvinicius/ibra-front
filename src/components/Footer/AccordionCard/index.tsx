import { ReactNode } from 'react';
import { CardProps } from 'react-bootstrap';

import { Container } from './styles';

interface AccordionCardProps extends CardProps {
  children: ReactNode;
  isActive: boolean;
}

export default function AccordionCard({ children, isActive, ...rest }: AccordionCardProps) {
  const isActiveString = isActive ? "true" : "false";

  return (
    <Container isactive={isActiveString} {...rest}>
      {children}
    </Container>
  );
};