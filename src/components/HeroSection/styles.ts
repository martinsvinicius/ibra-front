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

    @media(max-width: 600px) {
      font-size: 2.5rem;
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

        .addIcon {
          margin-right: 0.5rem;
        }
      }

      p {
        display: block;
        width: 70%;

        text-align: justify;

        color: #3f3d5690;

        span {
          color: var(--blue-active);
        }

        font-size: 1.125rem;
      }
    }
  }

  @media(max-width: 992px) {
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    img {
      margin: 0 auto !important;
      padding: 0 !important;
    }

    .heroDescription {
      max-width: 80%;
      margin: 0 auto;

      p, strong, a {
        width: 80% !important;
        margin: 0 auto !important;
      }

      strong {
        margin-bottom: 1rem !important;
      }

      p {
        padding: 0;
        text-align: left !important;
        margin-bottom: 2rem !important;
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
