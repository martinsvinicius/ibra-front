import { Header } from '../../components/Header';

import { Hero } from './Hero';

import { Container } from './styles';

export function Home() {
  return (
    <Container>
      <Header />
      <section>
        <Hero />
      </section>
    </Container>
  );
}
