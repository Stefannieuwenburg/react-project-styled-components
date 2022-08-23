import React from "react";
import styled from "styled-components";
// import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import Linkedin from "../../assets/logo/linkedin.svg";
import Github from "../../assets/logo/github.svg";
import Facebook from "../../assets/logo/facebook.svg";


const Container = styled.div`
    display: grid;
    grid-template-rows: 1fr auto;
    min-height: 20vh;
    color: white;
    background-color: #141414;
`;
const FooterMain = styled.div`
    display: flex;
    align-content: center;
    text-align: center;
    flex-direction: row;
    margin-bottom: 1rem;
    padding: 1rem 2rem;
    position: relative;
    bottom: 0;
    width: 100%;
    a {
        color: white;
        text-decoration: none;
        &:hover {
            color: #cccccc;
        }
    }
    @media only screen and (max-width: 768px) {
        flex-direction: column;
    }
`;
const FooterHeading = styled.h3`
   margin-bottom:1rem;
`;
const FooterColum = styled.div`
    flex-basis:200px;
    flex-grow:1;
    text-align: center;
    
    
`;
const FooterBottom = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
`;

const Copyricht = styled.span`
    margin-right:auto;
    margin:0 auto;
`;
const FooterLink = styled.div`
    display:block;
    width:max-content;
    padding:0.1rem 0.1rem;
    margin:0 auto;
`;
const FooterSocial = styled.div`
    font-size: 30px;
    padding: 0.1rem 0.2rem;
    margin-bottom: 0.1rem;
    img {
        width: 30px;
        height: 30px;
       margin:0.6rem
    }
    
`;
const WrapperSocial = styled.div`
    display: flex;
    flex-direction:row auto;
    margin:0 auto;
    
`;



function Footer() {
    return (
        <Container>
            <FooterMain>
                <FooterColum>
                    <FooterHeading>Contact us</FooterHeading>
                    <FooterLink>
                        <a href="/#">link one</a>
                    </FooterLink>
                    <FooterLink>
                        <a href="/#">link two</a>
                    </FooterLink>
                    <FooterLink>
                        <a href="/#">link three</a>
                    </FooterLink>
                </FooterColum>
                <FooterColum>
                    <FooterHeading>Learn more</FooterHeading>
                    <FooterLink>
                        <a href="/#">code one</a>
                    </FooterLink>
                    <FooterLink>
                        <a href="/#">code two</a>
                    </FooterLink>
                    <FooterLink>
                        <a href="/#">code three</a>
                    </FooterLink>
                </FooterColum>
                <FooterColum>
                    <FooterHeading>Features</FooterHeading>
                    <FooterLink>
                        <a href="/#">You Apps</a>
                    </FooterLink>
                    <FooterLink>
                        <a href="/#">YouCode</a>
                    </FooterLink>
                    <FooterLink>
                        <a href="/#">Bangs</a>
                    </FooterLink>
                </FooterColum>
            </FooterMain>
            <FooterBottom>
                <Copyricht>
                    &copy;{new Date().getFullYear()} company | All rights
                    reserved | Terms Of Service | Privacy
                </Copyricht>
                <FooterHeading>SOCIAL MEDIA</FooterHeading>
                <WrapperSocial>
                    <FooterSocial>
                        <a href="/#">
                            <img src={Linkedin} alt="linkedin" />
                        </a>
                    </FooterSocial>
                    <FooterSocial>
                        <a href="/#">
                            <img src={Github} alt="Github" />
                        </a>
                    </FooterSocial>
                    <FooterSocial>
                        <a href="/#">
                            <img src={Facebook} alt="Github" />
                        </a>
                    </FooterSocial>
                </WrapperSocial>
            </FooterBottom>
        </Container>
    );
}

export default Footer;
