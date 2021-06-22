import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  background: #FFFFFF;
`;

export const HeaderContent = styled.div`
  display: flex;
  max-width: 1632px;

  margin: 0 auto;

  padding: 1.5rem 2rem;

  justify-content: space-between;

  img {
    width: 10rem;
    height: 12rem;
  }
`;

export const Nav = styled.nav`
  flex: 0.9;
  margin-top: -3rem;
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
      font-weight: 500;
      font-size: 1.1rem;
    }
  }
`;
