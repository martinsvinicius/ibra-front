import styled from 'styled-components';

export const Container = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  strong {
    display: block;
    margin: 2rem 0 1rem;
    color: var(--black-600);
    font-weight: 700;
    font-size: 1.4rem;
  }

  p {
    text-align: center;
    font-size: 1rem;
    color: rgba(63, 61, 86, 0.65);
    max-width: 80%;
  }

  a {
    display: flex;
    align-items: center;
    color: #0096d8;
    margin-top: 1.5rem;

    font-weight: 500;

    transform: all 0.2s;

    span {
      margin-left: 0.5rem;
    }

    &:hover {
      font-weight: 700;
    }
  }
`;

export const ImageContainer = styled.div`
  border-radius: 0;
  display: inline-block;

  div {
    position: relative;
    padding: 0;

    display: inline-block;
    overflow: hidden;
    border-radius: 50%;

    img {
      width: 340px;
      height: 340px;
    }

    @media (max-width: 1250px) {
      img {
        width: 300px;
        height: 300px;
      }
    }

    @media(max-width: 375px) {
      img {
        width: 240px;
        height: 240px;
      }
    }

    span {
      position: absolute;
      color: #ffffff;
      cursor: pointer;

      border-radius: 50%;

      left: 0;
      text-align: center;
      width: 100%;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
      bottom: 0;
      /* padding: 20px 0; */

      transition: all .2s;

      img {
        max-height: 40px;
        transition: all .2s;
        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
`;