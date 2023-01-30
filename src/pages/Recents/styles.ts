import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: auto;
    display: flex;
    justify-content: center;
    align-items: center;

    div {
        margin-left: 1.5rem;
        margin-right: 1.5rem;
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
    text-align: center;
`
export const ButtonCustom = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
`