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
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log(data);
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

          <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="Nome" type="text" {...register("name", { required: true })} />

            <input placeholder="Email Corporativo" type="text" {...register("email", { required: true })} />

            <input placeholder="Empresa" type="text" {...register("company", { required: true })} autoComplete="off" />

            <input placeholder="Cargo" type="text" {...register("role", { required: true })} autoComplete="off" />

            <input placeholder="Telefone com DDI e DDD" type="text" {...register("telephone", { required: true })} autoComplete="off" />

            <textarea placeholder="Mensagem" cols={30} rows={30} {...register("message")}></textarea>

            <div className="checkbox-container">
              <input type="checkbox" {...register("policyAccepted", { required: true })} />
              <span>Eu li e aceito a Política de Privacidade da IBRA</span>
            </div>

            <p>Seu consentimento é necessário para garantir o correto uso da privacidade e viabilizar a comunicação direta entre você e a IBRA.</p>
          
            <button type="submit">ENVIAR</button>
          </form>
        </FormContent>
      </FormSection>

      <Footer />
    </Container>
  );
}
