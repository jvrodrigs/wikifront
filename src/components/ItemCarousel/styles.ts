import styled from "styled-components";


export const ItemContainer = styled.div`
    background-color: white;
    margin: 10px;
    padding: 10px;
    width: 280px;
    border-radius: 16px;
    flex: none;
`;

export const ImageContainer = styled.div`
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export const InfoContainer = styled.div`
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    span {
        display: block;
        text-align: center;
        color: #1e1e1e;
        padding: 5px;
        border-radius: 10px;
    }
`;

export const NameInfo = styled.span`
    font-size: 1.2rem;
    font-weight: bold;
    margin: 10px 0;
    color: #00a8fb;
`