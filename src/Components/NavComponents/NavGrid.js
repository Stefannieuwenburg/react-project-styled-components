import React, { Fragment } from "react";
import styled from "styled-components";

const NavGridCss = styled.div`
    header {
        position: fixed;
        top: 0;
        z-index: 1;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.404);
    }

    .container {
        width: 1280px;
        margin: auto;
    }

    .nav_checkbox {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        padding: 10px 0px;
    }

    .logo {
        text-decoration: none;
        color: white;
        padding-left: 10px;
    }

    .tab-nav {
        outline: none;
        display: none;
    }

    .label {
        display: none;
        color: white;
    }

    .burger {
        width: 35px;
        height: 5px;
        background-color: white;
        margin-top: 5px;
    }

    .content_nav {
        grid-column: 3;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .content_nav li {
        display: inline-block;
        padding-right: 10px;
    }

    .content_nav li a {
        text-decoration: none;
        color: white;
        position: relative;
    }

    .content_nav li a::after {
        content: "";
        display: block;
        height: 2px;
        background-color: white;
        position: absolute;
        left: 0;
        right: 0;
        transform-origin: right;
        transform: scale(0, 1);
        transition: transform ease-in-out 0.5s;
    }

    .content_nav li a:hover::after {
        transform: scale(1, 1);
    }

    

    @media screen and (max-width: 1280px) {
        .container {
            width: 100%;
        }
    }

    @media screen and (max-width: 770px) {
        .label {
            display: grid;
            cursor: pointer;
            grid-column: 3;
            padding-right: 10px;
        }

        .content_nav {
            display: grid;
            grid-template-columns: 1fr;
            grid-column: 1/4;
            text-align: center;
            max-height: 0;
            overflow: hidden;
            transition: all ease-in-out 0.6s;
        }

        .nav_checkbox input:checked ~ .content_nav {
            max-height: 500px;
        }

        .content_nav li {
            padding: 15px 0px;
        }
    }
`;

const NavGrid = () => {
    return (<Fragment>
        <NavGridCss>
            <div>
                <header>
                    <div class="container">
                        <nav class="nav_checkbox">
                            <a href="/#" class="logo">
                                <h2>LOGO</h2>
                            </a>
                            <input
                                type="checkbox"
                                id="tab-nav"
                                class="tab-nav"
                            />
                            <label for="tab-nav" class="label">
                                <div class="burger"></div>
                                <div class="burger"></div>
                                <div class="burger"></div>
                            </label>
                            <ul class="content_nav">
                                <li>
                                    <a href="/#">HOME</a>
                                </li>
                                <li>
                                    <a href="/#">ABOUT</a>
                                </li>
                                <li>
                                    <a href="/#">BLOG</a>
                                </li>
                                <li>
                                    <a href="/#">SERVICE</a>
                                </li>
                                <li>
                                    <a href="/#">LOGIN</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>
            </div>
        </NavGridCss>
        </Fragment>
    );
};
export default NavGrid;
