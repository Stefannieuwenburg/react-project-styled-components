// npm i --save-dev @types/styled-components

import styled, { css } from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    @import url("https://fonts.googleapis.com/css2?family=Karla:wght@200;400&display=swap");
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-family: "Karla", "Segoe UI", "Roboto",'Roboto Mono', monospace,
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    scroll-behavior: smooth;
}
:root{
    /* ---Page Color--- */
    --Main-Color:#d3ad7f;
    --Black-Color:#000000;
    --White-Color:#fff;
    --Gray-Color: rgba(202, 200, 200, 0.721);
    --Border:1.2rem solid rgba(255,255,255,.3);

    /* simpel color */
    --Glass:rgba(0, 0, 0, 0.404)
    --Shadow:0 1px 5px rgba(104,104,104,0.8)

     /* Extra  */
    --Main-font: 'Roboto Mono',monospace,sans-serif;
    --Extra-font:'Karla';
    --MainTransition: all 0.6s ease-in-out;
    --MainSpacing: 1,2rem;
    --Shadow:0 1px 5px rgba(104,104,104,0.8)
    --LightShadow: 3px 8px 3px 1px rgba(0, 0, 0, 0.5);
    --DarkShadow: 5px 10px 8px 2px rgba(0, 0, 0, 0.5);

    /* ----- Font Weight ----- */
    --fw-medium: 500;
    --fw-semi-bold: 600;
    --fw-bold: 700;
    --fw-bolder: 800;

    /* --- Typography ----- */
    --font-family: 'Poppins', sans-serif;
    --font-family-narrow: 'Archivo Narrow', sans-serif;
    --font-family-alt: 'Playfair Display', serif;

    /* --------  Font Size  -------*/
    --fs-largest: 2.25rem;
    --fs-h1: 1.5rem;
    --fs-h2: 1.25rem;
    --fs-h3: 1rem;
    --fs-normal: 0.938rem;
    --fs-small: 0.813rem;
    --fs-smaller: 0.75rem;
}


html {
    background:var(--Black-Color)
}
body {
    font-family: var(--Main-font)
}
img {
  width:100%;
  height:auto;
  object-fit: cover;
}
a{
    text-decoration: none;
}
`;

export default GlobalStyle;

/********-- Export Const --*******/

/* ----- Create media queries ----- */

export const mobile = (props) => {
    return css`
        @media (min-width: 420px) {
            ${props}
        }
    `;
};

export const mobileMd = (props) => {
    return css`
        @media (min-width: 576px) {
            ${props}
        }
    `;
};

export const tablet = (props) => {
    return css`
        @media (min-width: 768px) {
            ${props}
        }
    `;
};

export const tabletMd = (props) => {
    return css`
        @media (min-width: 992px) {
            ${props}
        }
    `;
};

export const tabletLg = (props) => {
    return css`
        @media (min-width: 1050px) {
            ${props}
        }
    `;
};

export const laptop = (props) => {
    return css`
        @media (min-width: 1200px) {
            ${props}
        }
    `;
};

export const laptopMd = (props) => {
    return css`
        @media (min-width: 1400px) {
            ${props}
        }
    `;
};

// How to use media queries
/* /420 */
// ${mobile({})}
/* 576 */
// ${mobileMd({})}
/* 768 */
// ${tablet({})}
/* 992 */
// ${tabletMd({})}
/* 1050 */
// ${tabletLg({})}
/* 1200 */
// ${laptop({})}

export const AppHeader = styled.div`
    background-color: #696969;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    text-align: center;
`;
export const flexContainer = styled.div`
    background-color: #696969;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    text-align: center;
    height: 100vh;
`;

export const GridWrapper = styled.section`
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;
export const GridDemoContainer = styled.div`
    display: grid;
    grid-template-columns: 100px 1fr 100px;
    grid-template-rows: 45px 1fr 45px;
    grid-template-areas: "header header  header", "menu   content ads   ",
        "footer footer  footer";
`;

export const GridContainerDemo = styled.div`
    display: grid;
    grid-template-rows: 1fr auto;
    min-height: 20vh;
    color: white;
    background-color: #696969;
`;
export const FooterMain = styled.div`
    display: flex;
    align-content: center;
    text-align: center;
    flex-direction: row;
    margin-bottom: 1rem;
    padding: 1rem 2rem;
    position: relative;
    bottom: 0;
    width: 100%;
    a {
        color: white;
        text-decoration: none;
        &:hover {
            color: #cccccc;
        }
    }
    @media only screen and (max-width: 768px) {
        flex-direction: column;
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
    padding: 1.2rem;
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
    color: var(--Grey);
`;

export const Paragraph = styled.p`
    font-size: 1.2rem;
    padding: 0.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--Grey);
`;

export const Button = styled.button`
    padding: 10px 30px;
    background-color: var(--White);
    color: var(--Grey);
    font-size: 0.9rem;
    cursor: pointer;
    border: none;
    outline: none;
    border-radius: 20px;
    transition: 0.6s;
    &:hover {
        background-color: var(--Orange);
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
        background-color: var(--Orange);
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
        background-color: var(--Orange);
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
        background-color: var(--Orange);
        transition: 0.6s;
    }
`;
export const BackgroundImage = styled.img`
    background-image: url(https://picsum.photos/1280?image=849);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: grid;
    justify-items: center;
    align-items: center;
`;
