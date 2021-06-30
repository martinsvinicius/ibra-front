import {Nav, Container, HeaderContent } from './styles';

import LoginButton from '../LoginButton';

export default function Header() {
  return (
    <Container>
      <HeaderContent>
        <img src="assets/images/logo.png" alt="Ibra" />

        <Nav>
          <ul>
            <li><a href="#">Quem somos</a></li>
            <li><a href="#advantages">Vantagens</a></li>
            <li><a href="#">Vídeos</a></li>
            <li><a href="#slider">Liderança</a></li>
            <li><a href="#">Cases</a></li>
            <li><a href="#">Fale conosco</a></li>
          </ul>

          <LoginButton />
        </Nav>
      </HeaderContent>
    </Container>
  );
};
