import { ChangeEvent, useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { Container } from './styles';

export function UploadFile() {
  const [iconBrightness, setIconBrightness] = useState(1);
  const { language } = useLanguage();
  const isEnglish = language === 'en';

  const [labelText, setLabelText] = useState(
    isEnglish ? 'Attach comments with .csv' : 'Anexar comentários em .csv'
  );

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files?.length) {
      setLabelText(e.target.files[0].name);
      document.querySelector<any>('#submitFile').click();
    }
  }

  return (
    <Container>
      <label htmlFor="csvComments">{labelText}</label>
      <input
        id="csv"
        type="file"
        name="csvComments"
        onFocus={() => setIconBrightness(0.8)}
        onBlur={() => setIconBrightness(1)}
        onChange={(e) => handleChange(e)}
      />

      <button type="submit" id="submitFile">
        <img
          style={{ filter: `brightness(${iconBrightness})` }}
          src="assets/icons/add-file.svg"
          alt="Add file"
        />
      </button>
    </Container>
  );
}
