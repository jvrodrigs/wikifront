import styled, { css } from "styled-components";

interface StatusButtons {
    open: boolean;
}

export const Container = styled.header`
    border-bottom: 1px solid #E4E4E4;
    margin-bottom: 2rem;
    display: flex;

    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    background-color: ${props => props.theme["body-color"]};
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.15);
`;

export const NavContainer = styled.nav`
    height: ${props => props.theme["header-hei"]};
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
 
    margin-left: 1.5rem;
    margin-right: 1.5rem;

    @media (min-width: 1200px) {
        max-width: 1120px;
        margin-left: auto;
        margin-right: auto;
    }
`;

export const Logo = styled.img`
    width: 170px;
`;

export const Menu = styled.div`
    opacity: 0;
    visibility: hidden;
    top: -20rem;


    @media (min-width: 1200px) {
        opacity: 1;
        visibility: visible;

        top: 0;

        ul {
            display: flex;
            gap: 2rem;
        }
    }

`;

export const Title = styled.a`

    font: 700 1.875rem 'Poppins', sans-serif;
    color: ${props => props.theme["title-color"]};
    -webkit-font-smoothing: antialiased;
    /* &::after {
        content: "";
        width: 0%;
        height: 2px;
        background: ${props => props.theme["base-color"]};

        position: absolute;
        left: 0;
        bottom: -1.5rem;

        transition: width 0.2s;
    } */

    &:hover{
        color: ${props => props.theme["base-color"]};
        &::after {
            width: 100%;
        }
    }

    @media (min-width: 1200px) {
        font: 400 1rem 'DM Sans', sans-serif;
    }
`

export const Section = styled.li`
    text-align: center;

    i {
        cursor: pointer;
    }
`;

export const ToggleContainer = styled.div<StatusButtons>`
    color: ${props => props.theme["base-color"]};
    font-size: 1.5rem;
    cursor: pointer;

    ${props => !props.open && css `
        visibility: hidden;
        opacity: 0;
    
        position: absolute;
        right: 1.5rem;
    
        top: -1.5rem;
        transition: 0.2s;
    `}


    @media (min-width: 1200px) {
        display: none;
    }
`;