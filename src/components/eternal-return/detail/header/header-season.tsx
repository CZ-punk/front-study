import styled from "styled-components";
import { ResSeasonDto } from "../../../../api/eternal-return/get-season";
import { DropdownContainer, DropdownButton, DropdownList, DropdownItemProps } from "../../../../style/dropdown.style";
import { useEffect, useRef, useState } from "react";

export const Wrapper = styled.div`

    flex: 1;

`

export const SeasonWrapper = styled.div`
`

const HeaderSeason = ({ seasonList, selectSeason, setSelectSeason }: {seasonList: ResSeasonDto[] | undefined, selectSeason: number, setSelectSeason: (season: number) => void}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    const selectOption = (seasonId: number) => {
        setSelectSeason(seasonId);
        setIsOpen(false);
    }
    
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

    return (
        <Wrapper>
            <DropdownContainer ref={dropdownRef}>
                <DropdownButton onClick={toggleDropdown}>
                    {selectSeason ? seasonList?.find(season => season.seasonId === selectSeason)?.seasonName : 'Select a season'}
                </DropdownButton>
                {isOpen && (
                    <DropdownList>
                        {seasonList?.map(season => (

                            <DropdownItemProps
                                key={season.seasonId}
                                $currentSeason={season.isCurrent}
                                onClick={() => selectOption(season.seasonId)}
                            >
                                {season.seasonName}
                            </DropdownItemProps>
                        ))}
                    </DropdownList>
                )}
            </DropdownContainer>

        </Wrapper>
    )
}

export default HeaderSeason;