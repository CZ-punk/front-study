import { AxiosInstance } from "axios";

export interface ReqBoardSearchCond {
    title: string | null;
    contents: string | null;
    author: string | null;
    page: string | null;
    size: number | null;
    sort: string | null;
}

export interface ResBoardSearchDto {
    memberId: number;
    boardId: number;
    title: string;
    contents: string;
    author: string;
    imageUrlList: string[];
    createdAt: string;
}

interface PageResponse {
    content: ResBoardSearchDto[];
    pageNumber: number;
    pageSize: number;
    totalElements: number;
    totalPages: number;
    first: boolean;
    last: boolean;
}

interface ResPostBoardDto {
    code: string;
    message: string;
    data: PageResponse;
}

const getBoardPageListForUser = async (dto: ReqBoardSearchCond | null, api: AxiosInstance): Promise<ResPostBoardDto> => {
    try {
        const response = await api.get(
            "/api/v1/board/search-user",
            {
                params: {
                    title: dto?.title,
                    contents: dto?.contents,
                    author: dto?.author,
                    size: dto?.size,
                    sort: dto?.sort
                }
            }
        );

        console.log('data: ', response.data);
        return response.data;

    } catch (error) {
        console.error('Get Board Page List Error: ', error);
        throw error;
    }
}

export default getBoardPageListForUser;