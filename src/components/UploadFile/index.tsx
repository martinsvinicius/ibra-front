import { useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { Container } from './styles';

export function UploadFile() {
  const [iconBrightness, setIconBrightness] = useState(1);
  const { language } = useLanguage();
  const isEnglish = language === 'en';

  return (
    <Container>
      <label htmlFor="csvComments">
        {isEnglish ? 'Attach comments with .csv' : 'Anexar comentários em .csv'}
      </label>
      <input
        type="file"
        name="csvComments"
        onFocus={() => setIconBrightness(0.8)}
        onBlur={() => setIconBrightness(1)}
      />

      <img
        style={{ filter: `brightness(${iconBrightness})` }}
        src="assets/icons/add-file.svg"
        alt="Add file"
      />
    </Container>
  );
}
