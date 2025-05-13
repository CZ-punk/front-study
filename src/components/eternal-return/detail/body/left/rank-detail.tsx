import styled from "styled-components";
import RankHeader from "./rank/rank-header";
import RankBody from "./rank/rank-body";
import RankFooter from "./rank/rank-footer";
import RankGraph from "./rank/rank-graph";


export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    background-color: #2f2f2f;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`

const RankDetail = () => {

    return (

        <Wrapper>
            <RankHeader />
            <RankBody />
            <RankFooter />
            <RankGraph />
        </Wrapper>

    )
}

export default RankDetail;