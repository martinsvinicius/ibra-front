import { ReactNode, useState } from 'react';

import { Container } from './styles';

interface AccordionCardProps {
  children: ReactNode;
}

export default function AccordionCard({ children }: AccordionCardProps) {
  const [isActive, setActive] = useState(false);

  function handleSetActive() {
    setActive(!isActive);
  }

  return (
    <Container onClick={handleSetActive} isActive={isActive}>
      {children}
    </Container>
  );
};