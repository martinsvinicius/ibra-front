import styled from 'styled-components';

export const Container = styled.div`
  padding: 1.5rem;
  background: #FFFFFF;
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.27);
  border-radius: .5rem;

  margin: 0 auto;

  div {
    min-height: 570px;
  }

  @media(max-width: 980px) {
    div {
      min-height: 400px;
    }
  }

  @media(max-width: 800px) {
    div {
      max-height: 300px;
    }
  }
`;

export const PlayVideoIcon = styled.img`
  transition: all .2s;

  &:hover {
    transform: scale(1.2);
  }
`;