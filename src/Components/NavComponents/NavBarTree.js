// this navbar is from Glass ant sticky
import React, { Fragment, useState } from "react";
import styled from "styled-components";

import { GiHamburgerMenu } from "react-icons/gi";


const NavbarContainer = styled.div`
    padding: 0.2rem;
    margin: 0.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    position: fixed;
    top: 0px;
    width: 100%;
    
`;
const Logo = styled.a`
    padding: 1rem 0;
    color: whitesmoke;
    text-decoration: none;
    font-weight: 800;
    font-size: 1.7rem;
`;
const LinkContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    @media (max-width: 768px) {
        overflow: hidden;
        flex-direction: column;
        max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
        transition: max-height 0.3s ease-in;
        width: 100%;
        
    }
`;
const MenuLink = styled.a`
    padding: 1rem 2rem;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    color:whitesmoke;
    transition: all 0.3s ease-in;
    font-size: 1.2rem;
    &:hover {
        color: DarkGray;
    }
`;
const Hamburger = styled.div`
    margin: 1.2rem;
    display: none;
    flex-direction: column;
    cursor: pointer;
    @media (max-width: 768px) {
        display: flex;
    }
`;


const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Fragment>
            <NavbarContainer>
                <a href="/#">
                    <Logo>Logo</Logo>
                    </a>
                <Hamburger onClick={() => setIsOpen(!isOpen)}>
                    <GiHamburgerMenu style={{ color: "white",fontSize: "30px" }}/>
                </Hamburger>
                <LinkContent isOpen={isOpen}>
                    <MenuLink href="/#">Home</MenuLink>
                    <MenuLink href="/#">About</MenuLink>
                    <MenuLink href="/#">Work</MenuLink>
                    <MenuLink href="/#">Contact</MenuLink>
                </LinkContent>
            </NavbarContainer>
        </Fragment>
    );
}

export default NavBar;
