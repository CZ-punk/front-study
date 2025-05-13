import styled from "styled-components";



export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const ScoreWrapper = styled.div`
    display: flex;
    flex-direction: row;
`

export const ScoreItemWrapper = styled.h2`
    display: felx;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    text-align: center;
`

export const ScoreItemTitle = styled.div`
    font-size: 14px;
`

export const ScoreItemValue = styled.div`
    font-size: 20px;
    margin-top: 8px;
    font-weight: bold;
`

export const MatchItemWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-top: 20px;
    padding: 10px;
`

export const MatchItem = styled.div<{ $rank: number }>`    
    display: flex;
    align-items: center; 
    justify-content: center;
    width: 30px; 
    height: 30px;
    padding: 10px; 
    margin: 0 auto;
    
    font-size: 14px; 
    font-weight: bold;
    border-radius: 8px; 

    color: ${props => {
        if (props.$rank === 1) return '#ffffff'; 
        if (props.$rank === 2 || props.$rank === 3) return '#ffffff'; 
        return '#808080'; 
    }};

    background-color: ${props => {
        if (props.$rank === 1) return '#ffa500';
        if (props.$rank === 2 || props.$rank === 3) return '#1e90ff';
        return '#ccc';
    }}; 
`;


export const SmallDivider = styled.div`
    width: 2px; 
    height: 100%; 
    background-color: #444; 
    margin: 10px 0;
`;

const RecentMatching = () => {

    const dummyData = Array.from({ length: 20 }, (_, index) => index + 1);

    return (
        <Wrapper>
            <ScoreWrapper>
                <ScoreItemWrapper>
                    <ScoreItemTitle>평균 랭크</ScoreItemTitle>
                    <ScoreItemValue>#3.0</ScoreItemValue>
                </ScoreItemWrapper>
                <SmallDivider />
                <ScoreItemWrapper>
                    <ScoreItemTitle>승리 횟수</ScoreItemTitle>
                    <ScoreItemValue>2</ScoreItemValue>
                </ScoreItemWrapper>
                <SmallDivider />
                <ScoreItemWrapper>
                    <ScoreItemTitle>TOP 3</ScoreItemTitle>
                    <ScoreItemValue>4.5</ScoreItemValue>
                </ScoreItemWrapper>
                <ScoreItemWrapper>
                    <ScoreItemTitle>평균 TK</ScoreItemTitle>
                    <ScoreItemValue>3.5</ScoreItemValue>
                </ScoreItemWrapper>

            </ScoreWrapper>

            <MatchItemWrapper>
                {dummyData.map(rank => (
                    <MatchItem
                        key={rank}
                        $rank={rank}
                    >
                        {rank}
                    </MatchItem>
                ))}

            </MatchItemWrapper>
        </Wrapper>

    );
}


export default RecentMatching;