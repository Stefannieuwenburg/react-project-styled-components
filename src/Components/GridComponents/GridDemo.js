import React from 'react'
import styled from "styled-components";

const HollyGridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr 4fr 1fr;
    grid-gap: 10px;
    grid-auto-flow: row;
    grid-template-areas:
        "HeaderNav HeaderNav HeaderNav"
        "Div1 Div2 Div3"
        "Footer Footer Footer";

    @media only screen and (max-width: 768px) {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: minmax(auto, 1fr) 5fr 5fr 5fr;
        grid-gap: 10px;
        grid-auto-flow: row;
        grid-template-areas:
            "HeaderNav "
            "Div1"
            "Div2"
            "Div3"
            "Footer";
    };
    
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
    /*  */
};

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
    /*  */
};

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
    /*  */
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
    /*  */
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
    /*  */
}
`;

const HeaderNav = styled.div`
 grid-area: HeaderNav;
 background-color: grey;
`;
const Div1 = styled.div`
    grid-area: Div1;
    background-color: grey;
`;
const Div2 = styled.div`
    grid-area: Div2;
    background-color: grey;
`;
const Div3 = styled.div`
    grid-area: Div3;
    background-color: grey;
`;
const Footer = styled.div`
    grid-area: Footer;
    background-color: grey;
`;

const GridDemo = () => {
    return (
        <>
            <HollyGridContainer>
                <HeaderNav>Header/nav</HeaderNav>
                <Div1>Div1</Div1>
                <Div2>Div2</Div2>
                <Div3>Div3</Div3>
                <Footer>Footer</Footer>
            </HollyGridContainer>
        </>
    );
}

export default GridDemo
