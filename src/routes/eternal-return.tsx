import styled from "styled-components";
import ERMenu from "../components/eternal-return/content-menu";
import { Outlet } from "react-router-dom";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;    
    align-items: center;

    background-color: black;
    gap: 20px;
    padding: 20px;
`


const EternalReturn = () => {

    return (
        <Wrapper>
            <ERMenu></ERMenu>
            <Outlet />
        </Wrapper>

    )
}

export default EternalReturn;