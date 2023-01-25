import styled, { css } from "styled-components";

interface Info {
    side: boolean;
}

export const LineDivider = styled.div<Info>`
    height: 1px;

    ${props => props.side && css `
        background: linear-gradient(
            270deg,
            hsl(var(--hue), 65%, 88%, 0.34),
            hsl(var(--hue), 36%, 57%, 1)
        );
    `}

    ${props => !props.side && css `
        background: linear-gradient(
            270deg, hsl(var(--hue), 36%, 57%, 1) 0%,
            hsl(var(--hue), 65%, 88%, 0.34) 100%
        );
    `}
`