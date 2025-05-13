import React from 'react';
import { styled } from 'styled-components';
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const FooterWrapper = styled.footer`
    background-color: #1a1a1a; 
    color: #ffffff; 
    padding: 20px 20px 40px;
    text-align: center;
`;

export const FooterContent = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px;
    justify-content: center;
`;

export const FooterLink = styled.a`
    margin: 0 15px;
    font-size: 36px;
    color: #ffffff;

    &:hover {
        text-decoration: underline;
    }
`;

const Footer: React.FC = () => {
    return (
        <FooterWrapper>
            <FooterContent><h2>Cz-Punk</h2></FooterContent>
            <FooterContent><p>©Cz-Punk 2025 All rights reserved.</p></FooterContent>

            <FooterLink href='https://github.com/CZ-punk'><FaGithub /></FooterLink>
            <FooterLink href="mailto:cnhhw0408@gmail.com"><MdEmail /></FooterLink>
        </FooterWrapper>
    )
}

export default Footer;