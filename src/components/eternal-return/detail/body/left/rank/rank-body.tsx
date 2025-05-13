import styled from "styled-components";


export const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    column-gap: 12px;
    padding: 16px 19px 20px;
    height: 106px;
    min-width: 241px;

    background-color: #2f3335;
    border-radius: 5px;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
`

export const TierImage = styled.img`
    display: block;
    vertical-align: middle;
    max-width: 100%;
    width: 64px;
    height: 64px;
`

export const TierDetails = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 6px;
`

export const RP = styled.b`
    font-size: 16px;
    font-weight: 600;
    line-height: 16px;
    color: #ffffff;
`

export const Tier = styled.div`
    font-size: 12px;
    line-height: 12px;
    font-weight: 600;
    color: #ffffff;
`

export const Rank = styled.div`
    font-size: 12px;
    line-height: 12px;
    color: #cccccc;
`


const RankBody = () => {

    return (
        <Wrapper>
            <TierImage src="/"/>
            <TierDetails>
                <RP>6000RP</RP>
                <Tier>다이아몬드 1 - 40RP</Tier>
                <Rank>29,834위 (상위 12.49%)</Rank>
            </TierDetails>
        </Wrapper>
    )
}

export default RankBody;