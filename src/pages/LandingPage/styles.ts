import styled, { css } from "styled-components";

interface typeSection {
    section?: string;
}

export const SectionContainer = styled.section<typeSection>`
    padding: calc(5rem + ${props => props.theme["header-hei"]}) 0;

    h2 {
        margin-bottom: 1rem;
        font: 700 ${props => props.theme["title-font-size"]} 'Poppins', sans-serif;
        color: ${props => props.theme["title-color"]};
        -webkit-font-smoothing: antialiased;
    }

    header {
        max-width: 32rem;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 4rem;

        strong {
            color: ${props => props.theme["base-color"]};
        }

        h3 {
            margin-bottom: 1rem;
        }

        p {
            font-size: 1rem;
        }
    }

    @media (min-width: 1200px) {
        padding: 10rem 0;

        ${props => props.section == 'info' && css`
            div {
                grid-auto-flow: column;
                justify-content: space-between;
                margin: 0 auto;
            }
        `}
    }
`

export const Container = styled.div`
    margin-left: 1.5rem;
    margin-right: 1.5rem;

    @media (min-width: 1200px) {
        max-width: 1120px;
        margin-left: auto;
        margin-right: auto;
    }
`

export const GridContainer = styled.div`
    display: grid;
    gap: 7rem;  
`

export const Grid = styled.div`
    display: grid;
    gap: 2rem;  
`

export const TextContainer = styled.div`
    margin-top: 1.5rem;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    text-align: center;
    
    p {
        margin-bottom: 2rem;
    }

    @media (min-width: 1200px) {
        order: 0;
    }
`

export const ImageContainer = styled.div`
    position: relative;

    img {
        position: relative;
        right: 2.93rem;

        width: 600px;
        height: auto;

    }

    &::before{
        content: '';
        height: 100%;
        width: 100%;
        background-color: ${props => props.theme["base-color-second"]};
        position: absolute;
        top: -16.8%;
        left: 16.7%;
        z-index: 0;

        border-radius: 0.25rem;
    }

    @media (min-width: 1200px) {
        order: 1;
    }
`

export const ButtonContainer = styled.a`
    display: inline-flex;
    background-color: ${props => props.theme["base-color"]};
    color: ${props => props.theme["text-color-light"]};
    height: 3.5rem;
    align-items: center;
    padding: 0 2rem;
    border-radius: 0.25rem;
    font: 500 1rem "DM Sans", sans-serif;
    transition: background 0.3s;

    &:hover {
        background-color: ${props => props.theme["base-color-hover"]};
    }
`

export const Cards = styled(Grid)`
    gap: 1.5rem;

    @media (min-width: 1200px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`;

export const Card = styled.div`
    padding: 3.625rem 2rem;
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.08);
    border-bottom: 0.25rem solid ${props => props.theme["base-color"]};
    border-radius: 0.25rem 0.25rem 0 0;
    text-align: center;
    transition: 0.3s;

    &:hover {
        transform: translateY(-15px);
    }

    i {
        display: block;
        margin-bottom: 1.5rem;
        font-size: 3rem;
        color: ${props => props.theme["base-color"]};
    }

    h3 {
        font-size: 1.5rem;
        margin-bottom: 0.75rem;
    }
`;