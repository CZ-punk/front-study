import { styled } from "styled-components";
import { use, useEffect, useState } from "react";
import getBoardPageListForUser, { ReqBoardSearchCond, ResBoardSearchDto } from "../api/board/getBoardPageListForUser";
import { useApi } from "../api/useApi";
import Board from "./board";


export interface IBoard {
    memberId: number;
    boardId: number;
    title: string;
    contents: string;
    author: string;
    imageUrlList: string[];
    createdAt: string;
}

const Wrapper = styled.div`
    grid-column: 2;
    background-color: #2f2f2f; 
    padding: 20px; 
    border-radius: 16px;
    margin: 20px;
`

const TimeLine = () => {
    const api = useApi();
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");
    const [author, setAuthor] = useState("");
    const [sort, setSort] = useState("");
    const [page, setPage] = useState("");

    const [boards, setBoards] = useState<IBoard[]>([]);
    const fetchBoard = async () => {

        const dto: ReqBoardSearchCond = {
            title: title,
            contents: contents,
            author: author,
            page: page,
            size: null,
            sort: sort,
        }

        const response = await getBoardPageListForUser(dto, api);
        const content = response.data.content;
        const boards: IBoard[] = content.map(dto => {
            const { memberId, boardId, title, contents, author, imageUrlList, createdAt } = dto;
            return { memberId, boardId, title, contents, author, imageUrlList, createdAt };
        })

        setBoards(boards);
    }

    useEffect(() => {
        fetchBoard();
    }, [])

    return (
        <Wrapper>
            {
                boards.map((board) => (
                    <Board key={board.boardId} {...board} />
                ))
            }

        </Wrapper>
    )
}

export default TimeLine;