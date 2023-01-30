import styled, { css } from "styled-components";

interface Info {
    side: boolean;
}

export const LineDivider = styled.div<Info>`
    height: 1px;

    ${props => props.side && css `
        background: linear-gradient(
            270deg,
            hsl(171, 65%, 88%, 0.34),
            hsl(171, 36%, 57%, 1)
        );
    `}

    ${props => !props.side && css `
        background: linear-gradient(
            270deg, hsl(171, 36%, 57%, 1) 0%,
            hsl(171, 65%, 88%, 0.34) 100%
        );
    `}
`