import React, { Fragment } from "react";
import styled from "styled-components";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import {HeaderTitle,Paragraph} from "../GlobalStyle";

const FooterContainer = styled.div`
    ul {
        display: inline-grid;
        grid-auto-flow: row;
        grid-gap: 24px;
        justify-items: center;
        margin: auto;
    }

    @media (min-width: 500px) {
        ul {
            grid-auto-flow: column;
        }
    }

    a {
        color: white;
        font-size: 30px;
        text-decoration: none;
        box-shadow: inset 0 -1px 0 hsla(0, 0%, 100%, 0.4);
    }

    a:hover {
        box-shadow: inset 0 -1.2em 0 hsla(0, 0%, 100%, 0.4);
    }

    li:last-child {
        grid-column: 1 / 2;
        grid-row: 1 / 2;
    }

    li {
        display: inline-block;
        margin-bottom: 2px;
        margin-right: 15px;
        color: #96a2b2;
       
    }
    
    a {
        background-color: #eceeef;
        color: #818a91;
        font-size: 16px;
        display: inline-block;
        line-height: 44px;
        width: 44px;
        height: 44px;
        text-align: center;
        margin-right: 8px;
        border-radius: 100%;
        
    }
    
    a {
        line-height: 34px;
        height: 34px;
        width: 34px;
        font-size: 14px;
    }
    a.facebook:hover {
        background-color: #3b5998;
    }
    a.twitter:hover {
        background-color: #00aced;
    }
    a.linkedin:hover {
        background-color: #007bb6;
    }
    a.dribbble:hover {
        background-color: #ea4c89;
    }

    /* below is just for demo styling */

    div {
        display: flex;
        height: 20vh;
        width: 100%;
        background-color: #002a38;
        line-height: 1.3;
        font-family: Menlo, monospace;
    }
`;

const FooterGrid = () => {
    return (
        <Fragment>
            <FooterContainer>
                <HeaderTitle>FAQ</HeaderTitle>
                <Paragraph>
                    If you have any questions, please contact us from the social
                    network below!
                </Paragraph>
                <div>
                    <ul>
                        <li>
                            <a href="/#">
                                <FaLinkedin />
                            </a>
                        </li>
                        <li>
                            <a href="/#">
                                <FaGithub />
                            </a>
                        </li>
                        <li>
                            <a href="/#">
                                <FaFacebook />
                            </a>
                        </li>
                    </ul>
                </div>
                <Paragraph>© 2022 Copyright: Stefan Nieuwenburg</Paragraph>
            </FooterContainer>
        </Fragment>
    );
};
export default FooterGrid;
