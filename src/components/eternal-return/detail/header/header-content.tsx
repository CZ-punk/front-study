import styled from "styled-components";
import RecordUpdateButton from "./record-update-button";

export const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start; 
    align-items: flex-start;
    padding: 10px; 
    background-color: #4f5659; 
    border-radius: 8px; 
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); 
    width: 300px;
`;

export const NicknameWrapper = styled.div`
    border-radius: 16px;
    background-color: #233853;
    padding: 10px 15px; 
    display: flex; 
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`

export const Nickname = styled.h3`
    font-size: 1.5rem; 
    color: white;
    margin: 5px 0; 
`;

export const LevelWrapper = styled.div`
    border-radius: 16px;
    background-color: #054d79 ; 
    padding: 10px 15px; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    margin-bottom: 10px; 
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); 
`

export const Level = styled.span`
    font-size: 1rem;
    color: white;
    margin: 3px; 
    font-weight: bold; 
    
`;

const HeaderContent = ({level, nickname, selectSeason}: {level: string, nickname: string, selectSeason: number}) => {

    return (
        <Wrapper>
            <LevelWrapper>
                <Level>{level}</Level>
            </LevelWrapper>
            <NicknameWrapper>
                <Nickname>{nickname}</Nickname>
            </NicknameWrapper>

            <RecordUpdateButton seasonId={selectSeason} />
        </Wrapper>
    )
}

export default HeaderContent;