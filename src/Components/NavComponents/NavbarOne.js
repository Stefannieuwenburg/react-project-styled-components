import React, { Fragment, useState } from "react";
import styled from "styled-components";

import { GiHamburgerMenu } from "react-icons/gi";



const Link = styled.a`
    padding: 1rem 2rem;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    color: #67bc98;
    transition: all 0.3s ease-in;
    font-size: 0.9rem;
    &:hover {
        color: #7b7fda;
    }
`;

const Nav = styled.div`
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background: white;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
`;

const Logo = styled.a`
    padding: 1rem 0;
    color: #7b7fda;
    text-decoration: none;
    font-weight: 800;
    font-size: 1.7rem;
    span {
        font-weight: 300;
        font-size: 1.3rem;
    }
`;

const Menu = styled.div`
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

const Hamburger = styled.div`
    display: none;
    flex-direction: column;
    cursor: pointer;
    span {
        height: 2px;
        width: 25px;
        background: #7b7fda;
        margin-bottom: 4px;
        border-radius: 5px;
    }
    @media (max-width: 768px) {
        display: flex;
    }
`;

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Fragment>
            <Nav>
                <Logo href="/#">Logohome</Logo>
                <Hamburger onClick={() => setIsOpen(!isOpen)}>
                    <GiHamburgerMenu
                        style={{ color: "white", fontSize: "30px" }}
                    />
                </Hamburger>
                <Menu isOpen={isOpen}>
                    <Link href="/#" onClick={() => setIsOpen(false)}>
                        Our Work
                    </Link>
                    <Link href="/#" onClick={() => setIsOpen(false)}>
                        About
                    </Link>
                    <Link href="/#" onClick={() => setIsOpen(false)}>
                        Careers
                    </Link>
                    <Link href="/#" onClick={() => setIsOpen(false)}>
                        Contact
                    </Link>
                </Menu>
            </Nav>
        </Fragment>
    );
};

export default Navbar;


