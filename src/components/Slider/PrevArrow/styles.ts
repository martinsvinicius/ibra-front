import styled from 'styled-components';

export const Container = styled.div`
  height: 4rem;
  position: absolute;
  width: 2rem;
  cursor: pointer;
  top: 100px !important;

  transition: transform .2s;

  background: url(assets/icons/arrow-prev.svg) no-repeat scroll 0 0;
  background-size: contain;
  left: -33px;

  margin-top: 4rem;

  @media (max-width: 780px) {
    margin-top: 8rem;
  }

  &:hover {
    transform: scale(1.1);
  }
`;