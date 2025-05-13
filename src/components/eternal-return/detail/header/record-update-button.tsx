import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;

    margin-top: 10px; 
`

export const UpdateButton = styled.button<{ seasonId: number }>`
    background-color: black; 
    color: white; 
    font-size: 1rem;
    padding: 10px 20px;
    border: none; 
    border-radius: 5px;
    cursor: pointer; 
    transition: background-color 0.3s;

    &:hover {
        background-color: #2f4f4f; 
    }

    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
`;

const RecordUpdateButton = ({seasonId}: {seasonId: number}) => {

    return (
        <Wrapper>
            <UpdateButton seasonId={seasonId}>Record Update</UpdateButton>
        </Wrapper>
    )


}

export default RecordUpdateButton;