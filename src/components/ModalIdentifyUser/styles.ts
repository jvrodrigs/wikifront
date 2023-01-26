import styled from "styled-components";

import * as Dialog from '@radix-ui/react-dialog';

export const PortalContainer = styled(Dialog.Portal)`
`;

export const Overlay = styled(Dialog.Overlay)`
    position: fixed;
    width: 100vw;
    height: 100vh;
    inset: 0;
    background: rgba(0, 0, 0, 0.73);
`;

export const Content = styled(Dialog.Content)`
    min-width: 32rem;
    border-radius: 5px;
    padding: 2.5rem 3rem;
    background: ${props => props.theme["body-color"]};
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 480px;
    height: 340px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
        font-weight: bold;
        font-size: 25px;
        margin-bottom: 30px;
    }
`;

export const CloseButton = styled(Dialog.Close)`
    position: absolute;
    background: transparent;
    border: 0;
    top: 1.5rem;
    right: 1.5rem;
    line-height: 0;
    cursor: pointer;
    color: ${props => props.theme["gray-500"]};
`;

export const ContainerDescription = styled(Dialog.Description)`
    display: flex;
`;

export const ButtonIdentify = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;

    align-items: center;
    border-radius: 4px;
    width: 140px;
    height: 160px;
    border: 0px;
    background: ${props => props.theme["base-color"]};

    color: rgb(255, 255, 255);
    font-weight: bold;
    font-size: 16px;
    margin: 0px 4px;
    outline: 0px;
    user-select: none;
    transition: all 0.4s ease 0s;

    cursor: pointer;

    h3 {
        margin-top: 1rem;
    }

    &:hover{
        background: ${props => props.theme["base-color-hover"]};
    }
`;