import styled from "styled-components";
import RankDetail from "./left/rank-detail";
import ExperimentDetail from "./left/experiment-detail";

export const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`

const PlayerBodyLeft: React.FC = () => {
    return (
        <Wrapper>
            <RankDetail />
            <ExperimentDetail />
        </Wrapper>
    )
}


export default PlayerBodyLeft;