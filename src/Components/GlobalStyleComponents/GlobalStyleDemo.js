// npm i --save-dev @types/styled-components
// import BackgroundImage from '../assets/background.jpg';
// npm i styled-components
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html {
    @import url("https://fonts.googleapis.com/css2?family=Karla:wght@200;400&display=swap");
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');

    
  }
  body {
   
    scroll-behavior: smooth;
    font-family: "Karla", "Segoe UI", "Roboto",'Roboto Mono', monospace,
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    scroll-behavior: smooth;
  }
  :root{
    /*  basis background color page*/
     --Main-BackGround-Color:#FAFAFA;

    /* Page color */
    --MainPageColor:#FAFAFA;
    --Black:#000000;
    --White:#FFFFFF;
   
    /* simpel color */
    --Red:#FF0000;
    --Orange:#FFA500
    --Yellow:#FFFF00;
    --YellowDark:#C47F17;
    --Olive:#808000;
    --Green:#008000;
    --Teal:#008080;
    --Navy:#000080;
    --Violet:'violet'
    --Purple:#800080;
    --Pink:#FFC0CB;
    --Brown:#8B4513;
    --Grey:#808080
    --Silver:#C0C0C0;
    --Glass:rgba(0, 0, 0, 0.404)
    --shadow:0 1px 5px rgba(104,104,104,0.8)
     /* Extra  */
    --main-font: 'Roboto Mono';
    --main-transition: all 0.6s ease-in-out;
    --main-spacing: 1,2rem;
    --shadow:0 1px 5px rgba(104,104,104,0.8)
    --lightShadow: 3px 8px 3px 1px rgba(0, 0, 0, 0.5);
    --darkShadow: 5px 10px 8px 2px rgba(0, 0, 0, 0.5);

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

  img {
  width:100%;
  height:auto;
  object-fit: cover;
}

a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    transition: 0.3s;
}

button{
    cursor: pointer;
    color: inherit;
    font-family: inherit;
}

ul {
    list-style: none;
    color: inherit;
    margin: 0;
    padding: 0;
}

  
`;

export default GlobalStyles;
