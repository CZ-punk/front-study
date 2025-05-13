import styled from "styled-components";
import { Credit, Deal, Player, Stat } from "./details-rank";

export const ObjectWrapper = styled.div`
    background-color: black; 
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`;

export const PercentBar = styled.div`
    width: 100%;
`;

export const Item = styled.div`
    font-size: 12px;
    line-height: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100px;
    padding: 10px 0px;
    font-weight: 600;
    flex: 1 1 0%;
    color: white;
`

export const ItemList = styled.div`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100px;
    gap: 4px;
`

export const ItemDetails = styled.li`
    list-style: none;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    overflow: hidden;
    background: rgb(230, 230, 230);
    width: 30px;
    height: 20px;
`

export const ItemImg = styled.img`
    display: block;
    vertical-align: middle;
    max-width: 100%;
    width: 22px;
    height: 14px;
    object-fit: contain;
    z-index: 2;
`

export const ItemBackgroundImg = styled.img`
    display: block;
    vertical-align: middle;
    max-width: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    z-index: 1;
`


const PlayerItem = () => {
    return (
        <ObjectWrapper>
            <Player>player1</Player>
            <Stat>12 / 3 / 3 / 3</Stat>

            <Deal> 
                <PercentBar></PercentBar>
            </Deal>
            <Deal>
                <PercentBar></PercentBar>
            </Deal>

            <Credit>Credit</Credit>

            <Item>
                <ItemList>
                    <ItemDetails>
                        <ItemBackgroundImg />
                        <ItemImg />
                    </ItemDetails>
                    <ItemDetails>
                        <ItemBackgroundImg />
                        <ItemImg />
                    </ItemDetails>
                    <ItemDetails>
                        <ItemBackgroundImg />
                        <ItemImg />
                    </ItemDetails>
                    <ItemDetails>
                        <ItemBackgroundImg />
                        <ItemImg />
                    </ItemDetails>
                    <ItemDetails>
                        <ItemBackgroundImg />
                        <ItemImg />
                    </ItemDetails>
                </ItemList>
            </Item>
        </ObjectWrapper>
    );
};

export default PlayerItem;
