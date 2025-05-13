import styled from "styled-components"
import GameInfo from "./right/game-info"

export const Wrapper = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    background-color: #2f2f2f;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`


const PlayerBodyRight: React.FC = () => {
    return (
        <Wrapper>
            <GameInfo />
        </Wrapper>

    )
}


export default PlayerBodyRight;