import { useState } from 'react';

import { Container } from './styles';

interface ConsultCommentProps {
  inputName?: string;
}

export function ConsultComment({ inputName }: ConsultCommentProps) {
  const [iconBrightness, setIconBrightness] = useState(1);

  return (
    <Container id="#consultContainer">
      <input
        type="text"
        onFocus={() => setIconBrightness(0.8)}
        onBlur={() => setIconBrightness(1)}
        name={inputName ? inputName : 'comment'}
        placeholder="Consultar comentário"
      />
      
      <button type="submit">
        <img style={{ filter: `brightness(${iconBrightness})` }} src="assets/icons/consult-icon.svg" alt="Pesquisar" />
      </button>
    </Container>
  );
}
