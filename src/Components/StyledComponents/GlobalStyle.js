import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
    @import url("https://fonts.googleapis.com/css2?family=Karla:wght@200;400&display=swap");
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');

    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Karla", "Segoe UI", "Roboto",'Roboto Mono', monospace,
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
:root{
    /* Page color */
    --PageWhite:#f9f9fb;
    --Black:#F0F8FF;
    --White:#FFFFFF;
    --primary:#ddd;
    --dark:#333;
    --light:#fff;
    --Orange:#FFA500;
    
    /* simpel color */
    --Red:'red'
    --Orange:'orange'
    --Yellow:'yellow'
    --Olive:'olive'
    --Green:'green'
    --Teal:'teal'
    --Blue:'blue'
    --Violet:'violet'
    --Purple:'purple'
    --Pink:'pink'
    --Brown:'brown'
    --Grey:'grey'
    --Black:'black'
    --Glass:rgba(0, 0, 0, 0.404)
    --shadow:0 1px 5px rgba(104,104,104,0.8)
     /* Extra  */
    --main-font: 'Roboto Mono';
    --extra-font:'Karla';
    --mainTransition: all 0.6s ease-in-out;
    --mainSpacing: 1,2rem;
    --shadow:0 1px 5px rgba(104,104,104,0.8)
    --lightShadow: 3px 8px 3px 1px rgba(0, 0, 0, 0.5);
    --darkShadow: 5px 10px 8px 2px rgba(0, 0, 0, 0.5);
}

`;

export default GlobalStyle;

// export const
export const AppHeader = styled.div`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    text-align: center;
`;

export const AppContainer = styled.div`
    display: grid;
    grid-gap: 2em;
    margin: 10px 10px;
`;
export const Grid = styled.section`
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;
export const Image = styled.img`
    background-image: url(https://picsum.photos/1280?image=849);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: grid;
    justify-items: center;
    align-items: center;
`;
export const BoxContainer = styled.div`
    width: 500px;
    padding: 50px;
    color: yellow;
    background: blue;
`;
export const Container = styled.div`
    display: grid;
    grid-template-rows: 1fr auto;
    min-height: 20vh;
    color: white;
    background-color: #141414;
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
