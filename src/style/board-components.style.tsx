import { styled } from "styled-components"

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;

    gap: 20px;
    padding: 20px;
    border: 1px solid white;
    border-radius: 15px;
    color: white;

    width: auto;
    height: auto;
    
    align-items: center;
`;

export const Author = styled.span`
    font-weight: 600;
    font-size: 15px;
    text-align: center;
`;

export const Contents = styled.p`
    margin: 10px 0px;
    font-size: 1.2rem;
     max-width: 100%;
    max-height: 80%;
    overflow: auto; 
    white-space: pre-line;
    word-break: break-word;
    
`;

export const ImagePage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Image = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 15px;
    
    object-fit: cover; 
    flex-shrink: 0;
    max-width: 100%;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-around; 
    width: 100%;
    margin-top: 10px;
`;

export const Button = styled.button`
    width: 30px; 
    height: -30px;
    margin: 0 5px;
    padding: 5px;
    background-color: rgba(255, 255, 255, 0.2);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: rgba(255, 255, 255, 0.5);
    }
`;
