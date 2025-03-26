import styled from "styled-components";

export const Wrapper = styled.div`
    
    border: 2px solid #ccc;
    border-radius: 16px;
    text-align: center;
    max-width: 400px;
    margin: 40px;
    padding: 20px;
    
    background-color: #2f2f2f;
`
export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`
export const Button = styled.button`
    background-color: gray;
    padding: 15px 15px;
    border-radius: 50px;
    border: 0;
    margin-top: 50px;
    gap: 5px;
    &:hover {
        background-color: #555;
    }
   
`

export const Logo = styled.img`
    width: 25px;
    height: 25px;
    objectFit: contain;
    cursor: pointer;
    
`