import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1256px;

  margin: 4rem auto;
  padding: 0 3rem 3rem;

  div.slick-slider {
    width: 100%;
    z-index: 1;
    margin: 2rem auto;
  }

  h2 {
    text-align: center;
    font-weight: 700;
    font-size: 3rem;

    span.light {
      color: var(--blue-200);
    }

    span.strong {
      color: var(--blue-active);
    }
  }
`;
