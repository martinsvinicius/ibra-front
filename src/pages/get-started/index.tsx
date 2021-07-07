import { FormEvent } from 'react';

import { Container, Content } from '../../styles/pages/product';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ConsultComment } from '../../components/ConsultComment';
import { CommentStatusItem } from '../../components/CommentStatusItem';
import { useState } from 'react';

interface Status {
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
  const [status, setStatus] = useState<Status>({
    privacyInvasion: {
      score: 0,
      title: 'MÉDIA',
    },
    publicFigure: {
      score: 0,
      title: 'NÃO É FIGURA PÚBLICA',
    },
    publicInterest: {
      score: 0,
      title: 'GRANDE',
    },
  });

  const finalScore = status.privacyInvasion.score + status.publicFigure.score + status.publicInterest.score;

  function handlSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newStatus: Status = {
      privacyInvasion: {
        score: Math.random() * 100,
        title: 'MÉDIA',
      },
      publicFigure: {
        score: Math.random() * 100,
        title: 'NÃO É FIGURA PÚBLICA',
      },
      publicInterest: {
        score: Math.random() * 100,
        title: 'GRANDE',
      },
    };

    setTimeout(() => setStatus(newStatus), 500);
  }

  return (
    <Container>
      <Header background="#F8F8F8" />

      <Content>
        <div className="comment">
          <h1>
            We <span className="blue-200">exist</span> to protect your company
            and <span className="blue-active">your clients</span>
          </h1>

          <form onSubmit={(e) => handlSubmit(e)}>
            <ConsultComment />
          </form>
        </div>

        <div className="commentStatus">
          <div className="statusPoints">
            <CommentStatusItem
              title="Invasão à privacidade"
              points={status.privacyInvasion.score}
              pointsDescription={status.privacyInvasion.title}
              boxColor="#8fdae4"
            />
            <CommentStatusItem
              title="Nível de figura pública"
              points={status.publicFigure.score}
              pointsDescription={status.publicFigure.title}
              boxColor="#0096D8"
            />
            <CommentStatusItem
              title="Interesse Público"
              points={status.publicInterest.score}
              pointsDescription={status.publicInterest.title}
              boxColor="#2E70AA"
            />
          </div>

          <div className="totalStatus">
            <CommentStatusItem
              title="Pontuação Total"
              points={finalScore}
              pointsDescription="@USER"
              boxColor="#3EAEE0"
              isLarge={true}
            />

            <p>
              Comentário removido pois{' '}
              <span className="blue-active">
                não se trata de um figura pública e há invasão a privacidade.
              </span>
            </p>
          </div>
        </div>
      </Content>

      <Footer background="#FFFFFF" />
    </Container>
  );
}
