import styled from "styled-components";

export const DropdownContainer = styled.div`
    position: relative;
    width: 150px; 
`;

export const DropdownButton = styled.button`
    width: 100%;
    padding: 10px;
    background-color: #f0f0f0;
    border: 1px solid dimgray;
    border-radius: 16px;
    cursor: pointer;
`;

export const DropdownBlackButton = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    border: 1px solid black;
    color: white;
    font-size: 16px;
    border-radius: 16px;
    cursor: pointer;
`;

export const DropdownList = styled.ul`
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    max-height: 180px; 
    overflow-y: auto;
    background-color: white;
    color: black;
    border: 1px solid dimgray;
    border-radius: 16px;
    list-style: none;
    text-align: center;
    padding: 0;
    margin: 0;
    z-index: 1000;
`;

export const DropdownItemProps = styled.li<{ $currentSeason: boolean }>`
    padding: 10px;
    cursor: pointer;
    background-color: ${props => (props.$currentSeason ? '#d1e7dd' : 'transparent')};
    font-weight: ${props => (props.$currentSeason ? 'bold' : 'normal')}; 
    &:hover {
        background-color: #f0f0f0;
    }
`;

export const DropdownItem = styled.li`
    padding: 10px;
    cursor: pointer;
    background-color: #d1e7dd;
    font-weight: normal;
    &:hover {
        background-color: #f0f0f0;
    }
`;