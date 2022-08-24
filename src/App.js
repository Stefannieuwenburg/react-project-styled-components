import React, { Fragment } from "react";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";

import Navbar from "./Components/NavComponents/NavBarTwo"

const Container = styled.div`
    background: #67bc98;
    height: 100vh;
`;
const TestPage = styled.div`
    background-color: #282c34;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    text-align: center;
    height: 100vh;
`;

const App = () => {
  return (
      <Fragment>
          <GlobalStyle />
          <Navbar />
          <Container>test</Container>
          <TestPage>Test Page</TestPage>
      </Fragment>
  );
};
export default App;