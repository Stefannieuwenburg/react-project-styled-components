import React, { Fragment, useState, useEffect } from "react";
import styled from "styled-components";

import { GiHamburgerMenu } from "react-icons/gi";

const Logo = styled.a`
    padding: 1rem 0;
    color: whitesmoke;
    text-decoration: none;
    font-weight: 800;
    font-size: 1.7rem;
    
`;
const StyledNav = styled.div`
    display: flex;
    justify-content: space-around;
    position: fixed;
    top: 0;
    width: 100%;
    height: 50px;
    background: rgba(0, 0, 0, 0.404);
    .list {
        list-style-type: none;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .items {
        margin-right: 100px;
        font-size: 18px;
        color: #f1f1f1;
        cursor: pointer;
    }

    .Hamburger {
        display: none;
        position: absolute;
        right: 10px;
        top: 7px;
        padding: 5px;
        color: whitesmoke;
        font-size: 18px;
    }

    @media screen and (max-width: 500px) {
        .list {
            flex-direction: column;
            margin-top: 80px;
        }
        .items:nth-child(1) {
            border-top: 1px solid rgba(255, 255, 255, 0.555);
            margin-top: 80px;
        }
        .items {
            width: 100%;
            border-top: 1px solid rgba(255, 255, 255, 0.555);
            text-align: center;
            padding: 12px;
        }
        .Hamburger {
            display: block;
        }
    }
`;

export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const toggleNav = () => {
        setToggleMenu(!toggleMenu);
    };

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener("resize", changeWidth);

        return () => {
            window.removeEventListener("resize", changeWidth);
        };
    }, []);

    return (
        <Fragment>
                <StyledNav>
                    <Logo href="/#">Logohome</Logo>
                    {(toggleMenu || screenWidth > 500) && (
                        <ul className="list">
                            <li className="items">Home</li>
                            <li className="items">Services</li>
                            <li className="items">Contact</li>
                        </ul>
                    )}
                    <GiHamburgerMenu
                        onClick={toggleNav}
                        className="Hamburger"
                    />
                </StyledNav>
        </Fragment>
    );
}