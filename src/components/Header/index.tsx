import { Navbar, Container, Nav } from 'react-bootstrap';
import Link from 'next/link';

import { LogginButtonContainer, StyledHeader } from './styles'

import LoginButton from '../LoginButton';

interface HeaderProps {
  background?: string;
}

export default function Header({ background }: HeaderProps) {
  const bgColor = background ? background : '#FFFFFF';

  return (
    <StyledHeader style={{ backgroundColor: bgColor }}>
      <Navbar style={{ backgroundColor: bgColor }} collapseOnSelect expand="lg" variant="light">
        <Container>
          <Link href="/">
            <Navbar.Brand>
              <img id="ibra-logo" src="assets/images/logo.png" alt="Ibra" />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="justify-content-center" id="responsive-navbar-nav">
            <Nav className="me-auto links-container">
              <Nav.Link className="styled-link" href="#quem-somos">Quem somos</Nav.Link>
              <Nav.Link className="styled-link" href="#advantages">Vantagens</Nav.Link>
              <Nav.Link className="styled-link" href="#video">Vídeos</Nav.Link>
              <Nav.Link className="styled-link" href="#slider">Liderança</Nav.Link>
              <Nav.Link className="styled-link" href="#contact-us">Fale conosco</Nav.Link>
              <Link href="/product">
                <a id="get-started-link" className="styled-link nav-link">Começar</a>
              </Link>
            </Nav>
            <LogginButtonContainer>
              <LoginButton />
            </LogginButtonContainer>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </StyledHeader>
  );
}
