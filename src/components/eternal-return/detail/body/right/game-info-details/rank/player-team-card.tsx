import styled from "styled-components";
import { Rank } from "./details-rank";
import PlayerItem from "./player-item";

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: black;
`;

const PlayerItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between; // Space between player items
    width: 100%; // Full width
`;

const PlayerTeamCard = () => {
    return (
        <Wrapper>
            <Rank>1</Rank>
            <PlayerItemWrapper>
                <PlayerItem />
                <PlayerItem />
                <PlayerItem />
            </PlayerItemWrapper>
        </Wrapper>
    );
};

export default PlayerTeamCard;
