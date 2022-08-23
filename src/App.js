import React, { Fragment } from "react";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";

import NavBar from "./Components/NavBox/NavGrid";
import Footer from "./Components/FooterBox/StyledFooter"

const Paragraph = styled.h1`
    height: 20vh;
    font-size: 1.2rem;
    padding: 0.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: whitesmoke;
    background-color:red;
`;

const App = () => {
  return (
      <Fragment>
          <GlobalStyle />
          <NavBar />
          <Paragraph>test page</Paragraph>
          <Footer />
      </Fragment>
  );
};
export default App;