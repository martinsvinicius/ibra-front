import styled from 'styled-components';

export const Container = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    border-radius: 50%;
    max-width: 80%;
    height: auto;
    position: relative;
  }

  strong {
    display: block;
    margin: 2rem 0 1rem;
    color: var(--black-600);
    font-weight: 700;
    font-size: 1.4rem;
  }

  p {
    text-align: center;
    font-size: 1rem;
    color: rgba(63, 61, 86, 0.65);
    max-width: 80%;
  }

  a {
    display: flex;
    align-items: center;
    color: #0096D8;
    margin-top: 1.5rem;

    font-weight: 500;

    transform: all .2s;

    span {
      margin-left: .5rem;
    }

    &:hover {
      font-weight: 700;
    }
  }
`;

// export const ImageContainer = styled.div`
// //   display: block;
// //   border-radius: 50%;
// //   width: 80%;
// //   min-height: 300px;
// //   position: relative;

// //   background: url('https://avatars.githubusercontent.com/u/49157711?v=4');
// //   background-repeat: no-repeat;
// //   background-size: cover;
// //   background-position: center;

// //   &::before {
// //     content: '';
// //     height: 80px;
// //     transform: translateX(0%);
// //     left: 35%;

// //     margin-bottom: -1.2px;

// //     background: transparent;
// //     background: url("assets/images/linkedin-bg.svg") no-repeat;
// //     background-position: center;
// //     background-size: 600px 90px;
// //     width: 100%;

// //     border-radius: 50%;
// //     position: absolute;
// //     bottom: 0;
// //     left: 0;
// //   }
// // `;

// // // &::before {
// // //   content: 'teste';
// // //   height: 3px;

// // //   background: var(--blue-active);
// // //   width: 100%;

// // //   position: absolute;
// // //   bottom: 1px;
// // //   left: 0;
// // // }
// `;