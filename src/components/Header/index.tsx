import { Navbar, Container, Nav } from 'react-bootstrap';
import Link from 'next/link';

import { LogginButtonContainer, StyledHeader } from './styles'

import LoginButton from '../LoginButton';
import { useLanguage } from '../../hooks/useLanguage';

interface HeaderProps {
  background?: string;
}

export default function Header({ background }: HeaderProps) {
  const bgColor = background ? background : '#FFFFFF';
  const { language, handleChangeLanguage } = useLanguage();

  const isEnglish = language === 'en';

  return (
    <StyledHeader style={{ backgroundColor: bgColor }}>
      <Navbar
        style={{ backgroundColor: bgColor }}
        collapseOnSelect
        expand="lg"
        variant="light"
      >
        <Container>
          <Link href="/">
            <Navbar.Brand>
              <img id="ibra-logo" src="assets/images/logo.png" alt="Ibra" />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-center"
            id="responsive-navbar-nav"
          >
            <Nav className="me-auto links-container">
              {/* <Nav.Link className="styled-link" href="#quem-somos">
                {isEnglish ? 'About us' : 'Quem somos'}
              </Nav.Link> */}
              <Nav.Link className="styled-link" href="/#advantages">
                {isEnglish ? 'Advantages' : 'Vantagens'}
              </Nav.Link>
              <Nav.Link className="styled-link" href="/#contact-us">
                {isEnglish ? 'Contact us' : 'Fale conosco'}
              </Nav.Link>
              <Nav.Link className="styled-link" href="/#video">
                {isEnglish ? 'Videos' : 'Vídeos'}
              </Nav.Link>
              <Nav.Link className="styled-link" href="/#slider">
                {isEnglish ? 'Leadership ' : 'Liderança'}
              </Nav.Link>
              <Link href="/get-started">
                <a id="get-started-link" className="styled-link nav-link">
                  {isEnglish ? 'GET STARTED' : 'COMEÇAR'}
                </a>
              </Link>
              <Nav.Link className="language-switch">
                <button className={isEnglish ? '' : 'active'} onClick={handleChangeLanguage}>PT</button>
                <span className="circle"></span>
                <button className={isEnglish ? 'active' : ''} onClick={handleChangeLanguage}>EN</button>
              </Nav.Link>
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