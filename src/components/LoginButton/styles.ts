import styled from 'styled-components';

export const Button = styled.button`
  height: 2.4rem;
  
  padding: 0 3.5rem;

  line-height: 2.4rem;
  text-align: center;

  font-size: 1rem;
  font-weight: 700;
  color: var(--blue-active);

  border: 1px solid var(--blue-active);
  background: #fff;
  border-radius: .6rem;

  transition: all .2s;

  &:hover {
    background: var(--blue-active);
    color: #fff;
  }
`;