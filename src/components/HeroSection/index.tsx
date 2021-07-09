import { Container, Wave } from './styles';

import { IoMdAddCircle } from 'react-icons/io';
import { useLanguage } from '../../hooks/useLanguage';

export default function Hero() {
  const { language } = useLanguage();

  const isEnglish = language === 'en';

  //english site version
  if (isEnglish) {
    return (
      <Container>
        <section>
          <h2>
            We exist to <span>protect</span> your <br /> company and{' '}
            <span>your clients</span>
          </h2>

          <div>
            <div className="heroImageContainer">
              <img src="assets/icons/hero.svg" alt="Hero image" />
            </div>

            <div className="heroDescription">
              <strong>
                Creating a custom made solution to content moderation
              </strong>

              <p>
                The Internet Balancing Formula provides a clear and transparent
                moderation process for companies that need to deal with big
                quantities of comments and interaction, centralizing social
                networks for a faster response.
              </p>

              <a href="#">
                <IoMdAddCircle size={40} color="#3EAEE0" className="addIcon" />
                Now more
              </a>
            </div>
          </div>
        </section>

        <Wave />
      </Container>
    );
  }

  //portuguese site version
  return (
    <Container>
      <section>
        <h2>
          Nós existimos para <span>proteger</span> sua <br /> empresa e{' '}
          <span>seus clientes</span>
        </h2>

        <div>
          <div className="heroImageContainer">
            <img src="assets/icons/hero.svg" alt="Hero image" />
          </div>

          <div className="heroDescription">
            <strong>
              Criando uma solução sob medida para a moderação de conteúdo
            </strong>

            <p>
              Com a IBRA, sua empresa pode ter uma moderação de conteúdo clara e
              transparente, centralizando grandes quantidades de conteúdo e
              perfis em diferentes redes sociais para uma resposta rápida.
            </p>

            <a href="#">
              <IoMdAddCircle size={40} color="#3EAEE0" className="addIcon" />
              Saiba mais
            </a>
          </div>
        </div>
      </section>

      <Wave />
    </Container>
  );
}
