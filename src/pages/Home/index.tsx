import Header from '../../components/Header';

import Hero from './Hero';

import { Container, AdvantagesSection, Advantages, Advantage, ContactUsSection } from './styles';

export default function Home() {
  return (
    <Container>
      <Header />

      <section>
        <Hero />
      </section>

      <AdvantagesSection>
        <h2>
          Lorem <span className="blue-200">ipsum</span> dolor{' '}
          <span className="blue-active">sit amet</span>
        </h2>

        <Advantages>
          <Advantage>
            <div className="advantageDescription">
              <strong>Lorem ipsum Dolor sit</strong>
              <p>
                Lorem ipsum dolor sit amet, <b>consectetur</b> adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore{' '}
                <span className="blue-active">
                  <b>magna aliqua</b>
                </span>
                .
              </p>
            </div>

            <div className="advantageNumber">1</div>

            <div className="advantageImage">
              <img src="assets/images/step-1.png" alt="Lorem ipsum" />
            </div>
          </Advantage>

          <Advantage>
            <div className="advantageImage">
              <img src="assets/images/step-1.png" alt="Lorem ipsum" />
            </div>

            <div className="advantageNumber">2</div>

            <div className="advantageDescription">
              <strong>Lorem ipsum Dolor sit</strong>
              <p>
                Lorem ipsum dolor sit amet, <b>consectetur</b> adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore{' '}
                <span className="blue-active">
                  <b>magna aliqua</b>
                </span>
                .
              </p>
            </div>
          </Advantage>
        </Advantages>
      </AdvantagesSection>

      <ContactUsSection>
        <img src="assets/icons/contact-hero.svg" />

        <div>
          <h3>Noso time está pronto <br /> para te ouvir!</h3>
          <p>
            Você quer falar com a gente a respeito de parcerias, contatos
            comerciais e outras dúvidas? Entre em contato conosco!
          </p>
          <button type="button">
            FALE CONOSCO
          </button>
        </div>
      </ContactUsSection>
    </Container>
  );
}
