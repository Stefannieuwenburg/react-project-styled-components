import React, { Fragment } from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: grey;
    color: white;
    margin: 1.2rem;
    padding: 1.2rem;
`;
const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: grey;
    color: white;
    margin: 1.2rem;
    padding: 1.2rem;
`;

const HeaderTitle = styled.h1`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: black;
    font-size: 2.1rem;
    letter-spacing: 2px;
    padding: 0.3rem;
`;

const ParagraphStyled = styled.p`
    font-size: 1.2rem;
    margin: 1.2rem;
    color: var(--DarkGray);
`;

const Paragraph = styled.p`
    font-size: 1.2rem;
    padding: 0.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
`;

const Button = styled.button`
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
const ButtonStyled = styled.button`
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
const GreenButton = styled.button`
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
const ButtonProps = styled.button`
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

const MainButton = styled.button`
    min-height: 32px;
    padding: 0 32px;
    border-radius: 16px;
    border: none;
    color: white;
    font-size: 1rem;
    font-weight: 600;
    text-shadow: 1px 1px 0px #3a00df;
    background: linear-gradient(170deg, #359eff 5%, #3a00df 95%);
`;

function StyledButton() {
    return (
        <Fragment>
            <HeaderContainer>
                <HeaderTitle>
                    Style your components in react whith styled-components
                </HeaderTitle>
                <ButtonProps color="red">Click this button</ButtonProps>
                <ButtonProps color="violet">Click this button</ButtonProps>
                <Button>click me</Button>
                <GreenButton>click me</GreenButton>
            </HeaderContainer>
        </Fragment>
    );
}
export default StyledButton;
