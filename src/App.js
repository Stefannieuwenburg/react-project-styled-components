import {
    GlobalStyle,
    GreenButton,
    Button,
    ButtonProps,
    HeaderContainer,
    HeaderTitle,
} from "./GlobalStyle";
import Footer from "./Components/Footer";
import FooterDemo from "./Components/FooterDemo";
import FooterGrid from "./Components/FooterGrid";


export default function App() {
  return (
    <>
    <HeaderContainer>
      <GlobalStyle/>
          <HeaderTitle>Style your components in react whith styled-components</HeaderTitle>
          <br />
          <ButtonProps color="red">Click this button</ButtonProps>
      <ButtonProps color="violet">Click this button</ButtonProps>
      <Button>click me</Button>
      <GreenButton>click me</GreenButton>
      </HeaderContainer>
      <Footer />
      <FooterDemo />
      <FooterGrid />
    </>
  );
}


