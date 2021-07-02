import styled from 'styled-components';

export const Container = styled.div`
  @media(max-width: 1112px) {
    width: 80%;
  }

  &:focus {
    outline-offset: 0px;
    outline: -webkit-focus-ring-color auto 1px;
  }

  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3.5rem;

  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  border: 0;
  border-radius: .8rem;

  width: 600px;

  @media(max-width: 1140px) {
    width: 500px;
  }

  @media(max-width: 550px) {
    width: 450px;
  }

  @media(max-width: 450px) {
    width: 350px;
  }

  padding: 0 1.3rem;

  input::placeholder {
    color: #828282;
  }

  input {
    width: 100%;
    height: 100%;
    margin-right: .8rem;
    font-size: 1.1rem;
    border: 0;
    outline: 0;
  }

  button {
    border: 0;
    background: #FFFFFF;

    transition: all .2s;
    
    img {
      transition: all .2s;
    }

    &:hover {
      transform: scale(1.05);
    }
  }
`;
