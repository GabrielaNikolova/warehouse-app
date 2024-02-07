import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    font-family: 'Red Hat Display', sans-serif;
    font-weight: normal;
    font-size: 62.5%;
    --font-size-sm: clamp(1.28rem, 0.17vw + 1.21rem, 1.43rem);
    --font-size-base: clamp(1.6rem, 0.34vw + 1.46rem, 1.9rem);
    --font-size-md: clamp(2rem, 0.61vw + 1.76rem, 2.53rem);
    --font-size-lg: clamp(2.5rem, 1vw + 2.1rem, 3.38rem);
    --font-size-xl: clamp(3.13rem, 1.56vw + 2.5rem, 4.5rem);
    --font-size-xxl: clamp(3.91rem, 2.38vw + 2.96rem, 6rem);
    --font-size-xxxl: clamp(4.88rem, 3.54vw + 3.47rem, 8rem);
    --white-smoke: #F2F2F2;
    --dark-grey: #636C78;
    --black: #181818;
    --white: #FFFFFF;
    --green: #92BCA8;
    --purple: #6B6DAF;
    --red: #FF4033;
    --border-radius: 0.5rem;
    --nav-heigth: 8rem;
    scroll-behavior: smooth;
}

div, input, section {
    box-sizing: border-box;
}

body {
    min-height: 100vh;
    max-width: 2500px;
    min-width: 320px;
    margin: 0;
    width: 100%;
    // display: flex; 
    flex-wrap: wrap;
    place-content: center;
    align-items: center;
    overflow-x: hidden;
    scroll-behavior: smooth;
    background-color: var(--white-smoke);
    color: var(--black);
    font-size: var(--font-size-base);
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
}

a {
    display: inline-block;
    text-decoration: none;
    color: inherit;
    position: relative;
}

ul {
    list-style-type: none;
}

section {
    margin: 0px auto;
    padding: 100px 0px;
    max-width: 1000px;
}
option {
    font-size: var(--font-size-sm);
    font-weight: 400;
    width: 250px;
    color: var(--dark-grey);
    padding: 10px 14px;
    margin-bottom: 1rem;
}
`;