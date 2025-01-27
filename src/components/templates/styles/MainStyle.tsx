import styled from "styled-components";


export const MainStyleDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: #f5f5f5;
    overflow: hidden;
    position: relative;
    z-index: 1;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url("/images/Background.png");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        z-index: -1;
      }
`;