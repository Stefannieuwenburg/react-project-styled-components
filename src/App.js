import { ButtonProps } from "./Components/ButtonProps.style";
import { AppContainer } from "./Components/Container.style";
import { Button,GreenButton} from "./Components/Button.style"
import { GlobalStyle } from './GlobalStyle.style'

export default function App() {
  return (
    
    <AppContainer>
      <GlobalStyle/>
          <h1>Style your components in react whith styled-components</h1>
          <br />
          <ButtonProps backgroundColor="red">Click this button</ButtonProps>
      <ButtonProps backgroundColor="violet">Click this button</ButtonProps>
      <Button>click me</Button>
      <GreenButton>click me</GreenButton>
      </AppContainer>
  );
}


