import { FormEvent, useEffect } from 'react';

import { Container, Content } from '../../styles/pages/product';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ConsultComment } from '../../components/ConsultComment';
import { CommentStatusItem } from '../../components/CommentStatusItem';
import { useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';

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
  const { language } = useLanguage();
  const isEnglish = language === 'en';

  const [status, setStatus] = useState<Status>({
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
  }, [language]);

  const finalScore =
    status.privacyInvasion.score +
    status.publicFigure.score +
    status.publicInterest.score;

  function handlSubmit(e: FormEvent<HTMLFormElement>) {
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

        <Content>
          <div className="comment">
            <h1>
              We exist to <span className="blue-200">protect</span> your company
              and <span className="blue-active">your clients</span>
            </h1>

            <form onSubmit={(e) => handlSubmit(e)}>
              <ConsultComment />
            </form>
          </div>

          <div className="commentStatus">
            <div className="statusPoints">
              <CommentStatusItem
                title="Invasion of privacy"
                points={status.privacyInvasion.score}
                pointsDescription={status.privacyInvasion.title}
                boxColor="#8fdae4"
              />
              <CommentStatusItem
                title="Level of public figure"
                points={status.publicFigure.score}
                pointsDescription={status.publicFigure.title}
                boxColor="#0096D8"
              />
              <CommentStatusItem
                title="Public interest"
                points={status.publicInterest.score}
                pointsDescription={status.publicInterest.title}
                boxColor="#2E70AA"
              />
            </div>

            <div className="totalStatus">
              <CommentStatusItem
                title="Final score"
                points={finalScore}
                pointsDescription="@USER"
                boxColor="#3EAEE0"
                isLarge={true}
              />

              <p>
                The comment has been removed{' '}
                <span className="blue-active">
                  as it isn't about a public figure and it invades privacy
                </span>
              </p>
            </div>
          </div>
        </Content>

        <Footer background="#FFFFFF" />
      </Container>
    );
  }

  //portuguese site version
  return (
    <Container>
      <Header background="#F8F8F8" />

      <Content>
        <div className="comment">
          <h1>
            Nós existimos para <span className="blue-200">proteger</span> sua
            empresa e <span className="blue-active">seus clientes</span>
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
