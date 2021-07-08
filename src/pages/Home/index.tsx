import { toast } from 'react-toastify';
import Header from '../../components/Header';

import Hero from '../../components/HeroSection';

import { Slider } from '../../components/Slider';
import { VideoPlayer } from '../../components/VideoPlayer';
import { SubmitHandler, useForm } from 'react-hook-form';

import Footer from '../../components/Footer';

import {
  Container,
  AdvantagesSection,
  Advantages,
  Advantage,
  ContactUsSection,
  VideoSection,
  FormSection,
  FormContent
} from '../../styles/pages/home';
import { ContactUsForm } from '../../components/ContactUsForm';

type Inputs = {
  name: string;
  email: string;
  company: string;
  role: string;
  telephone: string;
  message: string;
  policyAccepted: boolean;
}

export default function Home() {
  const { register, handleSubmit, watch, formState: {isDirty, isValid} } = useForm<Inputs>({
    mode: 'onChange'
  });

  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log(data);
    toast.success('Enviado!', {
      style: {
        backgroundColor: '#0096D8'
      }
    })
  }

  return (
    <Container>
      <Header />

      <section>
        <Hero />
      </section>

      <AdvantagesSection id="advantages">
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
        <h2>
          Lorem <span className="blue-200">ipsum</span> dolor{' '}
          <span className="blue-active">sit amet</span>
        </h2>
        <VideoPlayer />
      </VideoSection>

      <Slider />

      <FormSection id="contact-us-form">
        <FormContent>
          <div>
            <h2>
              Lorem <span className="blue-200">ipsum</span> dolor{' '}
              <span className="blue-active">sit amet</span>
            </h2>

            <p>
              Lorem ipsum dolor sit amet, <b>consectetur</b> adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore{' '}
              <span className="blue-active">
                <b>magna aliqua</b>
              </span>.
            </p>
          </div>

          <ContactUsForm />
        </FormContent>
      </FormSection>

      <Footer />
    </Container>
  );
}
