import React, { Fragment } from "react";
import GlobalStyle from "./GlobalStyle";


import GridDemo from "./Components/GridComponents/GridDemo"


const App = () => {
    return (
    <>
      <Fragment>
          <GlobalStyle />
                <p style={{ fontSize: 30, color: "gray" }}>test page</p>
                <GridDemo />
      </Fragment>
    </>
  );
};
export default App;


