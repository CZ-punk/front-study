import { useState } from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const GameIdWrapper = styled.div`
    display: flex;
    flex-direction: row;
    background-color: black;
    padding: 10px; 
`;

export const GameIdItem = styled.div`
    margin-right: 5px;     
    padding: 5px; 
    border-right: 2px solid #2f4f4f;
    font-size: 14px;
    
    &:last-child {
        border-right: none;
    }
`;

export const GameInfoListWrapper = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #000055;
    padding: 10px; 
`;


export const GameInfoListItem = styled.div`
    margin-right: 5px;     
    padding: 5px; 
    border: 2px solid white;
    border-radius: 10px; 
    font-size: 14px;
    font-weight: bold;  
    cursor: pointer;

    &:hover {
        border: 2px solid gray;
    }
`;

export const GameIdSpan = styled.span`
`;

const DetailsHeader = () => {
    const [itemId, setItemId] = useState<number>(1);
    

    // TODO: 추후 api 를 통해 map  형식으로 Component 를 나열할 것
    // TODO: List Item 을 select 할 때마다 state 값 변경해줘서 details body 컴포넌트가 업데이트되도록 수정

    return (
        <Wrapper>
            <input type="hidden" name="memberId" value={itemId} />
            <GameIdWrapper>
                <GameIdItem>Game ID: {"1022121"}</GameIdItem>
                <GameIdItem>Version: {"1.44"}</GameIdItem>
                <GameIdItem>Time: {"2025-04-06 18:44"}</GameIdItem>
                <GameIdItem>Region: {"Asia"}</GameIdItem>
            </GameIdWrapper>

            <GameInfoListWrapper>
                <GameInfoListItem onClick={() => setItemId(1)}>Rank</GameInfoListItem>
                <GameInfoListItem onClick={() => setItemId(2)}>Build/Stat</GameInfoListItem>
                <GameInfoListItem onClick={() => setItemId(3)}>Kill Info</GameInfoListItem>
                <GameInfoListItem onClick={() => setItemId(4)}>Characteristic</GameInfoListItem>
            </GameInfoListWrapper>

        </Wrapper>
    )
}

export default DetailsHeader;