import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --PageWhite:#f9f9fb;
    --Black:#F0F8FF;
    --White:#FFFFFF;
    --primary:#ddd;
    --dark:#333;
    --light:#fff;
    --Orange:#FFA500;
    --shadow:0 1px 5px rgba(104,104,104,0.8)
    /* Grey Colors */
    --Gainsboro:#DCDCDC;	
    --LightGray:#D3D3D3; 	
    --Silver:#C0C0C0; 	
    --DarkGray:#A9A9A9;	 	
    --DimGray:#696969;	 	
    --Gray:#808080; 	
    --LightSlateGray:#778899; 	
    --SlateGray:#708090	; 	
    --DarkSlateGray:#2F4F4F	 ;	
    --Black:#000000;
    /* Extra Colors */
    --main-yellow: #cbb470f2;
    --main-black: #272829;
    --main-white: #dfddd6;
    --main-font: 'Roboto Mono';
    --mainTransition: all 0.6s ease-in-out;
    --mainSpacing: 1,2rem;
    --lightShadow: 3px 8px 3px 1px rgba(0, 0, 0, 0.5);
    --darkShadow: 5px 10px 8px 2px rgba(0, 0, 0, 0.5);
}
  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-family: 'Roboto Mono', monospace, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
  }
  body {
    min-height: 100vh;
    background-color: var(--PageWhite);
}
`;
export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: grey;
    color: white;
    margin: 1.2rem;
    padding:1.2rem;
`;
export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: grey;
    color: white;
    margin: 1.2rem;
    padding: 1.2rem;
`;

export const HeaderTitle = styled.h1`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: black;
    font-size: 2.1rem;
    letter-spacing: 2px;
    padding: 0.3rem;
    
`;

export const ParagraphStyled = styled.p`
    font-size: 1.2rem;
    margin: 1.2rem;
    color: var(--DarkGray);
`;

export const Paragraph = styled.p`
    font-size: 1.2rem;
    padding: 0.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
`;

export const Button = styled.button`
    padding: 10px 30px;
    background-color: var(--White);
    color: var(--Black);
    font-size: 0.9rem;
    cursor: pointer;
    border: none;
    outline: none;
    border-radius: 20px;
    transition: 0.6s;
    &:hover {
        background-color: var(--Silver);
        transition: 0.6s;
    }
`;
export const ButtonStyled = styled.button`
    border-radius: 20px;
    width: 200px;
    height: 50px;
    cursor: pointer;
    transition: 0.6s;
    background-color: blue;
    &:hover {
        background-color: var(--Silver);
        transition: 0.6s;
    }
`;
export const GreenButton = styled.button`
    border-radius: 20px;
    width: 200px;
    height: 50px;
    background-color: Green;
    cursor: pointer;
    transition: 0.6s;
    &:hover {
        background-color: var(--Silver);
        transition: 0.6s;
    }
`;
export const ButtonProps = styled.button`
    border-radius: 20px;
    width: 200px;
    height: 50px;
    background-color: ${(props) => props.color};
    cursor: pointer;
    transition: 0.6s;
    &:hover {
        background-color: var(--Silver);
        transition: 0.6s;
    }
`;


