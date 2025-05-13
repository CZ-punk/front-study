import React, { useEffect, useState, useRef } from "react";
import SearchTopRank, { Content, MainExperiment, UserRankDtoPage } from "../../../api/eternal-return/search-top-rank";
import { useApi } from "../../../api/useApi";
import GetSeason, { ResSeasonDto } from "../../../api/eternal-return/get-season";
import { DropdownContainer, DropdownButton, DropdownList, DropdownItemProps } from "../../../style/dropdown.style";
import { Wrapper, TitleWrapper, Title, Table, TableHeader, TableNicknameHeader, TableNicknameCell, TableCell, ImageWrapper, ExperimentContainer, ExperimentImage, UsageText, Pagination, PageButton, Loader, PageCountSpan, PageButtonContainer } from "../../../style/top-rank-page/top-rank-page.style";

const eternal_return_profile_url = "https://ch-blog-bucket.s3.ap-northeast-2.amazonaws.com/eternal-return/experiment/profile/"

const TopRankPage: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [seasonList, setSeasonList] = useState<ResSeasonDto[]>();
    const [selectSeason, setSelectSeason] = useState<number>(31);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [contents, setContents] = useState<Content[][]>([]);
    const [totalPages, setTotalPages] = useState<number>(0);
    const scrollDownRef = useRef<HTMLDivElement | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const api = useApi();

    const handlePageChange = (e: React.MouseEvent<HTMLButtonElement>, page: number) => {
        e.preventDefault();
        setCurrentPage(page);
    }

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    const selectOption = (seasonId: number) => {
        setSelectSeason(seasonId);
        setCurrentPage(1);
        setIsOpen(false);
    }

    const fetchGetSeason = async () => {
        const response = await GetSeason(api);
        const resSeasonDto: ResSeasonDto[] = response.data;
        const seasonList: ResSeasonDto[] = resSeasonDto.map(dto => {
            const { seasonId, seasonName, seasonStart, seasonEnd, isCurrent }: ResSeasonDto = dto;
            return { seasonId, seasonName, seasonStart, seasonEnd, isCurrent };
        })
        setSeasonList(seasonList);
    }

    const fetchSearchTopRank = async (size: number) => {
        try {
            const PageSize = 10;
            const response = await SearchTopRank(api, selectSeason.toString(), (currentPage - 1) / PageSize, size);
            const userRankDtoPage: UserRankDtoPage = response.data.userRankDtoPage;
            const pageContents: Content[][] = [];
            pageContents.push(...contents);
            for (let i = 0; i < userRankDtoPage.content.length; i += PageSize) {
                const pageContent: Content[] = userRankDtoPage.content.slice(i, i + 10).map(dto => {
                    const { experimentCode1, experimentCode2, experimentCode3, usage1, usage2, usage3 }: MainExperiment = dto.mainExperiment;
                    const { userNum, rank, nickname, mmr, averageRank, averageWin, top3, averageKill, escapeCount, totalGameCount }: Content = dto;
                    return {
                        userNum, rank, nickname, mmr, averageRank, averageWin, top3, averageKill, escapeCount, totalGameCount, mainExperiment: { experimentCode1, experimentCode2, experimentCode3, usage1, usage2, usage3 }
                    }
                });

                pageContents.push(pageContent);
            }

            setContents(pageContents);
            setTotalPages(userRankDtoPage.totalPages * PageSize);

        } catch (err) {
            console.error('data request failed', err);
            setErrorMessage('Sorry Server Error...');
        } finally {
            setLoading(false);
            setErrorMessage(null);
        }
    }

    useEffect(() => {
        fetchGetSeason();
    }, []);

    useEffect(() => {
        if (!contents[currentPage - 1] || contents[currentPage - 1].length === 0)
            fetchSearchTopRank(100);
    }, [currentPage, selectSeason]);

    
    const getPageNumbers = () => {
        const startPage = Math.floor((currentPage - 1) / 10) * 10 + 1;
        const endPage = Math.min(startPage + 9, totalPages);
        return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
    };
    const pageNumbers: number[] = getPageNumbers();
    
    return (
        <Wrapper>
            <TitleWrapper>
                <Title>Top Rank</Title>

                <DropdownContainer>
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
            </TitleWrapper>


            {loading && <Loader></Loader>}
            {errorMessage && <p>{errorMessage}</p>}

            {
                contents[currentPage - 1] ?
                    <Table>
                        <thead>
                            <tr>
                                <TableHeader>Ranking</TableHeader>
                                <TableNicknameHeader>Nickname</TableNicknameHeader>
                                <TableHeader>MMR</TableHeader>
                                <TableHeader>Average Win</TableHeader>
                                <TableHeader>Top 3</TableHeader>
                                <TableHeader>Average Rank</TableHeader>
                                <TableHeader>Average Kill</TableHeader>
                                <TableHeader>Most Experiment</TableHeader>
                            </tr>
                        </thead>
                        <tbody>
                            {contents[currentPage - 1].map((ranker) => (
                                <tr key={ranker.userNum}>
                                    <TableCell>{ranker.rank}</TableCell>
                                    <TableNicknameCell>{ranker.nickname}</TableNicknameCell>
                                    <TableCell>{ranker.mmr}</TableCell>
                                    <TableCell>{ranker.averageWin}</TableCell>
                                    <TableCell>{ranker.top3}</TableCell>
                                    <TableCell>{ranker.averageRank}</TableCell>
                                    <TableCell>{ranker.averageKill}</TableCell>
                                    <TableCell>
                                        <ImageWrapper>
                                            {ranker.mainExperiment.experimentCode1 ? (
                                                <ExperimentContainer>
                                                    <ExperimentImage src={`${eternal_return_profile_url}${ranker.mainExperiment.experimentCode1.toString().padStart(3, '0')}.png`} alt="most1" />
                                                    <UsageText>{ranker.mainExperiment.usage1}</UsageText>
                                                </ExperimentContainer>
                                            ) : null}
                                            {ranker.mainExperiment.experimentCode2 ? (
                                                <ExperimentContainer>
                                                    <ExperimentImage src={`${eternal_return_profile_url}${ranker.mainExperiment.experimentCode2.toString().padStart(3, '0')}.png`} alt="most2" />
                                                    <UsageText>{ranker.mainExperiment.usage2}</UsageText>
                                                </ExperimentContainer>
                                            ) : null}
                                            {ranker.mainExperiment.experimentCode3 ? (
                                                <ExperimentContainer>
                                                    <ExperimentImage src={`${eternal_return_profile_url}${ranker.mainExperiment.experimentCode3.toString().padStart(3, '0')}.png`} alt="most3" />
                                                    <UsageText>{ranker.mainExperiment.usage3}</UsageText>
                                                </ExperimentContainer>
                                            ) : null}
                                        </ImageWrapper>
                                    </TableCell>

                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    :
                    (<p>No Data</p>)
            }

            <Pagination ref={scrollDownRef}>
                <PageButtonContainer>
                    <PageButton onClick={((e) => handlePageChange(e, currentPage - 1))} disabled={currentPage === 1}>
                        Prev
                    </PageButton>
                    {pageNumbers.map((page) => (
                        <PageButton
                            key={page}
                            onClick={(e) => handlePageChange(e, page)}
                            disabled={currentPage === page}
                        >
                            {page}
                        </PageButton>

                    ))}
                    <PageButton onClick={((e) => handlePageChange(e, currentPage + 1))} disabled={currentPage === totalPages}>
                        Next
                    </PageButton>
                </PageButtonContainer>

                <PageCountSpan>{currentPage} / {totalPages}</PageCountSpan>
            </Pagination>

        </Wrapper >
    );

}


export default TopRankPage;