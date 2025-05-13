import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { DropdownContainer, DropdownBlackButton, DropdownList, DropdownItem } from "../../../../..//style/dropdown.style";
import RecentMatching from "./recent-matching";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #1e1e1e; 
    min-width: 500px;
    color: white; 
    padding: 20px;
    gap: 10px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`

export const CategoryWrapper = styled.nav`
    flex: 1;
    display: flex; 
    flex-direction: row;
    justify-content: space-around; 
    align-items: center;
`

export const CategoryButton = styled.button`
    width: 200px;
    background-color: #2c2c2c; 
    color: white; 
    border: none; 
    border-radius: 5px; 
    padding: 10px 20px;
    cursor: pointer; 
    transition: background-color 0.3s;

    &:hover {
        background-color: #3a3a3a; 
    }

    &:focus {
        outline: none;
    }
`;

export const Divider = styled.hr`
    border: none; 
    height: 1px;
    background-color: black;
    margin: 20px 0;
`;

export const MatchingHeaderWrapper = styled.div`
    display: flex; 
    flex-direction: row;
    justify-content: space-between; 
    padding: 5px 5px 5px 5px;
    height: 44px;

    align-items: center;
    column-gap: 4px;
`

export const MatchingHeaderSpan = styled.span`
    border: 1px solid black;
    border-radius: 16px; 
    background-color: black;
    color: white;
    padding: 15px;
    font-size: 16px;
    width: auto;    
`
export const DropdownContainerWrapper = styled.div`
    height: 40px;
`
export const RecentMatchingWrapper = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
`

const GameInfoHeader = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    // const selectOption = (experimentCode: number) => {
    //     // TODO: 사용한 주요 실험체 코드를 넣어줄 예정
    //     setIsOpen(false);
    // }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);


    useEffect(() => {

    }, [])

    return (
        <Wrapper>

            <CategoryWrapper>
                <CategoryButton>All</CategoryButton>
                <CategoryButton>Rank</CategoryButton>
                <CategoryButton>General</CategoryButton>
            </CategoryWrapper>

            <Divider />

            <RecentMatchingWrapper>
                <MatchingHeaderWrapper>
                    <MatchingHeaderSpan>Recent Matching Summary ( 20 )</MatchingHeaderSpan>
                    <DropdownContainer ref={dropdownRef}>
                        <DropdownBlackButton onClick={toggleDropdown}>
                            experiment btn
                        </DropdownBlackButton>
                        {isOpen && (
                            <DropdownList>
                                {/* 해당 부분에 좌측 icon 넣을 부분 추가 */}
                                <DropdownItem key={1}>ITEM1</DropdownItem>
                                <DropdownItem key={2}>ITEM2</DropdownItem>
                                <DropdownItem key={3}>ITEM3</DropdownItem>

                            </DropdownList>
                        )}
                    </DropdownContainer>
                </MatchingHeaderWrapper>

                <Divider />
                <RecentMatching />

            </RecentMatchingWrapper>

        </Wrapper>
    )
}

export default GameInfoHeader;