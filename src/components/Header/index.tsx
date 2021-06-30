import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

import { LogginButtonContainer, StyledHeader } from './styles'

import LoginButton from '../LoginButton';

export default function Header() {
  return (
    <StyledHeader>
      <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
        <Container>
          <Navbar.Brand href="#">
            <img id="ibra-logo" src="assets/images/logo.png" alt="Ibra" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="justify-content-center" id="responsive-navbar-nav">
            <Nav className="me-auto links-container">
              <Nav.Link className="styled-link" href="#">Quem somos</Nav.Link>
              <Nav.Link className="styled-link" href="#advantages">Vantagens</Nav.Link>
              <Nav.Link className="styled-link" href="#">Vídeos</Nav.Link>
              <Nav.Link className="styled-link" href="#slider">Liderança</Nav.Link>
              <Nav.Link className="styled-link" href="#">Cases</Nav.Link>
              <Nav.Link className="styled-link" href="#">Fale conosco</Nav.Link>
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


    // <Container>
    //   <HeaderContent>
    //     <img src="assets/images/logo.png" alt="Ibra" />

    //     <Nav>
    //       <ul>
    //         <li><a href="#">Quem somos</a></li>
    //         <li><a href="#advantages">Vantagens</a></li>
    //         <li><a href="#">Vídeos</a></li>
    //         <li><a href="#slider">Liderança</a></li>
    //         <li><a href="#">Cases</a></li>
    //         <li><a href="#">Fale conosco</a></li>
    //       </ul>

    //       <LoginButton />
    //     </Nav>
    //   </HeaderContent>
    // </Container>