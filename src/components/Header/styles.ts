import styled from 'styled-components';

export const StyledHeader = styled.header`
  background: #ffffff;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;

  a.styled-link {
    font-weight: bold;
    font-size: 1.1rem;

    color: var(--gray-200);

    transition: all 0.2s;

    &:hover {
      color: var(--blue-active) !important;
    }
  }

  div.links-container {
    margin: 0 auto;
  }

  // responsive paddings
  div.container {
    @media (min-width: 1375px) {
      max-width: 1632px;

      a.styled-link + a {
        padding-left: 5rem;
      }
    }

    @media (max-width: 1375px) {
      a.styled-link + a {
        padding-left: 2rem;
      }
    }

    @media (max-width: 1199px) {
      a.styled-link + a {
        padding-left: 1rem;
      }
    }
  }

  @media(max-width: 992px) {
    div.links-container {
      a.styled-link {
        padding-left: 0 !important;
        font-size: 1.2rem;
      }

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const LogginButtonContainer = styled.div`
  margin-left: auto;

  @media(max-width: 992px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-top: 1rem;
  }
`;