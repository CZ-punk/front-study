import styled from "styled-components";
import DetailsRank from "./rank/details-rank";
import DetailsBuildStat from "./build-stat/details-build-stat";
import DetailsKillInfo from "./kill-info/details-kill-info";
import DetailsCharacteristic from "./characteristic/details-characteristic";



export const Wrapper = styled.div`
`

interface Props {
    itemId: number;
}

const DetailsBody: React.FC<Props> = ({itemId}) => {
    // TODO: 특정 state 값이 다를 때마다 Body 컴포넌트는 각각 알맞은 component 로 리렌더링되어야 한다.

    return (
        <Wrapper>
            {itemId === 1 && <DetailsRank />}
            {itemId === 2 && <DetailsBuildStat />}
            {itemId === 3 && <DetailsKillInfo/>}
            {itemId === 4 && <DetailsCharacteristic />}
        </Wrapper>
    )
}

export default DetailsBody;