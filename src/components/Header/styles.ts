import styled from 'styled-components';

export const StyledHeader = styled.header`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;

  a.styled-link {
    font-weight: 400;
    font-size: 1.05rem;

    color: var(--gray-200) !important;

    transition: all 0.2s;

    &:hover {
      color: var(--blue-active) !important;
    }
  }

  a#get-started-link {
    text-transform: uppercase;
    color: var(--blue-active) !important;
    font-weight: bold;
  
    &:hover {
      transform: scale(1.1);
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

  .language-switch {
    display: flex;
    align-items: center;
    padding: 0 !important;

    margin-left: 1.5rem;

    button {
      border: 0;
      font-weight: 400;
      background: transparent;
      font-size: 1.05rem;
      color: var(--gray-200);

      transition: all .2s;

      &.active {
        color: #69B2E2;
        font-weight: bold;
      }

      &:hover {
        filter: brightness(.9);
      }
    }

    span {
      display: inline-block;
      margin: 0 10px;
      height: 5px;
      width: 5px;
      background: #9FC9F0;
      border-radius: 50%;
    }

    @media(max-width: 990px) {
      margin-left: 0;
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