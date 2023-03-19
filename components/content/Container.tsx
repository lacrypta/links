import tw from "tailwind-styled-components";
import styled from "styled-components";
import Background from "../layout/Background";

const ContainerWithCustomCss = styled.div``;

const TwContainer = tw(ContainerWithCustomCss)`
  relative
  min-h-screen
  w-screen
  py-12 pt-20 px-6

  flex
  flex-col
  justify-center
  
  overflow-hidden

  bg-gray-50
`;

const Container = ({ children }: any) => {
  return (
    <TwContainer>
      <Background />
      {children}
    </TwContainer>
  );
};

export default Container;
