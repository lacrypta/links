import { motion } from "framer-motion";
import styled from "styled-components";

const Container = styled.div`
  ${(props) => `
  background-color: ${props.theme.cover_color};
  `}
`;

const MotionContainer = motion(Container);

interface CoverProps {
  children?: React.ReactNode;
}

export const Cover = ({ children }: CoverProps) => {
  return (
    <MotionContainer
      className='relative top-0 sm:w-[800px] sm:mx-auto sm:max-w-lg h-[58px] rounded-t-lg z-10 flex flex-row justify-between p-2'
      initial={{ translateY: "100%" }}
      animate={{ translateY: "10%" }}
      transition={{
        delay: 0.9,
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      {children}
    </MotionContainer>
  );
};

export default Cover;
