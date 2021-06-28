import styled from 'styled-components';

export const Container = styled.div`
  section {
    background: #ffffff;
  }

  h2 {
    text-align: center;
    font-size: 3rem;
    font-weight: 900;
    color: var(--black-600);

    span:first-child {
      color: var(--blue-200);
    }

    span:last-child {
      color: var(--blue-active);
    }
  }

  div {
    display: grid;
    align-items: center;
    align-content: center;
    gap: 4rem;
    grid-template-columns: 1fr 1fr;

    margin-top: 1.5rem;

    .heroImageContainer {
      display: block;

      img {
        display: block;
        margin-left: auto;

        width: 40rem;
        height: 40rem;
      }

      @media (max-width: 1420px) {
        img {
          width: 80%;
          height: auto;
        }
      }
    }

    .heroDescription {
      display: block;

      p {
        height: 12rem;
        display: block;
        width: 70%;

        text-align: justify;

        color: #3f3d5690;

        span {
          color: var(--blue-active);
        }

        font-size: 1.125rem;

        strong {
          display: block;
          margin-bottom: 1rem;
          text-transform: uppercase;
          color: var(--blue-active);
          font-weight: bold;
          font-size: 1.4rem;
        }

        a {
          display: flex;
          align-items: center;
          color: var(--black-600);
          font-weight: 900;
          margin-top: 2.2rem;

          .addIcon {
            margin-right: 0.5rem;
          }
        }
      }
    }
  }
`;

export const Wave = styled.div`
  width: 100%;
  margin: 0 !important;
  height: 172px;
  background: url("assets/images/wave.png") no-repeat;
  background-size: cover;
  background-position: center;
`;
