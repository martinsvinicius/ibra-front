import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

import { Accordion, Card } from 'react-bootstrap';

import AccordionCard from './AccordionCard';

import { Container, FooterContent, Description, LinksList, AccordionLinksList } from './styles';

export default function Footer() {
  const [currentActive, setCurrentActive] = useState<string | null >(null);

  return (
    <Container>
      <FooterContent>
        <img src="assets/images/logo.png" alt="Ibra" />

        <div>
          <Description>
            <strong>CONSECTUR ADIPISCING ELIT</strong>

            <p>
              Lorem ipsum dolor sit amet, <b>consectetur</b> adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore <b>magna 
              aliqua.</b>
            </p>
          </Description>

          <LinksList>
            <li><strong>Lorem ipsum</strong></li>
            <li><a href="#">Lorem ipsum</a></li>
            <li><a href="#">Lorem ipsum</a></li>
            <li><a href="#">Lorem ipsum</a></li>
          </LinksList>

          <LinksList>
            <li><strong>Lorem ipsum</strong></li>
            <li><a href="#">Lorem ipsum</a></li>
            <li><a href="#">Lorem ipsum</a></li>
          </LinksList>

          <LinksList>
            <li><strong>Lorem ipsum</strong></li>
            <li><a href="#">Lorem ipsum</a></li>
          </LinksList>

          <LinksList>
            <li><strong>Lorem ipsum</strong></li>
            <li><a href="#">Lorem ipsum</a></li>
            <li><a href="#">Lorem ipsum</a></li>
          </LinksList>

          <LinksList>
            <li><strong>Lorem ipsum</strong></li>
            <li><a href="#">Lorem ipsum</a></li>
          </LinksList>

          <AccordionLinksList>
            <Accordion onSelect={(e) => {setCurrentActive(e)}}>
              
              <AccordionCard isActive={(currentActive === "0")}>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  Lorem ipsum
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <ul>
                      <li><a href="#">Lorem ipsum</a></li>
                      <li><a href="#">Lorem ipsum</a></li>
                      <li><a href="#">Lorem ipsum</a></li>
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </AccordionCard>

              <AccordionCard isActive={(currentActive === "1")}>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                Lorem ipsum
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <ul>
                      <li><a href="#">Lorem ipsum</a></li>
                      <li><a href="#">Lorem ipsum</a></li>
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </AccordionCard>

              <AccordionCard isActive={(currentActive === "2")}>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                Lorem ipsum
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    <ul>
                      <li><a href="#">Lorem ipsum</a></li>
                      <li><a href="#">Lorem ipsum</a></li>
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </AccordionCard>

              <AccordionCard isActive={(currentActive === "3")}>
                <Accordion.Toggle as={Card.Header} eventKey="3">
                Lorem ipsum
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    <ul>
                      <li><a href="#">Lorem ipsum</a></li>
                      <li><a href="#">Lorem ipsum</a></li>
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </AccordionCard>

              <AccordionCard isActive={(currentActive === "4")}>
                <Accordion.Toggle as={Card.Header} eventKey="4">
                Lorem ipsum
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="4">
                  <Card.Body>
                    <ul>
                      <li><a href="#">Lorem ipsum</a></li>
                      <li><a href="#">Lorem ipsum</a></li>
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </AccordionCard>

            </Accordion>
          </AccordionLinksList>
        </div>
      </FooterContent>

      <hr />

      <a id="linkedinFooterLogo" href="https://www.linkedin.com/company/ibra-ai/" target="_blank"><img src="assets/icons/linkedin.svg" alt="" /></a>
    </Container>
  );
};