import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  .blue-200 {
    color: var(--blue-200);
  }

  .blue-active {
    color: var(--blue-active);
  }
`;

export const Content = styled.section`
  max-width: 1534px;
  margin: 5rem auto;
  padding: 0 3rem;

  div.comment {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 3rem;

    h1 {
      font-weight: 700;
      color: #3f3d56;
      font-size: 3rem;
      max-width: 40%;
    }

    @media (max-width: 1112px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;

      h1 {
        max-width: 100%;
        text-align: center;
        margin-bottom: 2rem;
      }

      input {
        width: 100%;
      }
    }
  }

  div.commentStatus {
    background: #ffffff;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 2rem;

    margin: 2rem 0;
    padding: 2rem 0 20%;

    div.statusPoints {
      display: grid;
      align-items: center;
      grid-template-columns: 20% 30% 20%;
      gap: 3rem;

      max-width: 90%;
      margin: 0 auto;

      @media (max-width: 995px) {
        display: flex !important;
        flex-direction: column;
        align-items: center;

        div.statusItem {
          width: 60%;
        }

        div.statusItem > span {
          text-align: center;
          width: 100%;
          text-transform: uppercase;
        }
      }

      @media (max-width: 550px) {
        div.statusItem {
          width: 100%;
        }
      }
    }

    div.statusItem {
      span {
        display: inline-block;
        margin-bottom: 1rem;
        color: #757575;
        font-weight: 700;
        font-size: 1.1rem;
      }

      div {
        font-family: 'Ruda', sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #8fdae4;
        color: #ffffff;
        font-size: 1.4rem;
        border-radius: 0.6rem;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);

        padding: 1rem 2.2rem;

        span {
          font-size: 2.5rem;
          margin: 0 1rem 0 0;
          color: #ffffff;
          font-weight: 400;
          text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        }
      }
    }

    div.totalStatus {
      display: flex;
      max-width: 90%;
      margin: 2rem auto;

      div.total {
        div {
          font-size: 1.9rem;

          span {
            font-size: 3rem;
          }
        }
      }

      p {
        align-self: flex-end;
        margin-bottom: 0;
        margin-left: 2rem;
        color: #757575;
        font-weight: 500;
        font-size: 1.05rem;

        span {
          font-weight: 700;
        }
      }

      @media (max-width: 995px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;

        margin: 3rem auto;

        p {
          margin: 2rem 0 0 !important;
          text-align: center;
          width: 100%;
          text-transform: uppercase;
        }

        div.total {
          width: 60%;
          > span {
            text-align: center;
            width: 100%;
            text-transform: uppercase;
          }
        }
      }

      @media (max-width: 550px) {
        div.total {
          width: 100%;
        }
      }
    }
  }

  .inputLabel {
    margin-top: 1.5rem;
    margin-left: 0.2rem;
    font-size: 1.15rem;
    font-weight: 700;
    color: #3f3d56;
    cursor: pointer;

    transition: all 0.2s;

    strong {
      color: var(--blue-active);

      & + strong {
        text-transform: uppercase;
        color: #2e70aa;
      }
    }

    &:hover {
      margin-left: 0.5rem;
    }
  }

  #emptyData {
    margin: 4rem auto 0;
    text-align: center;

    font-weight: 500;
  }

  .large {
    @media (max-width: 995px) {
      width: 60%;
      margin: 0 auto;
    }
  }
`;
