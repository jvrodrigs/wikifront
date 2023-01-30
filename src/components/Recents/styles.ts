import styled from "styled-components";

export const Container = styled.div`
    margin-left: 1.5rem;
    margin-right: 1.5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 1200px) {
        max-width: 1120px;
        margin-left: auto;
        margin-right: auto;
    }
`;

export const CarouselCtn = styled.div`
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const Buttons = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
    gap: 2rem;

    margin-bottom: 1.5rem;
`
export const ButtonCustom = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;

    &:hover{
        transform:scale(1.3,1.3);
        -webkit-transform:scale(1.3,1.3);
        -moz-transform:scale(1.3,1.3);
    }
`