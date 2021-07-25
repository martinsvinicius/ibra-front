import styled from 'styled-components';

export const Container = styled.div`
  @media (max-width: 1112px) {
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
  position: relative;

  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  border: 0;
  border-radius: 0.8rem;

  width: 600px;

  @media (max-width: 1140px) {
    width: 500px;
  }

  @media (max-width: 550px) {
    width: 450px;
  }

  @media (max-width: 450px) {
    width: 350px;
  }

  label {
    cursor: pointer;
    height: 100%;
    font-size: 1.1rem;
    line-height: 4rem;
    color: #828282;
  }

  padding: 0 1.3rem;

  input::placeholder {
    color: #828282;
  }

  input {
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0;
    font-size: 1.1rem;
    border: 0;
    outline: 0;
    cursor: pointer;
  }

  img {
    transition: all 0.2s;
    &:hover {
      transform: scale(1.05);
    }
  }
`;
