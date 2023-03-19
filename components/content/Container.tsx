import tw from "tailwind-styled-components";
import styled from "styled-components";

const ContainerWithCustomCss = styled.div`
  ${(props) => `background-color: ${props.theme.background_color}`}
`;

const Container = tw(ContainerWithCustomCss)`
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

export default Container;
