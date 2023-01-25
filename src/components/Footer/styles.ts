import styled from "styled-components";

export const FooterContainer = styled.footer`
    background-color: ${props => props.theme["base-color"]};
`;

export const SectionContainer = styled(FooterContainer)`
    padding: 4rem 0;

    @media (min-width: 1200px) {
        padding: 3.75rem 0;
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
`;

export const Grid = styled.div`
    display: grid;
    gap: 2rem;

    @media (min-width: 1200px){
        grid-auto-flow: column;
        align-items: center;
        justify-content: space-between;
    }
`

export const Brand = styled.div`
    p{
        color: ${props => props.theme["text-color-light"]};
        margin-bottom: 0.75rem;
    }
`;

export const Social = styled.div`

    a {
        margin-right: 2rem;
        transition: 0.2s;
        display: inline-block;

        &:hover {
            transform: translateY(-15px);
        }
    }

    i {
        font-size: 1.5rem;
        color: ${props => props.theme["text-color-light"]};
    }
`;