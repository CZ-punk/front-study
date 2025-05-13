import { styled } from "styled-components";

export const HomeWrapper = styled.div`
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr 4fr;
    width: 80%;
    height: 100vh;
    const Wrapper = styled.div
    padding: 50px;
`

export const Menu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`

export const MenuItem = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid white;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    svg {
        width: 30px;
        fill: white;
    }
    &.logout {
        border-color: tomato;
        svg {
            fill: tomato;
        }
    }
`