import React from "react";
import styled from "styled-components";

const AppContainer = styled.div`
    display: grid;
    grid-gap: 2em;
    margin: 10px 10px;
`;
const Grid = styled.section`
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;
const Image = styled.img`
    background-image: url(https://picsum.photos/1280?image=849);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: grid;
    justify-items: center;
    align-items: center;
`;
const BoxContainer = styled.div`
    width: 500px;
    padding: 50px;
    color: yellow;
    background: blue;
`;
