import { styled } from "styled-components";
import { useEffect, useState } from "react";
import getBoardPageListForUser, { ReqBoardSearchCond } from "../api/board/getBoardPageListForUser";
import { useApi } from "../api/useApi";
import Board from "../components/board/board";


export interface IBoard {
    memberId: number;
    boardId: number;
    title: string;
    contents: string;
    author: string;
    imageUrlList: string[];
    createdAt: string;
}

export const SettingWrapper = styled.div`
    grid-column: 1;
    background-color: #2f2f2f;
    padding: 20px;
    border-radius: 16px;
    margin: 20px
`
export const BoardWrapper = styled.div`
    grid-column: 2;
    background-color: #2f2f2f; 
    padding: 20px; 
    border-radius: 16px;
    margin: 20px;
`

export const Input = styled.input`
    margin: 10px 0;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #ccc;
    width: calc(100% - 22px);
`

export const Select = styled.select`
    margin: 10px 0;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #ccc;
    width: calc(100% - 22px);
`

export const Button = styled.button`
    padding: 10px 15px;
    border-radius: 8px;
    border: none;
    background-color: #007bff;
    color: white;
    cursor: pointer;
    margin-top: 10px;

    &:hover {
        background-color: #0056b3;
    }
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
        <>
            <SettingWrapper>
                <Input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <Input
                    type="text"
                    placeholder="Contents"
                    value={contents}
                    onChange={(e) => setContents(e.target.value)}
                />
                <Input
                    type="text"
                    placeholder="Author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                <Select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                >
                    <option value="">Select Sort</option>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </Select>
            </SettingWrapper>
            <BoardWrapper>
                <Input
                    type="text"
                    placeholder="Page"
                    value={page}
                    onChange={(e) => setPage(e.target.value)}
                />
                <Button onClick={fetchBoard}>Search</Button>

                {
                    boards.map((board) => (
                        <Board key={board.boardId} {...board} />
                    ))
                }

            </BoardWrapper>
        </>
    )
}

export default TimeLine;