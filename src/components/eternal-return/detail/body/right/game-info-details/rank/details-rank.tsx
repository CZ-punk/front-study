import styled from "styled-components";
import PlayerTeamCard from "./player-team-card";

// Wrapper for the entire component
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

// MMR display item
export const MMRItem = styled.div`
    background-color: #ff69b4;
    text-align: center;
    padding: 10px;
    font-weight: bold;
`;

// Main object wrapper for player details
export const ObjectWrapper = styled.div`
    background-color: gray; 
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 5px;
    width: 100%;
`;

// Common styles for Stat, Deal, Item, Credit components
const CommonStyledDiv = styled.div`
    display: flex;
    line-height: 12px;
    padding: 10px 0;
    font-weight: 600;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 12px;
    text-align: center;
`;

// Specific components with common styles
export const Stat = styled(CommonStyledDiv)`
    min-width: 100px;
    max-width: 100px;
`;

export const Deal = styled(CommonStyledDiv)`
    min-width: 100px;
    max-width: 100px;
`;

export const Item = styled(CommonStyledDiv)`
    min-width: 100px;
    max-width: 100px;
`;

export const Credit = styled(CommonStyledDiv)`
    min-width: 100px;
    max-width: 100px;
`;

// Rank component with specific width
export const Rank = styled.div`
    display: flex;
    line-height: 12px;
    padding: 10px 0;
    font-weight: 600;
    min-width: 50px;
    max-width: 50px;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 12px;
    text-align: center;
`;

// Player component with specific width
export const Player = styled.div`
    color: white;
    font-size: 12px;
    line-height: 12px;
    display: flex;
    min-width: 200px;
    max-width: 200px;
    font-weight: 600;
    align-items: center;
    padding: 10px 0;
    text-align: center;
    padding-left: 12px;
`;

const DetailsRank = () => {
    return (
        <Wrapper>
            <MMRItem>Average MMR: {3000}</MMRItem>
            <ObjectWrapper>
                <Rank>#</Rank>
                <Player>Player</Player>
                <Stat>TK / K / D / A</Stat>
                <Deal>Deal Amount</Deal>
                <Deal>Animal Deal Amount</Deal>
                <Credit>Credit</Credit>
                <Item>Item Build</Item>
            </ObjectWrapper>
            <PlayerTeamCard />
        </Wrapper>
    );
};

export default DetailsRank;
