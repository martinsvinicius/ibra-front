import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  height: 100vh;

  section {
    width: 100%;
  }

  .blue-200 {
    color: var(--blue-200);
  }

  .blue-active {
    color: var(--blue-active);
  }
`;

export const AdvantagesSection = styled.section`
  margin-top: 5rem;
  
  h2 {
    text-align: center;
    font-weight: 700;
    font-size: 3rem;
  }
`;

export const Advantages = styled.div`
  max-width: 1256px;

  margin: 3.5rem auto;
`;

export const Advantage = styled.div`
  display: grid;
  margin: 2rem 0;
  align-items: center;
  grid-template-columns: 1fr 10rem 1fr;

  div.advantageDescription {
    text-align: center;

    strong {
      font-weight: 700;
      color: var(--black-600);
      font-size: 2.5rem;
    }

    p {
      margin-top: 2rem;
      font-size: 1.4rem;
      color: rgba(63, 61, 86, 0.65);

      span.blue-active {
        color: var(--blue-active);
      }
    }
  }

  div.advantageNumber {
    height: 5rem;
    width: 5rem;
    line-height: 5rem;

    margin: 0 auto;

    text-align: center;
    color: #fff;
    font-weight: bold;
    font-size: 2.5rem;
    background-color: #3EAEE0;
    border-radius: 50%;
  }

  div.advantageImage {
    padding: 2rem 1.8rem;
    background: #FFFFFF;
    border-radius: 1rem;

    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.27);
  }
`;

export const ContactUsSection = styled.section`
  margin-top: 5rem;

  display: grid;
  gap: 5rem;
  grid-template-columns: 1fr 1fr;
  align-content: center;

  img {
    display: block;
    margin-left: auto;
  }

  div {
    align-self: center;
    color: #fff;
    min-height: 80%;
    padding: 1.2rem 4rem;
    background: var(--background-blue);

    display: flex;
    flex-direction: column;
    justify-content: center;

    border-radius: 1.2rem 0 0 1.2rem;
    
    h3 {
      font-weight: 700;
      font-size: 3rem;
    }

    p {
      font-weight: 700;
      text-align: justify;
      font-size: 1.2rem;

      margin: 1.8rem 0;
    }

    button {
      max-width: 14rem;
      height: 2.8rem;
      line-height: 2.8rem;
      color: var(--blue-active);
      font-weight: bold;
      background: #FFFFFF;

      font-size: .95rem;

      padding: 0 3rem;

      border: none;
      border-radius: .3rem;

      transition: all .2s;

      &:hover {
        background: var(--blue-active);
        color: #fff;
      }
    }
  }
`;