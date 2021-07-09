import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  width: 100%;

  input[type='text'],
  textarea,
  input[type='number'] {
    height: 3rem;

    width: 90%;
    @media (max-width: 992px) {
      width: 100%;
    }

    padding: 1.8rem;
    margin-bottom: 1rem;

    border: 0;
    border-radius: 15px;

    background: var(--background-gray);
  }

  div.checkbox-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 0.6rem;

    input[type='checkbox'] {
      height: 20px;
      width: 20px;
      margin-right: 1rem;
    }

    span {
      color: #828282;
      font-size: 18px;
    }
  }

  p {
    margin-top: 1rem;
    color: #828282;
    width: 90%;
    font-size: 14px;
  }

  textarea {
    resize: none;
    padding-top: 1rem;
    height: 5.6rem !important;
  }

  button[type='submit'] {
    background: #2d9cdb;
    color: #ffffff;
    font-weight: bold;
    text-transform: uppercase;

    height: 3rem;
    line-height: 3rem;
    padding: 0 4rem;
    margin-top: 0.8rem;

    border: 0;
    border-radius: 0.5rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  input::placeholder,
  textarea::placeholder {
    color: #828282;
  }

  @media (max-width: 992px) {
    margin: 0 auto;

    button[type='submit'] {
      display: flex;
      height: 4rem;
      justify-content: center;
      align-items: center;
      line-height: 0;
      margin-top: 1rem;

      width: 100%;
    }
  }
`;
