import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  max-width: 1632px;

  margin: 0 auto;

  padding: 1.5rem 2rem;

  justify-content: space-between;

  img {
    width: 9.5rem;
    height: 12rem;
  }
`;

export const Nav = styled.nav`
  flex: 0.9;
  display: flex;

  align-items: center;
  justify-content: space-between;

  ul {
    list-style: none;
    display: flex;

    li a.active {
      color: var(--blue-active);
    }

    li {
      margin: 0 3rem;

      &:first-child {
        margin-left: 0;
      }
    }

    li a {
      font-weight: 400;
      font-size: 1.1rem;
    }
  }
`;
