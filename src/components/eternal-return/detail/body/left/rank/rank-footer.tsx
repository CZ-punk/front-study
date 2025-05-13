import styled from "styled-components";

const Wrapper = styled.div`
    background-color: #1b4958;
    padding: 10px;
    border-radius: 5px;
    text-align: right;
    font-size: 14px;
`;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    min-width: 283px;
`;

const Cell = styled.div`
    background-color: #2a6a7a;
    border-radius: 5px;
    padding: 10px;
    text-align: left;
    color: white;
`;

const BarContainer = styled.div`
    background-color: #494f52; 
    border-radius: 5px;
    height: 5px;
    width: 100%;
`;

const Bar = styled.div<{ $width: number }>`
    background-color: #4caf50;
    height: 100%;
    border-radius: 5px;
    width: ${props => props.$width}%; 
    margin-top: 5px;  
`;

const RankFooter = () => {
    const data = [
        { name: "Top 1", value: 80 },
        { name: "Top 2", value: 70 },
        { name: "Top 3", value: 60 },
        { name: "평균 TK", value: 75 },
        { name: "평균 킬", value: 50 },
        { name: "평균 어시", value: 40 },
        { name: "게임수", value: 100 },
        { name: "평균 딜량", value: 90 },
        { name: "평균 순위", value: 30 },
    ];

    return (
        <Wrapper>
            <GridContainer>
                {data.map((item, index) => (
                    <Cell key={index}>
                        <div>{item.name}</div>
                        <BarContainer>
                            <Bar $width={item.value} />
                        </BarContainer>

                        <div>{item.value}</div>
                    </Cell>
                ))}
            </GridContainer>
        </Wrapper>
    );
};

export default RankFooter;
