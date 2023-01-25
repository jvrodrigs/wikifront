import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html,
    body {
    font: 400 1rem 'DM Sans', sans-serif;
    background-color: hsl(0 0% 98%);
    color: hsl(0 0% 46%);
    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth;
    }

    a {
    color: inherit;
    text-decoration: none;
    }

    * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    }

    img{
    width: 100%;
    height: auto;
    }

    main{
    margin-top: calc(4.5rem + 1rem);
    }

    ul{
    list-style: none;
    }

    :root{
    font-size: 100%;
    --header-hei: 4.5rem;
    /* colors */
    --hue: 225;
    /* HSL color mode */
    --base-color: hsl(var(--hue) 36% 57%);
    --base-color-second: hsl(var(--hue) 65% 88%);
    --base-color-alt: hsl(var(--hue) 57% 53%);
    --title-color: hsl(var(--hue) 41% 10%);
    --text-color: hsl(0 0% 46%);
    --text-color-light: hsl(0 0% 98%);
    --body-color: hsl(0 0% 98%);

    --title-font-size: 1.87rem;
    }


    @media (min-width: 1200px) {
    main{
        margin-top: 4.5rem;
    } 
    }
`;