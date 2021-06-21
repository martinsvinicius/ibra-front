import styled from 'styled-components';

export const Container = styled.div`
  h2 {
    text-align: center;
    font-size: 2rem;
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

    margin: 1.5rem 0;

    .heroImageContainer {
      display: block;

      img {
        display: block;
        margin-left: auto;
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

export const Clip = styled.img`
  display: block;
  margin: 0 auto;
  margin-top: 9.5rem;
  text-align: center;
`;