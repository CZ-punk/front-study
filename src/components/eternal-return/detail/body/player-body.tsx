import styled from "styled-components";
import PlayerBodyLeft from "./player-body-left";
import PlayerBodyRight from "./player-body-right";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px;
    margin: 15px;
    gap: 15px;

    @media (max-width: 1300px) {
        flex-direction: column;
    }
`

const PlayerBody: React.FC = () => {
    return (
        <>
            <Wrapper>
                <PlayerBodyLeft />
                <PlayerBodyRight />
            </Wrapper>
        </>
    )
}

export default PlayerBody;