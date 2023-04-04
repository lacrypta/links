import { motion } from "framer-motion";
import styled from "styled-components";
import RoundButton from "./RoundButton";

const Container = styled.div`
  ${(props) => `
  background-color: ${props.theme.cover_color};
  `}
`;

const MotionContainer = motion(Container);

export const Cover = () => {
  return (
    <MotionContainer
      className='relative top-0 sm:w-[800px] sm:mx-auto sm:max-w-lg h-28 rounded-t-lg z-10'
      initial={{ translateY: "100%" }}
      animate={{ translateY: "10%" }}
      transition={{
        delay: 0.9,
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <RoundButton className='absolute top-2 right-2' />
    </MotionContainer>
  );
};

export default Cover;
