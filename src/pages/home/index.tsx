import Header from '../../components/Header';

import Hero from '../../components/HeroSection';

import { Slider } from '../../components/Slider';
import { VideoPlayer } from '../../components/VideoPlayer';

import Footer from '../../components/Footer';

import {
  Container,
  AdvantagesSection,
  Advantages,
  Advantage,
  ContactUsSection,
  VideoSection,
  FormSection,
  FormContent,
} from '../../styles/pages/home';
import { ContactUsForm } from '../../components/ContactUsForm';
import { useLanguage } from '../../hooks/useLanguage';

export default function Home() {
  const { language } = useLanguage();
  const isEnglish = language === 'en';

  //english site version
  if (isEnglish) {
    return (
      <Container>
        <Header />

        <section>
          <Hero />
        </section>

        <AdvantagesSection id="advantages">
          <h2>
            Interactive moderation,{' '}
            <span className="blue-active">clearer data</span>
          </h2>

          <Advantages>
            <Advantage>
              <div className="advantageDescription">
                <strong>
                  The <span className="blue-active">IBF</span> criteria
                </strong>
                <p>
                  Using{' '}
                  <span className="blue-200">
                    <b>transparent</b>
                  </span>{' '}
                  and understandable criteria, the{' '}
                  <span className="blue-active">
                    <b>IBF</b>
                  </span>{' '}
                  decides whether to protect user privacy or freedom of
                  expression
                </p>
              </div>

              <div className="advantageNumber">1</div>

              <div className="advantageImage">
                <img src="assets/images/print1.png" alt="" />
              </div>
            </Advantage>

            <Advantage>
              <div className="advantageImage">
                <img src="assets/images/print2.png" alt="" />
              </div>

              <div className="advantageNumber">2</div>

              <div className="advantageDescription">
                <strong>
                  How this improves{' '}
                  <span className="blue-active">your company</span>
                </strong>
                <p>
                  Companies either remove too much content without justification
                  or too little content, leaving harmful messages online.{' '}
                  <b>
                    We <span className="blue-active">help</span> you manage this{' '}
                    <span className="blue-active">challenge</span>
                  </b>{' '}
                  and reach out to your customer
                </p>
              </div>
            </Advantage>
          </Advantages>
        </AdvantagesSection>

        <ContactUsSection id="contact-us">
          <img src="assets/icons/contact-hero.svg" />

          <div>
            <h3>Our team is ready to hear you!</h3>
            <p>
              Do you want to talk to us about partnerships, business contacts
              and other questions? Contact us!
            </p>
            <a href="#contact-us-form">CONTACT US</a>
          </div>
        </ContactUsSection>

        <VideoSection id="video">
          <h2>How does it work?</h2>
          <VideoPlayer />
        </VideoSection>

        <Slider />

        <FormSection id="contact-us-form">
          <FormContent>
            <div>
              <h2>Reach out to us</h2>

              <p>
                We believe in using technology to{' '}
                <span className="blue-200">
                  <b>help</b>
                </span>{' '}
                you grow with your customers. Let the{' '}
                <span className="blue-active">
                  <b>IBF</b>
                </span>{' '}
                help you.
              </p>
            </div>

            <ContactUsForm />
          </FormContent>
        </FormSection>

        <Footer />
      </Container>
    );
  }

  //portuguese site version
  return (
    <Container>
      <Header />

      <section>
        <Hero />
      </section>

      <AdvantagesSection id="advantages">
        <h2>
          Moderação interativa,{' '}
          <span className="blue-active">dados claros</span>
        </h2>

        <Advantages>
          <Advantage>
            <div className="advantageDescription">
              <strong>
                Os critérios da <span className="blue-active">IBRA</span>
              </strong>
              <p>
                Usando critérios compreensíveis e{' '}
                <span className="blue-200">
                  <b>transparentes</b>
                </span>
                , a{' '}
                <span className="blue-active">
                  <b>IBRA</b>
                </span>{' '}
                decide entre proteger a privacidade de usuários, deletando
                comentários, ou a liberdade de expressão, mantendo-os online.
              </p>
            </div>

            <div className="advantageNumber">1</div>

            <div className="advantageImage">
              <img src="assets/images/print1.png" alt="Lorem ipsum" />
            </div>
          </Advantage>

          <Advantage>
            <div className="advantageImage">
              <img src="assets/images/print2.png" alt="Lorem ipsum" />
            </div>

            <div className="advantageNumber">2</div>

            <div className="advantageDescription">
              <strong>
                Como isso ajuda a{' '}
                <span className="blue-active">sua empresa</span>
              </strong>
              <p>
                Empresas acabam removendo conteúdo demais sem justificativa ou
                deixando mensagens como discurso de ódio online.{' '}
                <b>
                  Nós <span className="blue-active">ajudamos</span> você a lidar
                  com esse <span className="blue-active">desafio</span>
                </b>{' '}
                e interagir com seus consumidores.
              </p>
            </div>
          </Advantage>
        </Advantages>
      </AdvantagesSection>

      <ContactUsSection id="contact-us">
        <img src="assets/icons/contact-hero.svg" />

        <div>
          <h3>Nosso time está pronto para te ouvir!</h3>
          <p>
            Você quer falar com a gente a respeito de parcerias, contatos
            comerciais e outras dúvidas? Entre em contato conosco!
          </p>
          <a href="#contact-us-form">FALE CONOSCO</a>
        </div>
      </ContactUsSection>

      <VideoSection id="video">
        <h2>Como a IBRA funciona?</h2>
        <VideoPlayer />
      </VideoSection>

      <Slider />

      <FormSection id="contact-us-form">
        <FormContent>
          <div>
            <h2>Entre em contato</h2>

            <p>
              Nós acreditamos em usar a tecnologia para crescer{' '}
              <span className="blue-200"><b>junto</b></span> com seus usuários. Conheça
              a{' '}
              <span className="blue-active">
                <b>IBRA</b>
              </span>
            </p>
          </div>

          <ContactUsForm />
        </FormContent>
      </FormSection>

      <Footer />
    </Container>
  );
}
