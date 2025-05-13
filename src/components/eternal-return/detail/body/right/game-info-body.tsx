import styled from "styled-components";
import RankItemBody from "./rank-item-body";
import { useState } from "react";
import GameInfoDetails from "./game-info-details/game-info-details";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #1e1e1e; 
    min-width: 500px;
    color: white; 
    padding: 20px;
    gap: 10px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`

export const RankCardWrapper = styled.div`

    display: flex;
    flex-direction: column;

`

export const RankItemWrapper = styled.div` 
    display: flex;
    flex-direction: row;
    background-color: dimgray;
    border-radius: 8px;
    border: 1px solid dimgray;
    color: black;
    
    width: 100%;
    height: 150px;
    justify-content: center;
    align-items: center;

    position: relative;
    padding: 10px;
`

export const RankDeco = styled.div<{ $rank: number }>`
    position: absolute; 
    left: 0; 
    top: 0; 
    width: 10px; 
    height: 100%; 
    border-radius: 8px 0 0 8px; 
    background-color: ${props => {
        if (props.$rank === 1) return '#ffa500';
        if (props.$rank === 2 || props.$rank === 3) return '#1e90ff';
        return '#ccc';
    }};
`;

export const RankItemButton = styled.button<{ $rank: number }>`
    position: absolute; 
    right: 0; 
    top: 0; 
    width: 30px; 
    height: 100%; 
    border-radius: 0 8px 8px 0;
    background-color: ${props => {
        if (props.$rank === 1) return '#ffa500';
        if (props.$rank === 2 || props.$rank === 3) return '#1e90ff';
        return '#ccc';
    }};
    border: none; 
    padding: 0; 
    box-sizing: border-box; 
    display: flex; 
    justify-content: center; 
    align-items: center;
    cursor: pointer;
`


const GameInfoBody = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <Wrapper>
            Game Info Body

            <RankCardWrapper>

                <RankItemWrapper>
                    <RankDeco $rank={1} />
                    <RankItemBody />
                    {/* 플립 열리면 내부 컴포넌트는 다른 파일 작업 */}
                    <RankItemButton $rank={1} onClick={() => setIsOpen(!isOpen)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </RankItemButton>

                </RankItemWrapper>
                {isOpen ?
                    <GameInfoDetails></GameInfoDetails>
                    :
                    null
                }

            </RankCardWrapper>



        </Wrapper>
    )
}

export default GameInfoBody;