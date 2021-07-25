import styled from 'styled-components';

export const Container = styled.div`
  span {
    display: inline-block;
    margin-bottom: 1rem;
    color: #757575;
    font-weight: 700;
    font-size: 1.1rem;
  }

  div {
    font-family: 'Ruda', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    font-size: 1.4rem;
    border-radius: 0.6rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);

    padding: 1rem 2.2rem;

    span {
      font-size: 2.5rem;
      margin: 0 1rem 0 0;
      color: #ffffff;
      font-weight: 400;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    }
  }

  @media (max-width: 995px) {
    width: 100%;

    > span {
      text-align: center;
      width: 100%;
      text-transform: uppercase;
    }
  }

  @media (max-width: 550px) {
    width: 100%;
  }
`;
