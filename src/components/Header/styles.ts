import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  background: #ffffff;
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

    li {
      margin: 0 3rem;
    }

    li a {
      font-weight: 500;
      font-size: 1.1rem;

      transition: all .2s;

      &:hover {
        color: var(--blue-active);
      }
    }

    @media (max-width: 1995px) {
      li {
        margin: 0 2rem;
      }
    }

    @media (max-width: 1310px) {
      li {
        margin: 0 1rem;
      }
    }

    li:first-child {
      margin-left: 0;
    }
  }
`;
