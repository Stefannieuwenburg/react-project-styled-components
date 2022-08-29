import React from 'react'
import styled from "styled-components";

const HeaderSection = styled.h1`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: black;
    font-size: 2.1rem;
    letter-spacing: 2px;
    padding: 0.3rem;
`;

const HeaderTitle = () => {
    return (
        <div>
            <HeaderSection>hallo</HeaderSection>
        </div>
    )
}

export default HeaderTitle
