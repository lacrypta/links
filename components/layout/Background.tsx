import styled from "styled-components";

const Container = styled.div`
  .blocks {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .blocks li {
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(200, 200, 200, 0.2);
    animation: animate 25s linear infinite;
    bottom: -150px;
  }

  .blocks li:nth-child(1) {
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
  }

  .blocks li:nth-child(2) {
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 12s;
  }

  .blocks li:nth-child(3) {
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
  }

  .blocks li:nth-child(4) {
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
  }

  .blocks li:nth-child(5) {
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
  }

  .blocks li:nth-child(6) {
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
  }

  .blocks li:nth-child(7) {
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 7s;
  }

  .blocks li:nth-child(8) {
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
  }

  .blocks li:nth-child(9) {
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
  }

  .blocks li:nth-child(10) {
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
  }

  @keyframes animate {
    0% {
      transform: translateY(0) rotate(0deg);
      opacity: 1;
      border-radius: 0;
    }

    100% {
      transform: translateY(-1000px) rotate(720deg);
      opacity: 0;
      border-radius: 50%;
    }
  }

  ${(props) => `
    background-color: ${props.theme.background_color}    
  `}
`;

// Nice gradient Background

// background-image: linear-gradient(
//     -45deg,
//     rgba(59,173,227,1) 0%,
//     rgba(87,111,230,1) 25%,
//     rgba(152,68,183,1) 51%,
//     rgba(255,53,127,1) 100%
//   )

export const Background = () => {
  return (
    <Container className='absolute inset-0'>
      <ul className='blocks'>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </Container>
  );
};

export default Background;
