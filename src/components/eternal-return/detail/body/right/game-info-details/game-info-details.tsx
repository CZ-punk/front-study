import styled from "styled-components";
import DetailsHeader from "./details-header";
import DetailsBody from "./details-body";
// import GameInfoBody from "../game-info-body";


export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

`



const GameInfoDetails = () => {



    return (
        <Wrapper>
            <DetailsHeader />
            <DetailsBody itemId={1}/>
    

            
        

            

        </Wrapper>
    )
}

export default GameInfoDetails;