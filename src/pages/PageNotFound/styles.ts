import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 2.5rem 3rem;

    position: fixed;
    top: 10%;
    left: 25%;

    width: 50%;

    h3 {
        margin-top: 5rem;
        font-size: auto;

        @media (min-width: 1200px) {
            font-size: 2rem;
        }
    }

    button {
        margin-top: 1rem;

        background-color: ${props => props.theme["base-color"]};
        border-radius: 4px;
        border: 0px;
        color: rgb(255, 255, 255);
        align-items: center;
        width: 10rem;
        height: auto;
        padding: 1rem;
        font-size: auto;
        cursor: pointer;

        &:hover{
            background: ${props => props.theme["base-color-hover"]};
        }

        @media (min-width: 1200px) {
            font-size: 1rem;
        }
    }
`;