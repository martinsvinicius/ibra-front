import {Nav, Container, HeaderContent } from './styles';

import { LoginButton } from '../LoginButton';

export function Header() {
  return (
    <Container>
      <HeaderContent>
        <img src="assets/images/logo.png" alt="Ibra" />

        <Nav>
          <ul>
            <li><a href="#" className="active">Quem somos</a></li>
            <li><a href="#">Vantagens</a></li>
            <li><a href="#">Vídeos</a></li>
            <li><a href="#">Liderança</a></li>
            <li><a href="#">Cases</a></li>
            <li><a href="#">Fale conosco</a></li>
          </ul>

          <LoginButton />
        </Nav>
      </HeaderContent>
    </Container>
  );
};
