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
      className='relative top-0 sm:w-[800px] sm:mx-auto sm:max-w-lg h-[54px] rounded-t-lg flex flex-row justify-between p-2 z-40'
      initial={{ paddingTop: "0px", paddingBottom: "0px", maxHeight: "0px" }}
      animate={{ paddingTop: "9px", paddingBottom: "9px", maxHeight: "200px" }}
      transition={{
        delay: 0.45,
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
