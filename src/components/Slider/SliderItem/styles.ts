import styled from 'styled-components';

export const Container = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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
    color: #0096d8;
    margin-top: 1.5rem;

    font-weight: 500;

    transform: all 0.2s;

    span {
      margin-left: 0.5rem;
    }

    &:hover {
      font-weight: 700;
    }
  }
`;

export const ImageContainer = styled.div`
  border-radius: 0;
  display: inline-block;

  div {
    position: relative;
    padding: 0;
    cursor: pointer;

    display: inline-block;
    overflow: hidden;
    border-radius: 50%;

    img {
      width: 340px;
      height: 340px;
    }

    @media (max-width: 1250px) {
      img {
        width: 300px;
        height: 300px;
      }
    }

    span {
      position: absolute;
      color: #ffffff;

      border-radius: 50%;

      left: 0;
      text-align: center;
      width: 100%;
      background: rgba(0, 150, 216, 0.7);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
      bottom: 0;
      padding: 20px 0;

      img {
        max-height: 40px;
      }
    }
  }
`;

// export const ImageContainer = styled.div`
//   position: relative;

//   img#user-img {
//     margin: 0 auto;
//     border-radius: 50%;
//     max-width: 80%;
//     height: auto;
//   }

//   img#user-linkedin {
//     border-radius: 120px;
//   }

//   button {
//     position: absolute;
//     bottom: -54.5%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     -ms-transform: translate(-50%, -50%);
//   }
// `;

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
