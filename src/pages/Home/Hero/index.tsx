import { Container, Clip } from './styles';

import { IoMdAddCircle } from 'react-icons/io';

export function Hero() {
  return (
    <Container>
      <h2>
        We <span>exist</span> to protect your <br /> company and
        <span> your clients</span>
      </h2>

      <div>
        <div className="heroImageContainer">
          <img src="assets/hero.svg" alt="Hero image" />
        </div>

        <div className="heroDescription">
          <p>
            <strong>consectetur adipiscing elit</strong>
            Lorem ipsum dolor sit amet, <b>consectetur</b> adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore
            <span>
              {' '}
              <b>magna aliqua</b>
            </span>
            . Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
            <a href="#">
              <IoMdAddCircle size={40} color="#3EAEE0" className="addIcon" />
              Duis aute irure
            </a>
          </p>
        </div>
      </div>

      <Clip src="assets/icons/clip.svg" />
    </Container>
  );
}
