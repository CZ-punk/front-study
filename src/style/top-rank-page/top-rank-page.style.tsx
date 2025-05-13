import {styled, keyframes} from "styled-components";

export const Wrapper = styled.div`
    flex: 2;
    padding: 20px;
    background-color: black;
`

export const TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center; 
    margin-bottom: 20px; 
`

export const Title = styled.h1`
    color: white; 
    font-size: 24px;
    font-weight: bold;
`

export const Table = styled.table`
    min-width: 860px; 
    max-width: 860px; 
    max-height: 1000px;
    min-height: 1000px;
    border-collapse: collapse;
    margin-top: 20px;
`

export const TableHeader = styled.th`
    background-color: 	#778899;
    color: white;
    min-width: 30px;
    
    padding: 10px;
    text-align: center;
    width: 150px;
`

export const TableNicknameHeader = styled.th`
    background-color: 	#778899;
    color: white;
    padding: 10px;
    text-align: center;
    width: 280px;
`

export const TableNicknameCell = styled.td`
    padding: 10px;
    border: 1px solid dimgray;
    text-align: center;
    margin: 0 auto;
    max-height: 80%;
    width: 280px;
`
export const TableCell = styled.td`
    padding: 10px;
    border: 1px solid dimgray;
    text-align: center;
    margin: 0 auto;
    max-height: 80%;
    width: 150px;
`

export const ImageWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between; 
    width: 100%;
`

export const ExperimentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ExperimentImage = styled.img`
    width: 25px;
    height: auto;
    border-radius: 16px;
    margin: 0 4px;
`

export const UsageText = styled.span`
    font-size: 12px;
    color: white; 
    margin-top: 4px;
`;

export const Pagination = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`

export const PageButtonContainer = styled.div`
    display: flex; 
    margin-bottom: 10px;
`;

export const PageButton = styled.button`
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 15px;
    margin: 0 5px;
    border-radius: 5px;
    cursor: pointer;
    width: 55px;

    &:hover {
        background-color: #0056b3;
    }

    &:disabled {
        background-color: #6c757d;
        cursor: not-allowed;
    }
`

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Loader = styled.div`
  border: 8px solid #f3f3f3; 
  border-top: 8px solid #3498db; 
  border-radius: 50%;
  width: 40px; 
  height: 40px;
  animation: ${spin} 1s linear infinite;
  margin: auto; 
`;


export const PageCountSpan = styled.span`
    background-color: #2f5f5f;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    border: none;
    padding: 10px 15px;
    margin: 0 auto;
    border-radius: 5px;
    cursor: pointer;
    width: ;

    &:hover {
        background-color: #0056b3;
    }
`
