import { FormEvent, useEffect } from 'react';

import { Container } from '../../styles/pages/product';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { PortugueseCommentStatus } from '../../components/PortugueseCommentStatus';
import { EnglishCommentStatus } from '../../components/EnglishCommentStatus';

export interface Status {
  privacyInvasion: {
    score: number;
    title: string;
  };
  publicFigure: {
    score: number;
    title: string;
  };
  publicInterest: {
    score: number;
    title: string;
  };
}

export default function GetStarted() {
  const { language } = useLanguage();
  const isEnglish = language === 'en';
  const [status, setStatus] = useState<Status | null>(null);
  const [textOrCsv, setTextOrCsv] = useState<'text' | 'csv'>('text');

  useEffect(() => {
    setStatus({
      privacyInvasion: {
        score: 0,
        title: isEnglish ? 'AVERAGE' : 'MÉDIA',
      },
      publicFigure: {
        score: 0,
        title: isEnglish ? `IT'S NOT PUBLIC FIGURE` : 'NÃO É FIGURA PÚBLICA',
      },
      publicInterest: {
        score: 0,
        title: isEnglish ? 'HIGHER' : 'GRANDE',
      },
    });

    return () => {
      setStatus({} as Status);
    };
  }, [language]);

  function handleChangeInputType() {
    if (textOrCsv === 'csv') setTextOrCsv('text'); else setTextOrCsv('csv');
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newStatus: Status = {
      privacyInvasion: {
        score: Math.random() * 100,
        title: isEnglish ? 'AVERAGE' : 'MÉDIA',
      },
      publicFigure: {
        score: Math.random() * 100,
        title: isEnglish ? `IT'S NOT PUBLIC FIGURE` : 'NÃO É FIGURA PÚBLICA',
      },
      publicInterest: {
        score: Math.random() * 100,
        title: isEnglish ? 'HIGHER' : 'GRANDE',
      },
    };

    setTimeout(() => setStatus(newStatus), 500);
  }

  //english site version
  if (isEnglish) {
    return (
      <Container>
        <Header background="#F8F8F8" />

        <EnglishCommentStatus
          textOrCsv={textOrCsv}
          status={status}
          handleSubmit={handleSubmit}
          handleChangeInputType={handleChangeInputType}
        />

        <Footer background="#FFFFFF" />
      </Container>
    );
  }

  //portuguese site version
  return (
    <Container>
      <Header background="#F8F8F8" />

      <PortugueseCommentStatus
        handleChangeInputType={handleChangeInputType}
        textOrCsv={textOrCsv}
        status={status}
        handleSubmit={handleSubmit}
      />

      <Footer background="#FFFFFF" />
    </Container>
  );
}
