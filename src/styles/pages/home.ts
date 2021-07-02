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

  padding: 0 3rem;
`;

export const Advantages = styled.div`
  max-width: 1256px;

  margin: 3.5rem auto;
`;

export const Advantage = styled.div`
  display: grid;
  margin: 2rem 0;
  align-items: center;
  grid-template-columns: 40% 20% 40%;

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
    background-color: #3eaee0;
    border-radius: 50%;

    @media(max-width: 992px) {
      display: none;
    }
  }

  div.advantageImage {
    padding: 2rem 1.8rem;
    background: #ffffff;
    border-radius: 1rem;

    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.27);

    img {
      width: 100%;
    }
  }

  @media(max-width: 992px) {
    display: flex;
    flex-direction: column;

    div.advantageImage {
      padding: .7rem .7rem;
      border-radius: 1rem;

      img {
        border-radius: 1rem;
      }
    }
  }
`;

export const ContactUsSection = styled.section`
  margin-top: 5rem;

  display: grid;
  gap: 5rem;
  grid-template-columns: 1fr 1fr;
  align-content: center;

  @media(max-width: 992px) {
    display: none !important;
  }

  img {
    display: block;
    margin-left: auto;
  }

  @media (max-width: 1420px) {
    img {
      width: 80%;
      height: auto;
    }
  }

  div {
    align-self: center;
    color: #fff;
    min-height: 80%;
    padding: 2rem 4rem;
    background: var(--background-blue);

    display: flex;
    flex-direction: column;
    justify-content: center;

    border-radius: 1.2rem 0 0 1.2rem;

    h3 {
      font-weight: 700;
      font-size: 2.5rem;
    }

    p {
      font-weight: 700;
      text-align: justify;
      font-size: 1.2rem;

      margin: 1.8rem 0;
    }

    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      max-width: 14rem;
      height: 2.8rem;
      color: var(--blue-active);
      font-weight: bold;
      background: #ffffff;

      font-size: 0.95rem;
      
      text-decoration: none;

      padding: 0 3rem;

      border: none;
      border-radius: 0.3rem;

      transition: all 0.2s;

      &:hover {
        background: var(--blue-active);
        color: #fff;
      }
    }
  }
`;

export const VideoSection = styled.section`
  max-width: 1256px;
  margin: 10rem auto;
  padding: 0 2rem;

  h2 {
    text-align: center;
    font-weight: 700;
    font-size: 3rem;

    margin-bottom: 4rem;
  }
`;

export const FormSection = styled.section`
  width: 100%;
  position: relative;

  background: url("assets/images/bg-form-section-desktop.png") no-repeat;
  background-position: left;
  background-size: cover;

  @media(max-width: 992px) {
    background-image: none;
    background-color: #FFFFFF;
  }
`;

export const FormContent = styled.section`
  max-width: 1256px;
  margin: 0 auto 10rem;
  padding: 8rem 2rem;

  display: flex;
  justify-content: space-between;
  
  div {
    display: flex;
    flex-direction: column;

    p {
      text-align: justify;
      width: 75%;
      margin-top: 1rem;
      font-size: 1.2rem;
      font-weight: 700;
      color: rgba(63, 61, 86, 0.65);
    }
  }

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    width: 100%;

    input[type=text], textarea, input[type=number] {
      height: 3rem;

      width: 90%;
      @media(max-width: 992px) {
        width: 100%;
      }
      
      padding: 1.8rem;
      margin-bottom: 1rem;

      border: 0;
      border-radius: 15px;

      background: var(--background-gray);
    }

    div.checkbox-container {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-top: .6rem;

      input[type=checkbox] {
        height: 20px;
        width: 20px;
        margin-right: 1rem;
      }

      span {
        color: #828282;
        font-size: 18px;
      }
    }

    p {
      margin-top: 1rem;
      color: #828282;
      width: 90%;
      font-size: 14px;
    }

    textarea {
      resize: none;
      padding-top: 1rem;
      height: 5.6rem !important;
    }

    button[type=submit] {
      background: #2D9CDB;
      color: #FFFFFF;
      font-weight: bold;
      text-transform: uppercase;

      height: 3rem;
      line-height: 3rem;
      padding: 0 4rem;
      margin-top: .8rem;

      border: 0;
      border-radius: .5rem;

      transition: filter .2s;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }

  input::placeholder, textarea::placeholder {
    color: #828282;
  }

  @media(max-width: 992px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;

    div {
      text-align: center;

      p {
        text-align: center !important;
        margin: 1rem auto 2rem;
      }
    }

    form {
      margin: 0 auto;

      button[type=submit] {
        display: flex;
        height: 4rem;
        justify-content: center;
        align-items: center;
        line-height: 0;
        margin-top: 1rem;

        width: 100%;
      }   
    }
  }
`;